import React, { ReactNode, CSSProperties } from 'react';
import { css } from '@emotion/core';
import theme from '../theme';

interface DropdownMenuProps {
  children: ReactNode;
  /**
   * whether or not there is inner padding on the dropdown
   * @default false
   */
  isPadded?: boolean;
  style?: CSSProperties;
}

export function DropdownMenu({
  children,
  isPadded = false,
  style,
}: DropdownMenuProps) {
  return (
    <div
      css={css`
        background-color: ${theme.colors.gray500};
        border-radius: 4px;
        color: ${theme.textColors.white90};
        padding: ${isPadded ? theme.spacing.padding8 : 0}px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
        border: 1px solid ${theme.components.dropdown.borderColor};
        max-height: inherit;
      `}
      style={style}
    >
      {children}
    </div>
  );
}
