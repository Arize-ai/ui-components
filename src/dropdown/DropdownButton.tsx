import React, { ReactNode, CSSProperties } from 'react';
import { css } from '@emotion/react';
import { classNames } from '../utils/classNames';
import { mergeProps } from '@react-aria/utils';
import { useButton } from '@react-aria/button';
import { useHover } from '@react-aria/interactions';
import { FocusableRef } from '../types';
import { useFocusableRef } from '../utils/useDOMRef';
import theme from '../theme';
import { Text } from '../content';
import { AddonBefore } from '../field';
import { Icon, ArrowIosDownwardOutline } from '../icon';
import { AddonableProps } from '../types';
import { FocusRing } from '@react-aria/focus';

export interface DropdownButtonProps extends AddonableProps {
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
  min-width: 200px;
  border: none;
  background-color: transparent;
  color: ${theme.textColors.white90};
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
    margin: ${theme.spacing.margin8}px ${theme.spacing.margin8}px
      ${theme.spacing.margin8}px ${theme.spacing.margin16}px;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .ac-icon-wrap {
    margin-right: 10px;
    flex: fixed;
    width: 16px;
    height: 16px;
    font-size: 16px;
  }
  &[disabled] {
    opacity: ${theme.opacity.disabled};
  }
`;

/**
 * Styles to add in addition to the base button styles for quiet
 */
const quietButtonCSS = css`
  --ac-dropdown-button-border-color: ${theme.components.dropdown.borderColor};
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-top: 1px solid transparent;
  border-bottom: 1px solid
    var(
      --ac-field-border-color-override,
      var(--ac-dropdown-button-border-color)
    );
  &.is-hovered {
    border-bottom: 1px solid ${theme.components.dropdown.hoverBorderColor};
  }
  &.is-active,
  &:focus {
    border-bottom: 1px solid ${theme.components.dropdown.activeBorderColor};
  }
  &[disabled] {
    cursor: default;
    border-bottom: 1px solid ${theme.components.dropdown.borderColor};
  }
`;

/**
 * Styles to add in addition to the base button styles for non-quiet
 */
const nonQuietButtonCSS = css`
  --ac-dropdown-button-border-color: ${theme.components.dropdown.borderColor};
  border: 1px solid
    var(
      --ac-field-border-color-override,
      var(--ac-dropdown-button-border-color)
    );
  border-radius: ${theme.borderRadius.medium}px;
  background-color: ${theme.components.dropdown.backgroundColor};
  &.is-hovered {
    border: 1px solid ${theme.components.dropdown.hoverBorderColor};
    background-color: ${theme.components.dropdown.activeBackgroundColor};
  }
  &.is-active,
  &:focus {
    border: 1px solid ${theme.components.dropdown.activeBorderColor};
    background-color: ${theme.components.dropdown.activeBackgroundColor};
  }
  &[disabled] {
    cursor: default;
    border: 1px solid ${theme.components.dropdown.borderColor};
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
    // TODO: add support for autoFocus
    // autoFocus,
    ...otherProps
  } = props;
  const { buttonProps, isPressed } = useButton(props, domRef);
  const { hoverProps, isHovered } = useHover({ isDisabled });

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
        })}
        style={style}
        css={css(buttonBaseCSS, isQuiet ? quietButtonCSS : nonQuietButtonCSS)}
      >
        {addonBefore != null ? <AddonBefore>{addonBefore}</AddonBefore> : null}
        <Text className="ac-dropdown-button__text" textSize="medium">
          {children}
        </Text>
        <Icon svg={<ArrowIosDownwardOutline />} />
      </button>
    </FocusRing>
  );
}

let _DropdownButton = React.forwardRef(DropdownButton);
export { _DropdownButton as DropdownButton };
