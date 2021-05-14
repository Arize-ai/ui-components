import React from 'react';

import { css } from '@emotion/core';
import theme from './theme';
import { forwardRef, ReactNode } from 'react';

const buttonGroupCSS = css`
  display: flex;
  * + * {
    margin-left: ${theme.spacing.padding16}px;
  }
`;

const ButtonGroup = ({ children }: { children: ReactNode }) => (
  <div css={buttonGroupCSS}>{children}</div>
);

const _ButtonGroup = forwardRef(ButtonGroup);
export { _ButtonGroup as ButtonGroup };
