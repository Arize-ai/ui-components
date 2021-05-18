import React from 'react';

import { css } from '@emotion/core';
import theme from './theme';
import { ReactNode } from 'react';

const buttonGroupCSS = css`
  display: flex;
  * + * {
    margin-left: ${theme.spacing.padding16}px;
  }
`;

export const ButtonGroup = ({ children }: { children: ReactNode }) => (
  <div css={buttonGroupCSS}>{children}</div>
);
