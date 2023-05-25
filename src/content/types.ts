import { DesignationColorValue } from '../types';

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
  | 'inherit'
  | DesignationColorValue;

export type TextElementType =
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p';
