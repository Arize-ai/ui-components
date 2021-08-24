import React, { ReactNode } from 'react';
import { css } from '@emotion/core';
import theme from '../theme';

type ButtonGroupProps = {
  children: ReactNode;
};

/**
 * ButtonGroup expects Buttons as children and should be used to manage button layouts
 */
export function ButtonGroup({ children }: ButtonGroupProps) {
  return (
    <div
      className="ac-button-group"
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
