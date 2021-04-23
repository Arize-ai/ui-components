import { css } from '@emotion/core';
import theme from '../theme';
import { PlacementAxis } from '../types';

const tooltipStyles = theme.components.tooltip;

export const tooltipCSS = ({ placement }: { placement: PlacementAxis }) => {
  let transformCSS = css``;
  switch (placement) {
    case 'bottom':
      transformCSS = css`
        transform: translateY(var(--tooltip-animation-distance));
      `;
      break;
    case 'top':
      transformCSS = css`
        transform: translateY(calc(-1 * var(--tooltip-animation-distance)));
      `;
      break;
    case 'left':
      transformCSS = css`
        transform: translateX(calc(-1 * var(--tooltip-animation-distance)));
      `;
      break;
    case 'right':
      transformCSS = css`
        transform: translateX(var(--tooltip-animation-distance));
      `;
      break;
  }
  return css`
    --tooltip-animation-distance: ${theme.spacing.tooltip.offset}px;
    --tooltip-target-offset: ${theme.spacing.tooltip.offset}px;
    --tooltip-tip-width: 8px;
    color: ${theme.textColors.white90};
    background-color: ${tooltipStyles.backgroundColor};
    position: relative;

    display: inline-flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;

    vertical-align: top;

    width: auto;
    padding: ${theme.spacing.padding8}px;
    border-radius: 4px;
    min-height: 24px;
    max-inline-size: 160px;

    word-break: break-word;
    -webkit-font-smoothing: antialiased;

    visibility: hidden;
    opacity: 0;
    transition: transform 200ms ease-in-out, opacity 200ms ease-in-out,
      visibility 200ms linear;
    &.is-open {
      visibility: visible;
      opacity: 1;
      transition-delay: 0ms;
      pointer-events: auto;
      ${transformCSS};
    }
  `;
};

export const tooltipTipCSS = ({ placement }: { placement: PlacementAxis }) => {
  let additionalCSS = css``;

  switch (placement) {
    case 'bottom':
      additionalCSS = css`
        left: 50%;
        bottom: 100%;
        transform: rotate(-180deg);
        margin-left: calc(-1 * var(--tooltip-tip-width));
      `;

      break;
    case 'top':
      additionalCSS = css`
        left: 50%;
        top: 100%;
        margin-left: calc(-1 * var(--tooltip-tip-width));
      `;

      break;
    case 'left':
      additionalCSS = css`
        left: 100%;
        top: 50%;
        margin-top: calc(-1 * var(--tooltip-tip-width));
        transform: rotate(-90deg);
      `;

      break;
    case 'right':
      additionalCSS = css`
        right: 100%;
        top: 50%;
        margin-top: calc(-1 * var(--tooltip-tip-width));
        transform: rotate(90deg);
      `;

      break;
  }
  return css(
    css`
      position: absolute;
      border-color: ${tooltipStyles.backgroundColor};
      height: 0;
      width: 0;

      border-width: var(--tooltip-tip-width);
      border-style: solid;
      border-left-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
    `,
    additionalCSS
  );
};
