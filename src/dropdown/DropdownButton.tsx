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
export interface DropdownButtonProps {
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /** The content to display in the button. */
  children?: ReactNode;
  style?: CSSProperties;
  /**
   * A label that can be appended to the beginning of the button
   * (e.x. dataset, formula, etc.). Useful when there is no form label
   */
  addonBefore?: ReactNode;
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
        border: none;
        border-radius: 4px;
        color: ${theme.textColors.white90};
        display: flex;
        align-items: center;
        padding: 0;
        overflow: hidden;
        cursor: pointer;
        border: 1px solid ${theme.components.dropdown.borderColor};
        .ac-dropdown-button__text {
          flex: 1 1 auto;
          margin: ${theme.spacing.margin8}px 4px ${theme.spacing.margin8}px
            ${theme.spacing.margin8}px;
          display: inline-block;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .ac-icon-wrap {
          margin-right: ${theme.spacing.margin8}px;
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
