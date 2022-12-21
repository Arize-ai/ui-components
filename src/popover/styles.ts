import { css } from '@emotion/react';
import theme from '../theme';
import { PlacementAxis } from '../types';

export const popoverCSS = ({ placement }: { placement: PlacementAxis }) => {
  let transformCSS = css``;
  switch (placement) {
    case 'bottom':
      transformCSS = css`
        transform: translateY(var(--popover-animation-distance));
      `;
      break;
    case 'top':
      transformCSS = css`
        transform: translateY(calc(-1 * var(--popover-animation-distance)));
      `;
      break;
    case 'left':
      transformCSS = css`
        transform: translateX(calc(-1 * var(--popover-animation-distance)));
      `;
      break;
    case 'right':
      transformCSS = css`
        transform: translateX(var(--popover-animation-distance));
      `;
      break;
  }
  return css`
    --popover-animation-distance: ${theme.spacing.popover.offset}px;
    outline: none; /* Hide focus outline */
    visibility: hidden;
    opacity: 0;
    transition: transform 100ms ease-in-out, opacity 100ms ease-in-out,
      visibility 100ms linear 100ms;
    pointer-events: none;
    &.is-open {
      visibility: visible;
      opacity: 1;
      transition-delay: 0ms;
      pointer-events: auto;
      ${transformCSS}
    }
  `;
};
