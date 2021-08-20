import React, { ReactNode, SyntheticEvent } from 'react';
import { css } from '@emotion/core';
import theme from '../theme';
import Spinner from '../Spinner';
import { Text } from '../content';
import { FocusableRef } from '../types';
import { useFocusableRef } from '../utils/useDOMRef';
import { classNames } from '../utils/classNames';
import { mergeProps } from '@react-aria/utils';
import { useButton } from '@react-aria/button';
import { useHover } from '@react-aria/interactions';
import { BaseButtonProps } from './types';

const buttonCSS = css`
  color: ${theme.colors.text1};
  border: 1px solid ${theme.colors.dark1};
  font-size: ${theme.typography.sizes.medium};
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &[data-size='normal'][data-childless='false'] {
    padding: ${theme.spacing.padding8}px ${theme.spacing.padding16}px;
  }
  &[data-size='compact'][data-childless='false'] {
    padding: ${theme.spacing.padding4}px ${theme.spacing.padding8}px;
  }
  &[data-size='normal'][data-childless='true'] {
    padding: ${theme.spacing.padding8}px ${theme.spacing.padding8}px;
  }
  &[data-size='compact'][data-childless='true'] {
    padding: ${theme.spacing.padding4}px ${theme.spacing.padding4}px;
  }
  &[data-variant='primary'] {
    background-color: ${theme.colors.arizeBlue};
    border-color: ${theme.components.button.primaryBorderColor};
    &:hover {
      background-color: ${theme.components.button.primaryHoverBackgroundColor};
    }
  }
  &[data-variant='default'] {
    background-color: ${theme.colors.gray500};
    border-color: ${theme.components.button.defaultBorderColor};
    &:hover {
      background-color: ${theme.components.button.defaultHoverBackgroundColor};
    }
  }
  &[data-childless='false'] > i,
  & > .ac-spinner {
    margin-right: ${theme.spacing.margin4}px;
  }
`;

export interface ButtonProps extends BaseButtonProps {
  children?: ReactNode | string;
  variant: 'primary' | 'default';
  disabled?: boolean;
  className?: string;
  onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  icon?: ReactNode;
  /**
   * The size of the button
   * @default 'normal'
   */
  size?: 'normal' | 'compact';
}

const Button = (props: ButtonProps, ref: FocusableRef<HTMLButtonElement>) => {
  let domRef = useFocusableRef(ref);
  const {
    disabled,
    children,
    loading,
    variant,
    onClick,
    icon,
    size = 'normal',
    ...otherProps
  } = props;
  const isDisabled = disabled || loading;
  const isChildless = children == null;
  const { buttonProps, isPressed } = useButton(props, domRef);
  const { hoverProps, isHovered } = useHover({ isDisabled });

  return (
    <button
      {...mergeProps(buttonProps, hoverProps, otherProps)}
      ref={domRef}
      css={buttonCSS}
      className={classNames('ac-button', {
        'is-active': isPressed,
        'is-disabled': isDisabled,
        'is-hovered': isHovered,
      })}
      data-variant={variant}
      data-size={size}
      data-childless={isChildless}
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
    >
      {loading ? <Spinner /> : null}
      {!loading && icon ? icon : null}
      <Text textSize="medium">{children}</Text>
    </button>
  );
};

let _Button = React.forwardRef(Button);
export { _Button as Button };
