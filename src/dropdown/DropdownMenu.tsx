import React, { ReactNode } from 'react';
import { css } from '@emotion/core';
import theme from '../theme';

interface DropdownMenuProps {
  children: ReactNode;
  /**
   * whether or not there is inner padding on the dropdown
   * @default true
   */
  isPadded: boolean;
}

export function DropdownMenu({ children, isPadded = true }: DropdownMenuProps) {
  return (
    <div
      css={css`
        background-color: ${theme.colors.gray500};
        border-radius: 4px;
        color: ${theme.textColors.white90};
        padding: ${isPadded ? theme.spacing.padding8 : 0}px;
      `}
    >
      {children}
    </div>
  );
}
