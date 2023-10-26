import React, { ReactNode, CSSProperties } from 'react';
import { css, keyframes } from '@emotion/react';
import { classNames } from '../utils/classNames';
import { mergeProps } from '@react-aria/utils';
import { useButton } from '@react-aria/button';
import { useHover } from '@react-aria/interactions';
import { FocusableRef, Validation } from '../types';
import { useFocusableRef } from '../utils/useDOMRef';
import theme from '../theme';
import { AddonBefore } from '../field';
import { Icon, ArrowIosDownwardOutline, AlertCircleOutline } from '../icon';
import { AddonableProps } from '../types';
import { FocusRing } from '@react-aria/focus';
import { textSizeCSS } from '../content/styles';

const appearKeyframes = keyframes`
    0% {  opacity: 0; }
    100% { opacity: 1; }
`;
export interface DropdownButtonProps extends AddonableProps, Validation {
  /**
   * Whether the button should be displayed with a quiet style.
   * @default false
   */
  isQuiet?: boolean;
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  isActive?: boolean;
  /** The content to display in the button. */
  children?: ReactNode;
  style?: CSSProperties;
}

const buttonBaseCSS = css`
  border: none;
  background-color: transparent;
  color: var(--ac-global-text-color-900);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  /** provide an alternate highlight */
  outline: none;
  .ac-dropdown-button__text {
    flex: 1 1 auto;
    text-align: left;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: var(--ac-field-text-color-override, var(--ac-global-text-color-900));
  }
  .ac-dropdown-button__dropdown-icon {
    margin: 10px 0 10px 10px;
    flex: fixed;
    width: 16px;
    height: 16px;
    font-size: 16px;
  }

  /* Validation styles */
  --ac-validation-icon-width: var(--ac-global-dimension-size-300);

  // prepend some space before the icon
  .ac-dropdown-button__validation-icon {
    margin: 0 0 0 10px;
  }
  &[disabled] {
    opacity: ${theme.opacity.disabled};
  }
  .ac-dropdown-button__validation-icon {
    /* Animate in the icon */
    animation: ${appearKeyframes} ${0.2}s forwards ease-in-out;
    top: var(--ac-global-dimension-static-size-100);
    right: 0;
    &.ac-dropdown-button__validation-icon--invalid {
      color: var(--ac-global-color-danger);
    }
  }

  // Make room for the invalid icon
  &.ac-dropdown-button > .ac-dropdown-button__text {
    padding-right: calc(
      var(--ac-global-dimension-static-size-100) +
        var(--ac-validation-icon-width)
    );
  }

  &.ac-dropdown-button--invalid > .ac-dropdown-button__text {
    padding-right: 0;
  }
`;

/**
 * Styles to add in addition to the base button styles for quiet
 */
const quietButtonCSS = css`
  --ac-dropdown-button-border-color: var(--ac-global-border-color-default);
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-top: 1px solid transparent;
  border-bottom: 1px solid
    var(
      --ac-field-border-color-override,
      var(--ac-dropdown-button-border-color)
    );
  margin: var(--ac-global-dimension-static-size-100) 0
    var(--ac-global-dimension-static-size-100) 0;
  &.is-hovered {
    border-bottom: 1px solid var(--ac-global-color-grey-500);
  }
  &.is-active,
  &:focus {
    border-bottom: 1px solid var(--ac-global-color-primary);
  }
  &[disabled] {
    cursor: default;
    border-bottom: 1px solid ${theme.components.dropdown.borderColor};
  }
  &.ac-dropdown-button--invalid {
    border-bottom-color: var(--ac-global-color-danger);
    div.ac-dropdown__content {
      color: var(--ac-global-color-danger);
    }
  }
`;

/**
 * Styles to add in addition to the base button styles for non-quiet
 */
const nonQuietButtonCSS = css`
  min-width: 200px;
  padding: 0 var(--ac-global-dimension-static-size-100) 0 0;
  --ac-dropdown-button-border-color: var(--ac-global-input-field-border-color);
  border: 1px solid
    var(
      --ac-field-border-color-override,
      var(--ac-dropdown-button-border-color)
    );
  border-radius: ${theme.borderRadius.medium}px;
  background-color: var(--ac-global-input-field-background-color);
  &.is-hovered {
    border: 1px solid var(--ac-global-input-field-border-color-hover);
    background-color: var(--ac-global-input-field-background-color-active);
  }
  &.is-active,
  &:focus {
    border: 1px solid var(--ac-global-input-field-border-color-active);
    background-color: var(--ac-global-input-field-background-color-active);
  }
  &[disabled] {
    cursor: default;
    border: 1px solid ${theme.components.dropdown.borderColor};
  }
  .ac-dropdown-button__text {
    margin: var(--ac-global-dimension-static-size-100)
      var(--ac-global-dimension-static-size-100)
      var(--ac-global-dimension-static-size-100)
      var(--ac-global-dimension-static-size-200);
  }

  &.ac-dropdown-button--invalid {
    border: 1px solid var(--ac-global-color-danger);
    div.ac-dropdown__content {
      color: var(--ac-global-color-danger);
    }
  }

  // Make room for the invalid icon (outer padding + icon width + inner padding)
  &.ac-dropdown-button--invalid > div.ac-dropdown__content {
    padding-right: ${theme.spacing.padding8 + 24 + theme.spacing.padding4}px;
  }
`;

/**
 * A button that displays
 * @param props
 * @param ref
 * @returns
 */
function DropdownButton(
  props: DropdownButtonProps,
  ref: FocusableRef<HTMLButtonElement>
) {
  let domRef = useFocusableRef(ref);
  const {
    isQuiet = false,
    isDisabled,
    isActive,
    children,
    style,
    addonBefore,
    validationState,
    // TODO: add support for autoFocus
    // autoFocus,
    ...otherProps
  } = props;
  const { buttonProps, isPressed } = useButton(props, domRef);
  const { hoverProps, isHovered } = useHover({ isDisabled });
  const isInvalid = validationState === 'invalid';

  const validation = (
    <Icon
      key="validation-icon"
      className={`ac-dropdown-button__validation-icon ac-dropdown-button__validation-icon--${validationState}`}
      svg={<AlertCircleOutline />}
    />
  );
  return (
    <FocusRing focusRingClass="focus-ring">
      <button
        {...mergeProps(buttonProps, hoverProps, otherProps)}
        ref={domRef}
        className={classNames('ac-dropdown-button', {
          'ac-dropdown-button--quiet': isQuiet,
          'is-active': isActive || isPressed,
          'is-disabled': isDisabled,
          'is-hovered': isHovered,
          'ac-dropdown-button--invalid': isInvalid,
          'ac-dropdown-button--valid': validationState === 'valid',
        })}
        style={style}
        css={css(
          buttonBaseCSS,
          textSizeCSS('medium'),
          isQuiet ? quietButtonCSS : nonQuietButtonCSS
        )}
      >
        {addonBefore != null ? <AddonBefore>{addonBefore}</AddonBefore> : null}
        <span
          className="ac-dropdown-button__text"
          css={css`
            color: var(
              --ac-field-text-color-override,
              var(--ac-global-text-color-900)
            );
          `}
        >
          {children}
        </span>
        {validationState && validationState === 'invalid' ? validation : null}
        <Icon
          className="ac-dropdown-button__dropdown-icon"
          svg={<ArrowIosDownwardOutline />}
        />
      </button>
    </FocusRing>
  );
}

let _DropdownButton = React.forwardRef(DropdownButton);
export { _DropdownButton as DropdownButton };
