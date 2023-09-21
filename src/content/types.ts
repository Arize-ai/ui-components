import { ColorValue, DesignationColorValue } from '../types';

export type Size =
  | 'xxxlarge'
  | 'xxlarge'
  | 'xlarge'
  | 'large'
  | 'medium'
  | 'small'
  | 'xsmall';

export type Weight = 'heavy' | 'normal';

export type TextColor =
  | 'white90'
  | 'white70'
  | 'white30'
  // non-static colors
  | 'text-900'
  | 'text-700'
  | 'text-300'
  | 'inherit'
  | DesignationColorValue
  | ColorValue;

export type TextElementType =
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p';
