import { css } from '@emotion/react';
import theme from '../theme';

export const viewCSS = css`
  display: flex;
  flex-direction: column;
  background-color: ${theme.components.card.backgroundColor};
  color: ${theme.textColors.white90};
  border: 1px solid ${theme.components.card.borderColor};
  overflow: hidden;
  padding: 16px;
  &.ac-view {
    --view-header-height: 38px;
  }
`;

export const headerCSS = () => {
  return css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: var(--view-header-height);
  `;
};
