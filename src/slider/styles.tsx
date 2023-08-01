import { css } from '@emotion/react';
import theme from '../theme';

export const sliderCSS = css`
  --ac-slider-track-height: var(--ac-global-dimension-size-30);
  --ac-slider-handle-width: var(--ac-global-dimension-size-250);
  --ac-slider-handle-height: var(--ac-global-dimension-size-250);
  --ac-slider-handle-border-radius: var(--ac-global-dimension-size-250);
  --ac-slider-handle-background-color: ${theme.colors.arizeLightBlue};
  --ac-slider-track-height: var(--ac-global-dimension-size-100);
  width: var(
    --ac-alias-single-line-width,
    var(--ac-global-dimension-size-2400)
  );
  flex-direction: column;
  display: inline-flex;

  .ac-slider-track {
    height: var(--ac-slider-track-height, var(--ac-global-border-size-thick));
    box-sizing: border-box;
    z-index: 1;
    top: calc(var(--ac-slider-height, var(--ac-alias-single-line-height)) / 2);
    margin-top: calc(var(--ac-slider-track-height) / -2);
    pointer-events: none;
    position: absolute;

    &::before {
      content: '';
      height: 100%;
      display: block;
      border-radius: var(--ac-global-border-size-thicker);
    }
    &:first-of-type::before,
    &:last-of-type::before {
      /* The edge tracks */
      background: var(--ac-global-color-gray-500);
    }
    &:not(:first-of-type):not(:last-of-type)::before {
      /* The middle track */
      background: var(--ac-global-color-gray-100);
    }
    &:last-of-type {
      margin-left: calc(
        var(--ac-slider-handle-width, var(--ac-global-dimension-size-200)) / 2 *
          -1
      );
      right: 0;
      left: auto;
      padding-left: var(
        --ac-slider-handle-gap,
        var(--ac-global-border-size-thicker)
      );
      padding-right: 0;
    }
  }
`;

export const handleCSS = css`
  top: calc(var(--ac-slider-height, var(--ac-alias-single-line-height)) / 2);
  z-index: 2;
  box-sizing: border-box;
  width: var(--ac-slider-handle-width, var(--ac-global-dimension-size-200));
  height: var(--ac-slider-handle-height, var(--ac-global-dimension-size-200));
  border-radius: var(
    --ac-slider-handle-border-radius,
    var(--ac-global-rounding-medium)
  );
  transition: border-width
    var(--ac-slider-animation-duration, var(--ac-global-animation-duration-100))
    ease-in-out;
  outline: none;
  display: inline-block;
  position: absolute;
  background-color: var(--ac-slider-handle-background-color);
`;

export const labelContainerCSS = css`
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'label contextualHelp value';
  justify-items: start;
  display: grid;
`;
