import { css, keyframes } from '@emotion/react';
import theme from '../theme';

const fillMask1 = keyframes` 
  11.86% {
    transform: rotate(0deg);
  }

  13.56% {
    transform: rotate(0deg);
  }

  15.25% {
    transform: rotate(0deg);
  }

  16.95% {
    transform: rotate(0deg);
  }

  18.64% {
    transform: rotate(0deg);
  }

  20.34% {
    transform: rotate(0deg);
  }

  22.03% {
    transform: rotate(0deg);
  }

  23.73% {
    transform: rotate(0deg);
  }

  25.42% {
    transform: rotate(0deg);
  }

  27.12% {
    transform: rotate(0deg);
  }

  28.81% {
    transform: rotate(0deg);
  }

  30.51% {
    transform: rotate(0deg);
  }

  32.2% {
    transform: rotate(0deg);
  }

  33.9% {
    transform: rotate(0deg);
  }

  35.59% {
    transform: rotate(0deg);
  }

  37.29% {
    transform: rotate(0deg);
  }

  38.98% {
    transform: rotate(0deg);
  }

  40.68% {
    transform: rotate(0deg);
  }

  42.37% {
    transform: rotate(5.3deg);
  }

  44.07% {
    transform: rotate(13.4deg);
  }

  45.76% {
    transform: rotate(20.6deg);
  }

  47.46% {
    transform: rotate(29deg);
  }

  49.15% {
    transform: rotate(36.5deg);
  }

  50.85% {
    transform: rotate(42.6deg);
  }

  52.54% {
    transform: rotate(48.8deg);
  }

  54.24% {
    transform: rotate(54.2deg);
  }

  55.93% {
    transform: rotate(59.4deg);
  }

  57.63% {
    transform: rotate(63.2deg);
  }

  59.32% {
    transform: rotate(67.2deg);
  }

  61.02% {
    transform: rotate(70.8deg);
  }

  62.71% {
    transform: rotate(73.8deg);
  }

  64.41% {
    transform: rotate(76.2deg);
  }

  66.1% {
    transform: rotate(78.7deg);
  }

  67.8% {
    transform: rotate(80.6deg);
  }

  69.49% {
    transform: rotate(82.6deg);
  }

  71.19% {
    transform: rotate(83.7deg);
  }

  72.88% {
    transform: rotate(85deg);
  }

  74.58% {
    transform: rotate(86.3deg);
  }

  76.27% {
    transform: rotate(87deg);
  }

  77.97% {
    transform: rotate(87.7deg);
  }

  79.66% {
    transform: rotate(88.3deg);
  }

  81.36% {
    transform: rotate(88.6deg);
  }

  83.05% {
    transform: rotate(89.2deg);
  }

  84.75% {
    transform: rotate(89.2deg);
  }

  86.44% {
    transform: rotate(89.5deg);
  }

  88.14% {
    transform: rotate(89.9deg);
  }

  89.83% {
    transform: rotate(89.7deg);
  }

  91.53% {
    transform: rotate(90.1deg);
  }

  93.22% {
    transform: rotate(90.2deg);
  }

  94.92% {
    transform: rotate(90.1deg);
  }

  96.61% {
    transform: rotate(90deg);
  }

  98.31% {
    transform: rotate(89.8deg);
  }

  100% {
    transform: rotate(90deg);
  }
`;

const fillMask2 = keyframes`  
  0% {
    transform: rotate(180deg);
  }

  1.69% {
    transform: rotate(180deg);
  }

  3.39% {
    transform: rotate(180deg);
  }

  5.08% {
    transform: rotate(180deg);
  }

  6.78% {
    transform: rotate(180deg);
  }

  8.47% {
    transform: rotate(180deg);
  }

  10.17% {
    transform: rotate(179.2deg);
  }

  11.86% {
    transform: rotate(164deg);
  }

  13.56% {
    transform: rotate(151.8deg);
  }

  15.25% {
    transform: rotate(140.8deg);
  }

  16.95% {
    transform: rotate(130.3deg);
  }

  18.64% {
    transform: rotate(120.4deg);
  }

  20.34% {
    transform: rotate(110.8deg);
  }

  22.03% {
    transform: rotate(101.6deg);
  }

  23.73% {
    transform: rotate(93.5deg);
  }

  25.42% {
    transform: rotate(85.4deg);
  }

  27.12% {
    transform: rotate(78.1deg);
  }

  28.81% {
    transform: rotate(71.2deg);
  }

  30.51% {
    transform: rotate(89.1deg);
  }

  32.2% {
    transform: rotate(105.5deg);
  }

  33.9% {
    transform: rotate(121.3deg);
  }

  35.59% {
    transform: rotate(135.5deg);
  }

  37.29% {
    transform: rotate(148.4deg);
  }

  38.98% {
    transform: rotate(161deg);
  }

  40.68% {
    transform: rotate(173.5deg);
  }

  42.37% {
    transform: rotate(180deg);
  }

  44.07% {
    transform: rotate(180deg);
  }

  45.76% {
    transform: rotate(180deg);
  }

  47.46% {
    transform: rotate(180deg);
  }

  49.15% {
    transform: rotate(180deg);
  }

  50.85% {
    transform: rotate(180deg);
  }

  52.54% {
    transform: rotate(180deg);
  }

  54.24% {
    transform: rotate(180deg);
  }

  55.93% {
    transform: rotate(180deg);
  }

  57.63% {
    transform: rotate(180deg);
  }

  59.32% {
    transform: rotate(180deg);
  }

  61.02% {
    transform: rotate(180deg);
  }

  62.71% {
    transform: rotate(180deg);
  }

  64.41% {
    transform: rotate(180deg);
  }

  66.1% {
    transform: rotate(180deg);
  }

  67.8% {
    transform: rotate(180deg);
  }

  69.49% {
    transform: rotate(180deg);
  }

  71.19% {
    transform: rotate(180deg);
  }

  72.88% {
    transform: rotate(180deg);
  }

  74.58% {
    transform: rotate(180deg);
  }

  76.27% {
    transform: rotate(180deg);
  }

  77.97% {
    transform: rotate(180deg);
  }

  79.66% {
    transform: rotate(180deg);
  }

  81.36% {
    transform: rotate(180deg);
  }

  83.05% {
    transform: rotate(180deg);
  }

  84.75% {
    transform: rotate(180deg);
  }

  86.44% {
    transform: rotate(180deg);
  }

  88.14% {
    transform: rotate(180deg);
  }

  89.83% {
    transform: rotate(180deg);
  }

  91.53% {
    transform: rotate(180deg);
  }

  93.22% {
    transform: rotate(180deg);
  }

  94.92% {
    transform: rotate(180deg);
  }

  96.61% {
    transform: rotate(180deg);
  }

  98.31% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(180deg);
  }
`;

const fillsRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;
export const progressCircleCSS = css`
  /* circle unfilled border color */
  --progress-circle-track-border-color: ${theme.colors.gray200};

  /* circle progress fill border color */
  --progress-circle-fill-border-color: ${theme.colors.arizeLightBlue};

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
