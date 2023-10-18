import { css } from '@emotion/react';
import theme from '../theme';

type CardStyle = {
  borderColor: string;
};

export const cardCSS = (style: CardStyle) => css`
  --scope-border-color: ${style.borderColor};
  display: flex;
  flex-direction: column;
  background-color: var(--ac-global-background-color-dark);
  color: var(--ac-global-text-color-900);
  border-radius: var(--ac-global-rounding-medium);
  border: 1px solid var(--scope-border-color);
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
  border-bottom: 1px solid var(--scope-border-color);
`;

export const headerCSS = ({ bordered }: { bordered: boolean }) => {
  return css`
    display: flex;
    flex-direction: row;
    flex: none;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    height: var(--card-header-height);
    transition: background-color 0.2s ease-in-out;
    &.is-collapsible:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    ${bordered ? headerBorderCSS : ''}
  `;
};

export const collapsibleCardCSS = (style: CardStyle) => css`
  ${cardCSS(style)}
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
    color: var(--ac-global-text-color-900);
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
