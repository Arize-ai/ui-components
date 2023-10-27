import React, { ReactNode, HTMLAttributes } from 'react';
import { classNames, colorValue } from '../utils';
import { css } from '@emotion/react';
import { ColorValue } from '../types';

interface IconProps extends HTMLAttributes<HTMLElement> {
  svg: ReactNode;
  style?: React.CSSProperties;
  /**
   * Passed through by wrapping components.
   * @private
   * @default false
   */
  isDisabled?: boolean;
  /**
   * The color of the icon
   * @default 'inherit'
   */
  color?: ColorValue | 'inherit';
}

/**
 * Wraps the svg in a reasonable size and applies a color
 */
export const Icon = ({
  svg,
  style,
  className,
  isDisabled: _isDisabled,
  color = 'inherit',
  ...restProps
}: IconProps) => {
  const resolvedColor = color === 'inherit' ? 'inherit' : colorValue(color);
  return (
    <i
      className={classNames('ac-icon-wrap', className)}
      css={css`
        width: 1em;
        height: 1em;
        font-size: 1.3rem;
        color: ${resolvedColor};
        display: flex;
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
