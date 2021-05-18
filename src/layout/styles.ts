import { css } from '@emotion/core';
import theme from '../theme';

// sometimes scroll may be needed in the height
const verticalScroll = css`
  overflow-y: auto;
`;

export const baseLayoutCSS = css`
  display: flex;
  flex: auto;
  flex-direction: column;
`;

export const bodyCSS = css`
  padding: ${theme.spacing.padding16}px;
  flex: 1 1 auto;
  ${verticalScroll}
`;

export const bodyCSSWithScroll = css`
  padding: ${theme.spacing.padding16}px;
  flex: 1 1 auto;
`;

export const asideCSS = css`
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${theme.colors.grayBorder};
`;

export const bodyWithAsideCSS = css`
  display: flex;
  flex-direction: row;
  padding: 0;
  ${verticalScroll}
`;
