import { css } from '@emotion/react';
import theme from '../theme';
import { PlacementAxis } from '../types';

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
    --tooltip-max-inline-size: 200px;
    --tooltip-background-color: var(--ac-global-color-grey-300);
    color: var(--ac-global-text-color-900);
    background-color: var(--tooltip-background-color);
    position: relative;

    display: inline-flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;

    vertical-align: top;

    width: auto;
    padding: var(--ac-global-dimension-static-size-100);
    border-radius: 4px;
    min-height: 24px;
    max-inline-size: var(--tooltip-max-inline-size);

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
      border-color: var(--tooltip-background-color);
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

export const actionTooltipCSS = ({
  placement,
}: {
  placement: PlacementAxis;
}) => {
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
    --tooltip-max-inline-size: 500px;
    color: var(--ac-global-text-color-900);
    background-color: var(--ac-global-tooltip-background-color);
    border-radius: 8px;
    border: 1px solid var(--ac-global-tooltip-border-color);
    position: relative;

    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    vertical-align: top;

    width: auto;

    border-radius: 4px;
    min-height: 24px;
    max-inline-size: var(--tooltip-max-inline-size);

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

export const actionTooltipHeaderWrapCSS = css`
  border-bottom: 1px solid var(--ac-global-tooltip-border-color);
  padding: var(--ac-global-dimension-static-size-100);
`;

export const helpTooltipCSS = ({ placement }: { placement: PlacementAxis }) => {
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
    --tooltip-max-inline-size: 300px;
    --tooltip-background-color: var(--ac-global-tooltip-background-color);
    --tooltip-border-color: var(--ac-global-tooltip-border-color);
    color: var(--ac-global-text-color-900);
    background-color: var(--tooltip-background-color);
    position: relative;
    box-sizing: border-box;
    font-size: ${theme.typography.sizes.medium.fontSize}px;

    vertical-align: top;

    width: auto;
    padding: var(--ac-global-dimension-static-size-200);
    border-radius: var(--ac-global-rounding-medium);
    border: 1px solid var(--tooltip-border-color);
    min-height: 24px;
    max-inline-size: var(--tooltip-max-inline-size);
    box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.1);

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
    .ac-content {
      margin: var(--ac-global-dimension-static-size-100) 0
        var(--ac-global-dimension-static-size-100) 0;
    }
  `;
};
