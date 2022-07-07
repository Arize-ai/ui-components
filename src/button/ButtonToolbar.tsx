import React, { ReactNode } from 'react';
import { css } from '@emotion/core';
import theme from '../theme';

type ButtonToolbarProps = {
  children: ReactNode;
};

/**
 * ButtonToolbar expects Buttons as children and should be used to manage button layouts
 */
export function ButtonToolbar({ children }: ButtonToolbarProps) {
  return (
    <div
      className="ac-button-toolbar"
      role="toolbar"
      css={css`
        display: flex;
        flex-direction: row;
        & > .ac-button + .ac-button {
          margin-left: ${theme.spacing.margin8}px;
        }
      `}
    >
      {children}
    </div>
  );
}
