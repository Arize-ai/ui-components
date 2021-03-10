import React, { ReactNode, SyntheticEvent } from 'react';
import { css } from '@emotion/core';
import theme from './theme';
import Spinner from './Spinner';

const buttonCSS = ({ outline }: { outline: boolean }) => css`
  color: ${theme.colors.text1};
  padding: 6px 12px;
  border: 1px solid ${theme.colors.grayBorder};
  font-size: ${theme.fontSizes.small};
  font-weight: 600;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  border-radius: 4px;
  &[data-type='primary'] {
    background-color: ${outline ? 'transparent' : theme.colors.primary};
    border-color: ${theme.colors.primary};
  }

  & > i {
    padding-right: 6px;
  }
`;

export type ButtonProps = {
  children: ReactNode | string;
  variant: 'primary' | 'default';
  outline?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  icon?: ReactNode;
};

export const Button = ({
  children,
  variant,
  outline = false,
  disabled = false,
  className,
  onClick,
  loading = false,
  icon,
}: ButtonProps) => {
  const isDisabled = disabled || loading;
  return (
    <button
      css={buttonCSS({ outline })}
      className={className}
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
