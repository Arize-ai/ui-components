import { css } from '@emotion/core';
import theme from '../theme';

// sometimes scroll may be needed in the height
const verticalScroll = css`
  overflow-y: auto;
`;
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

const footerBorderCSS = css`
  border-top: 1px solid ${theme.colors.dark5};
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
  flex: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: ${height}px;
  flex-shrink: 0; // prevent header from being shrunk
  ${bordered ? headerBorderCSS : ''}
`;

export const headerTitleWrapCSS = css`
  display: flex;
  flex-direction: column;
  & > h3,
  & > h4 {
    padding: 0;
    margin: 0;
  }
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

export const footerCSS = ({ bordered }: { bordered: boolean }) => css`
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${bordered ? footerBorderCSS : ''}
`;
