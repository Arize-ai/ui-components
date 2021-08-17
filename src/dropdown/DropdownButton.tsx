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

interface DropdownButtonProps {
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
  const { isDisabled, children, style, ...otherProps } = props;
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
        .ac-dropdown-button__text {
          margin: ${theme.spacing.margin8}px ${theme.spacing.margin16}px;
          display: inline-block;
        }
        .ac-icon-wrap {
          margin-right: ${theme.spacing.margin8}px;
        }
      `}
    >
      <Text className="ac-dropdown-button__text" textSize="medium">
        {children}
      </Text>
      <Icon svg={<ArrowIosDownwardOutline />} />
    </button>
  );
}

let _DropdownButton = React.forwardRef(DropdownButton);
export { _DropdownButton as DropdownButton };
