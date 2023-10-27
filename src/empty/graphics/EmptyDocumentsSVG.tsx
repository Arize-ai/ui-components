import React, { useId } from 'react';
import { css } from '@emotion/react';
import { StyleProps } from '../../types';
import { useStyleProps } from '../../utils';

export const EmptyDocumentsSVG = (props: StyleProps) => {
  // Create a unique ID so that more than one gradient def can exist
  // TODO - try to hoist the gradient defs to be global
  const id = useId();
  const linearGradientIdPrefix = `#${id}-linear-gradient`;
  const { styleProps } = useStyleProps(props);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 140 164"
      {...(styleProps as any)}
      css={css`
        .cls-1 {
          isolation: isolate;
        }
        .cls-2 {
          fill: var(--ac-global-color-grey-200);
        }
        .cls-3,
        .cls-9 {
          fill: none;
          stroke-linecap: round;
          stroke-miterlimit: 10;
        }
        .cls-3 {
          stroke: var(--ac-global-color-primary);
          stroke-width: 1.21px;
          stroke-dasharray: 0 6.2;
        }
        .cls-4 {
          mix-blend-mode: multiply;
          opacity: 0.18;
        }
        .cls-5 {
          fill: url(${linearGradientIdPrefix});
        }
        .cls-6 {
          fill: url(${linearGradientIdPrefix}-2);
        }
        .cls-7 {
          fill: url(${linearGradientIdPrefix}-3);
        }
        .cls-8 {
          fill: url(${linearGradientIdPrefix}-4);
        }
        .cls-9 {
          stroke: var(--ac-global-color-primary);
          stroke-width: 2px;
        }
      `}
    >
      <defs>
        <linearGradient
          id={`${id}-linear-gradient`}
          x1="106.26"
          y1="82.71"
          x2="20.35"
          y2="96.39"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#38424e" />
          <stop offset="1" stopColor="#636a71" />
        </linearGradient>
        <linearGradient
          id={`${id}-linear-gradient-2`}
          x1="100.49"
          y1="4.2"
          x2="100.49"
          y2="20.69"
          gradientTransform="translate(-9.43 38.61) rotate(-8.26)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#636a71" />
          <stop offset="1" stopColor="#38424e" />
        </linearGradient>
        <linearGradient
          id={`${id}-linear-gradient-3`}
          x1="118.29"
          y1="66.59"
          x2="32.38"
          y2="80.27"
          xlinkHref={`${linearGradientIdPrefix}`}
        />
        <linearGradient
          id={`${id}-linear-gradient-4`}
          x1="114.72"
          y1="-10.03"
          x2="114.72"
          y2="6.47"
          xlinkHref={`${linearGradientIdPrefix}-2`}
        />
      </defs>
      <g className="cls-1">
        <g id="Layer_2" data-name="Layer 2">
          <g>
            <circle className="cls-2" cx="69.61" cy="82.49" r="64.93" />
          </g>
          <g>
            <circle className="cls-3" cx="69.61" cy="82.49" r="57.48" />
            <image
              className="cls-4"
              width="128"
              height="147"
              transform="translate(0 17)"
              xlinkHref="data:image/png;base64,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"
            />
            <path
              className="cls-5"
              d="M101.15,43.46l13.32,91.75a4.11,4.11,0,0,1-3.47,4.66l-78.52,11.4a4.12,4.12,0,0,1-4.66-3.48l-15.1-104a4.11,4.11,0,0,1,3.48-4.65l66.26-9.62"
            />
            <path
              className="cls-6"
              d="M101.15,43.46,88.9,45.24a4.11,4.11,0,0,1-4.66-3.47L82.46,29.51Z"
            />
            <image
              className="cls-4"
              width="128"
              height="148"
              transform="translate(12)"
              xlinkHref="data:image/png;base64,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"
            />
            <path
              className="cls-7"
              d="M113.19,27.34l13.32,91.75a4.12,4.12,0,0,1-3.48,4.66l-78.52,11.4a4.12,4.12,0,0,1-4.66-3.48l-15.09-104A4.1,4.1,0,0,1,28.23,23l66.26-9.62"
            />
            <path
              className="cls-8"
              d="M113.19,27.34l-12.26,1.78a4.11,4.11,0,0,1-4.66-3.47L94.49,13.39Z"
            />
            <line
              className="cls-9"
              x1="39.15"
              y1="40.96"
              x2="75.63"
              y2="35.67"
            />
            <line
              className="cls-9"
              x1="40.77"
              y1="52.15"
              x2="89.96"
              y2="45.01"
            />
            <line
              className="cls-9"
              x1="42.4"
              y1="63.33"
              x2="102.42"
              y2="54.62"
            />
            <line
              className="cls-9"
              x1="44.02"
              y1="74.51"
              x2="82.46"
              y2="68.93"
            />
            <line
              className="cls-9"
              x1="45.64"
              y1="85.69"
              x2="89.96"
              y2="79.26"
            />
            <line
              className="cls-9"
              x1="47.27"
              y1="96.87"
              x2="89.96"
              y2="90.68"
            />
            <line
              className="cls-9"
              x1="48.89"
              y1="108.06"
              x2="74.45"
              y2="104.35"
            />
            <line
              className="cls-9"
              x1="50.51"
              y1="119.24"
              x2="99.13"
              y2="112.18"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
