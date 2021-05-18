import React, { ReactNode, SyntheticEvent } from 'react';
import { css } from '@emotion/core';
import theme from './theme';
import Spinner from './Spinner';
import { classNames } from './utils/classNames';

const buttonCSS = css`
  color: ${theme.colors.text1};
  padding: 6px 12px;
  border: 1px solid ${theme.colors.dark1};
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  border-radius: 4px;
  &[data-type='primary'] {
    background-color: ${theme.colors.arizeBlue};
    border-color: ${theme.colors.arizeBlue};
  }
  &[data-type='default'] {
    background-color: ${theme.colors.gray500};
    border-color: ${theme.colors.gray500};
  }

  & > i {
    padding-right: 6px;
  }

  cursor: pointer;

  &.is-loading {
    cursor: wait;
  }
`;

export type ButtonProps = {
  children: ReactNode | string;
  variant: 'primary' | 'default';
  disabled?: boolean;
  className?: string;
  onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  icon?: ReactNode;
};

export const Button = ({
  children,
  variant,
  disabled = false,
  className,
  onClick,
  loading = false,
  icon,
}: ButtonProps) => {
  const isDisabled = disabled || loading;
  return (
    <button
      css={buttonCSS}
      className={classNames(className, { 'is-loading': loading })}
      data-type={variant}
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
    >
      {loading ? <Spinner /> : null}
      {!loading && icon ? icon : null}
      {children}
    </button>
  );
};

export default Button;
