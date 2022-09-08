import { css } from '@emotion/core';
import theme from '../theme';

export const cardCSS = css`
  display: flex;
  flex-direction: column;
  background-color: ${theme.components.card.backgroundColor};
  color: ${theme.textColors.white90};
  border-radius: 8px;
  border: 1px solid ${theme.components.card.borderColor};
  overflow: hidden;
  /* variant variables */
  &.ac-card--default {
    --card-header-height: 68px;
  }
  &.ac-card--compact {
    --card-header-height: 46px;
  }
`;

const headerBorderCSS = css`
  border-bottom: 1px solid ${theme.components.card.borderColor};
`;

export const headerCSS = ({
  bordered,
  collapsible,
}: {
  bordered: boolean;
  collapsible: boolean;
}) => {
  return css`
    display: flex;
    flex-direction: row;
    flex: none;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    height: var(--card-header-height);
    transition: background-color 0.2s ease-in-out;
    &:hover {
      background-color: ${collapsible
        ? theme.colors.hoverBgColor
        : 'transparent'};
    }
    ${bordered ? headerBorderCSS : ''}
  `;
};

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
    align-items: center;
    appearance: none;
    background-color: inherit;
    border: 0;
    text-align: start;
    color: ${theme.textColors.white90};
    /* remove outline - TODO might need to give a visual cue that this area is in focus */
    outline: none;
  }

  &.is-open {
    .ac-card-collapsible__trigger {
      transform: rotate(0deg);
    }
  }
  /* shrink the height to the card title so the body is hidden */
  &:not(.is-open) {
    height: var(--card-header-height) !important;
    overflow: hidden;
  }

  --collapsible-card-animation-duration: ${theme.animation.global.duration}ms;
`;
