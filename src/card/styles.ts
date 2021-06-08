import { css } from '@emotion/core';
import theme from '../theme';

export const cardCSS = css`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.dark4};
  color: ${theme.colors.text1};
  border-radius: 8px;
  border: 1px solid ${theme.colors.dividerColor};
  overflow: hidden;
`;

const headerBorderCSS = css`
  border-bottom: 1px solid ${theme.colors.dark5};
`;

export const headerCSS = ({
  bordered,
  height = 68,
}: {
  bordered: boolean;
  height?: number;
}) => css`
  display: flex;
  flex-direction: row;
  flex: none;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: ${height}px;
  ${bordered ? headerBorderCSS : ''}
`;
