import React, { useId } from 'react';
import { css } from '@emotion/react';
import { StyleProps } from '../../types';
import { useStyleProps } from '../../utils';
export function ErrorSVG(props: StyleProps) {
  // Create a unique ID so that more than one gradient def can exist
  // TODO - try to hoist the gradient defs to be global
  const id = useId();
  const { styleProps } = useStyleProps(props);
  const linearGradientID = `${id}-linear-gradient`;
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
        .cls-3 {
          fill: #2c353f;
        }
        .cls-4 {
          mix-blend-mode: multiply;
          opacity: 0.18;
        }
        .cls-5 {
          fill: url(#${linearGradientID});
        }
        .cls-6,
        .cls-7 {
          fill: none;
          stroke-linecap: round;
          stroke-miterlimit: 10;
        }
        .cls-6 {
          stroke: #02bf92;
          stroke-dasharray: 0 6.31;
        }
        .cls-7 {
          stroke: #5bdbff;
          stroke-width: 2px;
        }
      `}
    >
      <defs>
        <linearGradient
          id={linearGradientID}
          x1="40.04"
          y1="75.24"
          x2="109.77"
          y2="75.24"
          gradientTransform="translate(150.24 0.29) rotate(90)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#636a71" />
          <stop offset="1" stopColor="#38424e" />
        </linearGradient>
      </defs>
      <g className="cls-1">
        <g id="Layer_2" data-name="Layer 2">
          <g id="BG">
            <rect className="cls-2" width="150" height="150" />
            <circle className="cls-3" cx="75" cy="75.2" r="64.93" />
          </g>
          <g id="Art">
            <image
              className="cls-4"
              width="122"
              height="121"
              transform="translate(14.23 14.82)"
              xlinkHref="data:image/png;base64,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"
            />
            <rect
              className="cls-5"
              x="40.13"
              y="40.33"
              width="69.74"
              height="69.74"
              rx="4.81"
              transform="translate(-31.21 75.06) rotate(-45)"
            />
            <line
              className="cls-6"
              x1="75.01"
              y1="17.89"
              x2="75.01"
              y2="3.44"
            />
            <line
              className="cls-6"
              x1="55.41"
              y1="21.34"
              x2="50.47"
              y2="7.76"
            />
            <line
              className="cls-6"
              x1="38.17"
              y1="31.29"
              x2="28.88"
              y2="20.22"
            />
            <line
              className="cls-6"
              x1="25.38"
              y1="46.53"
              x2="12.86"
              y2="39.31"
            />
            <line
              className="cls-6"
              x1="18.57"
              y1="65.24"
              x2="4.33"
              y2="62.73"
            />
            <line
              className="cls-6"
              x1="18.56"
              y1="85.14"
              x2="4.33"
              y2="87.65"
            />
            <line
              className="cls-6"
              x1="25.36"
              y1="103.84"
              x2="12.85"
              y2="111.07"
            />
            <line
              className="cls-6"
              x1="38.15"
              y1="119.09"
              x2="28.86"
              y2="130.16"
            />
            <line
              className="cls-6"
              x1="55.39"
              y1="129.05"
              x2="50.44"
              y2="142.63"
            />
            <line
              className="cls-6"
              x1="74.99"
              y1="132.51"
              x2="74.99"
              y2="146.96"
            />
            <line
              className="cls-6"
              x1="94.59"
              y1="129.06"
              x2="99.53"
              y2="142.64"
            />
            <line
              className="cls-6"
              x1="111.83"
              y1="119.11"
              x2="121.12"
              y2="130.18"
            />
            <line
              className="cls-6"
              x1="124.62"
              y1="103.87"
              x2="137.14"
              y2="111.09"
            />
            <line
              className="cls-6"
              x1="131.43"
              y1="85.17"
              x2="145.67"
              y2="87.67"
            />
            <line
              className="cls-6"
              x1="131.44"
              y1="65.26"
              x2="145.67"
              y2="62.75"
            />
            <line
              className="cls-6"
              x1="124.64"
              y1="46.56"
              x2="137.15"
              y2="39.33"
            />
            <line
              className="cls-6"
              x1="111.85"
              y1="31.31"
              x2="121.14"
              y2="20.24"
            />
            <line
              className="cls-6"
              x1="94.61"
              y1="21.35"
              x2="99.56"
              y2="7.77"
            />
            <circle className="cls-7" cx="75" cy="100.67" r="5.34" />
            <path
              className="cls-7"
              d="M76.88,86.93H73.12a2.51,2.51,0,0,1-2.5-2.32L68,47.07a2.49,2.49,0,0,1,2.49-2.67h9.06A2.49,2.49,0,0,1,82,47.07L79.38,84.61A2.51,2.51,0,0,1,76.88,86.93Z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
