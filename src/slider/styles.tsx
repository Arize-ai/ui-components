import { css } from '@emotion/react';
import theme from '../theme';

export const sliderCSS = css`
  --ac-slider-track-height: var(--ac-global-dimension-size-75);
  --ac-slider-handle-width: var(--ac-global-dimension-size-250);
  --ac-slider-handle-height: var(--ac-global-dimension-size-250);
  --ac-slider-handle-halo-width: var(--ac-global-dimension-size-350);
  --ac-slider-handle-border-radius: var(--ac-global-dimension-size-250);
  --ac-slider-handle-background-color: white;
  --ac-slider-track-background-color: var(--ac-global-color-gray-300);
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
    }
    &:first-of-type::before,
    &:last-of-type::before {
      /* The edge tracks */
      background: var(--ac-slider-track-background-color);
    }
    &:not(:first-of-type):not(:last-of-type)::before {
      /* The middle track */
      background: ${theme.colors.arizeLightBlue};
    }
    &:first-of-type {
      margin-left: calc(
        var(--ac-slider-handle-width, var(--ac-global-dimension-size-200)) / 2 *
          -1
      );
      ::before {
        border-top-left-radius: var(--ac-global-border-size-thicker);
        border-bottom-left-radius: var(--ac-global-border-size-thicker);
      }
    }
    &:last-of-type {
      margin-right: calc(
        var(--ac-slider-handle-width, var(--ac-global-dimension-size-200)) / 2 *
          -1
      );
      right: 0;
      left: auto;
      padding-right: 0;
      &::before {
        border-top-right-radius: var(--ac-global-border-size-thicker);
        border-bottom-right-radius: var(--ac-global-border-size-thicker);
      }
    }
  }
`;

export const handleCSS = css`
  top: calc(var(--ac-slider-height, var(--ac-alias-single-line-height)) / 2);
  z-index: 2;
  box-sizing: content-box;
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
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  &:hover::after {
    content: '';
    background: white;
    opacity: 0.5;
    display: block;
    width: var(--ac-slider-handle-halo-width);
    height: var(--ac-slider-handle-halo-width);
    margin-left: calc(
      calc(var(--ac-slider-handle-halo-width) - var(--ac-slider-handle-width)) /
        -2
    );
    margin-top: calc(
      calc(var(--ac-slider-handle-halo-width) - var(--ac-slider-handle-width)) /
        -2
    );
    border-radius: var(
      --ac-slider-handle-border-radius,
      var(--ac-global-rounding-medium)
    );
  }
`;

export const labelContainerCSS = css`
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'label contextualHelp value';
  justify-items: start;
  display: grid;
`;

export const labelCSS = css`
  color: ${theme.textColors.white90};
  font-size: var(--ac-global-dimension-static-font-size-100);
`;
