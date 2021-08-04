import React, { ReactNode, HTMLAttributes } from 'react';
import { css } from '@emotion/core';

interface IconProps extends HTMLAttributes<HTMLElement> {
  svg: ReactNode;
  style?: React.CSSProperties;
}
/**
 * Wraps the svg in a reasonable size and applies a color
 */
export const Icon = ({ svg, style, ...restProps }: IconProps) => {
  return (
    <i
      className="ac-icon-wrap"
      css={css`
        width: 1em;
        height: 1em;
        font-size: 1.3rem;
        svg {
          fill: currentColor;
          width: 1em;
          height: 1em;
          display: inline-block;
          transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          flex-shrink: 0;
          user-select: none;
        }
      `}
      style={style}
      {...restProps}
    >
      {svg}
    </i>
  );
};
