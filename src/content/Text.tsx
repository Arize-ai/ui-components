import React, { ElementType, ReactNode, forwardRef, HTMLProps } from 'react';
import { css } from '@emotion/core';
import { DOMRef } from '../types';
import { useDOMRef } from '../utils/useDOMRef';
import theme from '../theme';

const {
  typography: { sizes, weights },
} = theme;

type Size =
  | 'xxxlarge'
  | 'xxlarge'
  | 'xlarge'
  | 'large'
  | 'medium'
  | 'small'
  | 'xsmall';

type Weight = 'heavy' | 'normal';

type Color = 'white90' | 'white70' | 'white30';

type TextElementType = 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TextProps extends HTMLProps<HTMLSpanElement> {
  /**
   * Sets text size
   * @default 'medium'
   */
  textSize?: Size;
  /**
   * The text node element type
   * @default 'span'
   */
  elementType?: TextElementType;
  /**
   * Sets the font weight
   * @default 'normal'
   */
  weight?: Weight;
  /**
   * Text content.
   */
  children: ReactNode;
  /**
   * The color of the text
   * @default 'white90'
   */
  color?: Color;
  /**
   *
   */
  isDisabled?: boolean;
}

const textCSS = (color: Color) => css`
  /* default to no margin */
  margin: 0;
  color: ${theme.textColors[color]};
`;

const textSizeCSS = (size: Size) => {
  const sizing = sizes[size];
  return css`
    font-size: ${sizing.fontSize}px;
    line-height: ${sizing.lineHeight}px;
  `;
};

const textWeightCSS = (weight: Weight) => css`
  font-weight: ${weight === 'heavy' ? weights.heavy : weights.normal};
`;

/**
 * Text is used to create various sizes of typographic hierarchies.
 */
function Text(props: TextProps, ref: DOMRef<HTMLHeadingElement>) {
  const { isDisabled = false } = props;
  const {
    children,
    color = isDisabled ? 'white30' : 'white90',
    textSize = 'medium',
    elementType = 'span',
    weight = 'normal',
    ...otherProps
  } = props;
  const TextTag = elementType as ElementType;
  const domRef = useDOMRef(ref);

  return (
    <TextTag
      {...otherProps}
      css={css`
        ${textCSS(color)};
        ${textSizeCSS(textSize)};
        ${textWeightCSS(weight)};
      `}
      ref={domRef}
    >
      {children}
    </TextTag>
  );
}

const _Text = forwardRef(Text);
export { _Text as Text };
