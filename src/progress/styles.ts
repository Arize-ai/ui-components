import { css } from '@emotion/react';
import { fillMask1, fillMask2, fillsRotate } from './animation';

export const progressCircleCSS = css`
  /* circle unfilled border color */
  --progress-circle-track-border-color: var(--ac-global-color-grey-300);

  /* circle progress fill border color */
  --progress-circle-fill-border-color: var(--ac-global-color-primary);

  /* default size and thickness */
  --progress-circle-size: 32px;
  --progress-circle-thickness: 3px;

  /* track border style */
  --progress-circle-track-border-style: solid;

  &.ac-progress-circle--small {
    --progress-circle-size: 16px;
    --progress-circle-thickness: 2px;
  }

  &.ac-progress-circle--medium {
    --progress-circle-size: 32px;
    --progress-circle-thickness: 3px;
  }

  &.ac-progress-circle--large {
    --progress-circle-size: 64px;
    --progress-circle-thickness: 4px;
  }

  &.ac-progress-circle {
    display: inline-block;
    inline-size: var(--progress-circle-size);
    block-size: var(--progress-circle-size);
    position: relative;
    direction: ltr;

    /* Fix for Safari rendering bug */
    /* more info: https://github.com/adobe/spectrum-web-components/issues/1392 */
    transform: translate3d(0, 0, 0);
  }

  .ac-progress-circle-track {
    box-sizing: border-box;
    inline-size: var(--progress-circle-size);
    block-size: var(--progress-circle-size);

    border-style: var(--progress-circle-track-border-style);
    border-width: var(--progress-circle-thickness);
    border-radius: var(--progress-circle-size);
    border-color: var(--progress-circle-track-border-color);
  }

  /* circle progress fill parent container */
  .ac-progress-circle-fills {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    inline-size: 100%;
    block-size: 100%;
  }

  /* circle progress filled */
  .ac-progress-circle-fill {
    box-sizing: border-box;
    inline-size: var(--progress-circle-size);
    block-size: var(--progress-circle-size);

    border-style: solid;
    border-width: var(
      --mod-progress-circle-thickness,
      var(--progress-circle-thickness)
    );
    border-radius: var(--mod-progress-circle-size, var(--progress-circle-size));
    border-color: var(--progress-circle-fill-border-color);
  }

  /* animation masks - circle fill progress */
  .ac-progress-circle-fillMask1,
  .ac-progress-circle-fillMask2 {
    inline-size: 50%;
    block-size: 100%;
    transform-origin: 100% center;
    transform: rotate(180deg);
    overflow: hidden;
    position: absolute;
  }

  .ac-progress-circle-fillSubMask1,
  .ac-progress-circle-fillSubMask2 {
    inline-size: 100%;
    block-size: 100%;
    transform-origin: 100% center;
    overflow: hidden;
    transform: rotate(-180deg);
  }

  .ac-progress-circle-fillMask2 {
    transform: rotate(0deg);
  }

  /* animation masks - circle indeterminate with continuous animation */
  &.ac-progress-circle--indeterminate {
    .ac-progress-circle-fills {
      will-change: transform;
      transform: translateZ(0);
      animation: 1s infinite cubic-bezier(0.25, 0.78, 0.48, 0.89) ${fillsRotate};
      transform-origin: center;
    }
    .ac-progress-circle-fillSubMask1 {
      will-change: transform;
      transform: translateZ(0);
      animation: 1s infinite linear ${fillMask1};
    }

    .ac-progress-circle-fillSubMask2 {
      will-change: transform;
      transform: translateZ(0);
      animation: 1s infinite linear ${fillMask2};
    }
  }
`;

export const progressBarCSS = css`
  --ac-barloader-large-border-radius: 3px;
  --ac-barloader-track-color-default: var(--ac-global-color-grey-300);
  &.ac-barloader {
    --ac-barloader-large-track-fill-color: var(--ac-global-color-primary);
    --ac-barloader-static-black-track-color: #00000040;
    --ac-barloader-static-black-fill-color: var(
      --ac-global-static-color-black-900
    );

    min-inline-size: var(--ac-global-dimension-static-size-600, 48px);
    inline-size: var(--ac-global-dimension-size-2400);
    vertical-align: top;
    isolation: isolate;
    flex-flow: wrap;
    justify-content: space-between;
    align-items: center;
    display: inline-flex;
    position: relative;
  }

  &.ac-barloader--static-white {
    --mod-barloader-label-and-value-color: var(
      --ac-global-static-color-white-900
    );
    --mod-barloader-fill-color: var(--ac-global-color-white-900);
  }
  &.ac-barloader--static-black {
    --mod-barloader-label-and-value-color: var(
      --ac-global-static-color-black-900
    );
    --mod-barloader-fill-color: var(--ac-global-static-color-black-900);
    --mod-barloader-track-color: var(--ac-barloader-static-black-track-color);
  }

  .ac-barloader-label,
  .ac-barloader-percentage {
    color: var(
      --mod-barloader-label-and-value-color,
      var(--ac-global-text-color-900)
    );
    font-size: var(--spectrum-global-dimension-font-size-75);
    font-weight: var(--spectrum-global-font-weight-regular);
    line-height: var(--spectrum-global-font-line-height-small);
    text-align: start;
    text-align: start;
    margin-bottom: var(--ac-global-dimension-size-115);
  }

  .ac-barloader-label {
    flex: 1;
  }

  .ac-barloader-percentage {
    align-self: flex-start;
    margin-inline-start: var(--ac-global-dimension-size-150);
  }

  .ac-barloader-track {
    background-color: var(
      --mod-barloader-track-color,
      var(--ac-barloader-track-color-default)
    );
    min-inline-size: var(--ac-global-dimension-static-size-600);
    height: var(--ac-global-dimension-size-75);
    border-radius: var(--ac-barloader-large-border-radius);
    z-index: 1;
    inline-size: 100%;
    overflow: hidden;
  }

  .ac-barloader-fill {
    background: var(--mod-barloader-fill-color, var(--ac-global-color-primary));
    height: var(--ac-global-dimension-size-75);

    border: none;
    transition: width 1s;
  }
`;
