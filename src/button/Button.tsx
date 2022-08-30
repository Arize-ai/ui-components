import React, { ReactNode, SyntheticEvent } from 'react';
import Spinner from '../Spinner';
import { Text } from '../content';
import { FocusableRef } from '../types';
import { useFocusableRef } from '../utils/useDOMRef';
import { classNames } from '../utils/classNames';
import { mergeProps } from '@react-aria/utils';
import { useButton } from '@react-aria/button';
import { useHover } from '@react-aria/interactions';
import { BaseButtonProps } from './types';
import { buttonCSS } from './styles';

export interface ButtonProps extends BaseButtonProps {
  children?: ReactNode | string;
  variant: 'primary' | 'default' | 'danger' | 'quiet';
  disabled?: boolean;
  className?: string;
  onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  icon?: ReactNode;
  /**
   * The title of the button. Required if only showing an icon
   */
  title?: string;
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
    className,
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
      className={classNames('ac-button', className, {
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
      <Text textSize="medium" color={isDisabled ? 'white70' : 'white90'}>
        {children}
      </Text>
    </button>
  );
};

let _Button = React.forwardRef(Button);
export { _Button as Button };
