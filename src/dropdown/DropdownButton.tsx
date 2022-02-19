import React, { ReactNode, CSSProperties } from 'react';
import { css } from '@emotion/core';
import { classNames } from '../utils/classNames';
import { mergeProps } from '@react-aria/utils';
import { useButton } from '@react-aria/button';
import { useHover } from '@react-aria/interactions';
import { FocusableRef } from '../types';
import { useFocusableRef } from '../utils/useDOMRef';
import theme from '../theme';
import { Text } from '../content';
import { Icon, ArrowIosDownwardOutline } from '../icon';
import { AddonableProps } from '../types';

const addonBeforeCSS = css`
  background-color: ${theme.colors.gray400};
  padding: ${theme.spacing.padding8}px;
  flex: none;
`;

/**
 * A label element that describes the button
 */
function AddonBefore({ children }: { children: ReactNode }) {
  return (
    <div css={addonBeforeCSS}>
      <Text textSize="medium" weight="heavy" color="white70">
        {children}
      </Text>
    </div>
  );
}
export interface DropdownButtonProps extends AddonableProps {
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /** The content to display in the button. */
  children?: ReactNode;
  style?: CSSProperties;
}

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
  const { isDisabled, children, style, addonBefore, ...otherProps } = props;
  const { buttonProps, isPressed } = useButton(props, domRef);
  const { hoverProps, isHovered } = useHover({ isDisabled });

  return (
    <button
      {...mergeProps(buttonProps, hoverProps, otherProps)}
      ref={domRef}
      className={classNames('ac-dropdown-button', {
        'is-active': isPressed,
        'is-disabled': isDisabled,
        'is-hovered': isHovered,
      })}
      style={style}
      css={css`
        background-color: ${theme.colors.gray500};
        min-width: 200px;
        border: none;
        border-radius: ${theme.borderRadius.medium}px;
        color: ${theme.textColors.white90};
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        overflow: hidden;
        cursor: pointer;
        border: 1px solid ${theme.components.dropdown.borderColor};
        transition: all 0.2s ease-in-out;
        /** provide an alternate highlight */
        outline: none;
        &.is-hovered {
          border: 1px solid ${theme.components.dropdown.hoverBorderColor};
          background-color: ${theme.components.dropdown.activeBackgroundColor};
        }
        &.is-active,
        &:focus {
          border: 1px solid ${theme.components.dropdown.activeBorderColor};
          background-color: ${theme.components.dropdown.activeBackgroundColor};
        }
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
      `}
    >
      {addonBefore != null ? <AddonBefore>{addonBefore}</AddonBefore> : null}
      <Text className="ac-dropdown-button__text" textSize="medium">
        {children}
      </Text>
      <Icon svg={<ArrowIosDownwardOutline />} />
    </button>
  );
}

let _DropdownButton = React.forwardRef(DropdownButton);
export { _DropdownButton as DropdownButton };
