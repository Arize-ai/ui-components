import { css } from '@emotion/core';
import theme from '../theme';
const cardHeaderHeight = 68;

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
  height = cardHeaderHeight,
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

export const collapsibleCardCSS = css`
  ${cardCSS}
  .ac-card-collapsible-header {
    padding: 0;
    cursor: pointer;
    display: block;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
    justify-content: space-between;
    align-items: center;
    appearance: none;
    background-color: inherit;
    border: 0;
    text-align: start;
    color: ${theme.colors.text1};
    /* remove outline - TODO might need to give a visual cue that this area is in focus */
    outline: none;
  }

  &.is-open {
    .ac-card-collapsible__trigger {
      transform: rotate(0deg);
    }
  }
  /* shrink the height to the card title so the body is hidden*/
  &:not(.is-open) {
    height: ${cardHeaderHeight}px !important;
  }

  --collapsible-card-animation-duration: ${theme.animation.global.duration}ms;
`;
