import React, { useId } from 'react';
import { css } from '@emotion/react';
import { StyleProps } from '../../types';
import { useStyleProps } from '../../utils';
export const NotFoundSVG = (props: StyleProps) => {
  // Create a unique ID so that more than one gradient def can exist
  // TODO - try to hoist the gradient defs to be global
  const id = useId();
  const { styleProps } = useStyleProps(props);
  const linearGradientID1 = `${id}-linear-gradient-1`;
  const linearGradientId2 = `${id}-linear-gradient-2`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 150"
      {...(styleProps as any)}
      css={css`
        .cls-1 {
          isolation: isolate;
        }
        .cls-2 {
          fill: transparent;
        }
        .cls-14,
        .cls-3 {
          fill: #2c353f;
        }
        .cls-4 {
          fill: url(#${id});
        }
        .cls-10,
        .cls-13,
        .cls-5,
        .cls-6,
        .cls-7,
        .cls-8,
        .cls-9 {
          fill: none;
          stroke-linecap: round;
          stroke-miterlimit: 10;
        }
        .cls-5,
        .cls-6,
        .cls-7,
        .cls-8,
        .cls-9 {
          stroke: #5bdbff;
        }
        .cls-5 {
          stroke-width: 0.95px;
        }
        .cls-6 {
          stroke-width: 0.75px;
        }
        .cls-7 {
          stroke-width: 0.55px;
        }
        .cls-8 {
          stroke-width: 0.35px;
        }
        .cls-9 {
          stroke-width: 0.25px;
        }
        .cls-10 {
          stroke: #02bf92;
          stroke-dasharray: 0 5.11;
        }
        .cls-11 {
          mix-blend-mode: multiply;
          opacity: 0.18;
        }
        .cls-12,
        .cls-14 {
          stroke: #ededed;
          stroke-miterlimit: 1;
          stroke-width: 1.5px;
        }
        .cls-12 {
          fill: url(#${linearGradientId2});
        }
        .cls-13 {
          stroke: #fff;
          stroke-width: 0.5px;
        }
      `}
    >
      <defs>
        <linearGradient
          id={linearGradientID1}
          x1="75.17"
          y1="34.89"
          x2="75.17"
          y2="118.38"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#636a71" stopOpacity="0.9" />
          <stop offset="1" stopColor="#636a71" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={linearGradientId2}
          x1="20.04"
          y1="58.35"
          x2="127.35"
          y2="30.32"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#636a71" />
          <stop offset="1" stopColor="#38424e" />
        </linearGradient>
      </defs>
      <g className="cls-1">
        <g id={`${id}-Layer_2`} data-name="Layer 2">
          <g id={`${id}-BG`}>
            <rect className="cls-2" width="150" height="150" />
            <circle className="cls-3" cx="75" cy="75" r="64.93" />
          </g>
          <g id={`${id}-Art`}>
            <path
              className="cls-4"
              d="M29.68,121.49s17.5,18.44,44.4,18.44c30.24,0,46.58-18.78,46.58-18.78L74.08,34.89"
            />
            <ellipse
              className="cls-5"
              cx="75"
              cy="124.23"
              rx="29.32"
              ry="5.94"
            />
            <ellipse
              className="cls-6"
              cx="75"
              cy="106.36"
              rx="24.35"
              ry="4.93"
            />
            <ellipse className="cls-7" cx="75" cy="90.5" rx="19.38" ry="3.92" />
            <ellipse
              className="cls-8"
              cx="75"
              cy="77.86"
              rx="14.41"
              ry="2.92"
            />
            <ellipse className="cls-9" cx="75" cy="66.72" rx="9.44" ry="1.91" />
            <path
              className="cls-10"
              d="M26.49,108.86a59.58,59.58,0,1,1,98.8,0"
            />
            <image
              className="cls-11"
              width="142"
              height="66"
              transform="translate(3.51 9.54)"
              xlinkHref="data:image/png;base64,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"
            />
            <path
              className="cls-12"
              d="M91.46,30C113,27.51,129,28.76,129.89,33.61c1.18,6.21-22.72,16-53.37,21.78s-56.46,5.51-57.64-.7C18,49.83,32.42,42.8,53.46,37.18"
            />
            <path
              className="cls-13"
              d="M71.65,51.92C53,55.45,36.59,56.05,29.11,53.87"
            />
            <path
              className="cls-14"
              d="M52.63,40C53.46,33.83,61,27.9,70.94,26s19,.82,22.09,6.15l0,0A60.63,60.63,0,0,1,52.63,40Z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
