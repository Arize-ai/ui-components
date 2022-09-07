import { css } from '@emotion/core';
import theme from '../theme';
import { Size, Weight } from './types';

const {
  typography: { sizes, weights },
} = theme;

export const textWeightCSS = (weight: Weight) => css`
  font-weight: ${weight === 'heavy' ? weights.heavy : weights.normal};
`;

export const textSizeCSS = (size: Size) => {
  const sizing = sizes[size];
  return css`
    font-size: ${sizing.fontSize}px;
    line-height: ${sizing.lineHeight}px;
  `;
};
