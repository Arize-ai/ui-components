import React, { ElementType, ReactNode, forwardRef, HTMLProps } from 'react';
import { css } from '@emotion/react';
import { DOMRef } from '../types';
import { useDOMRef } from '../utils/useDOMRef';
import theme from '../theme';
import { Color, Size, TextElementType, Weight } from './types';
import { textSizeCSS, textWeightCSS } from './styles';

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
   * The disabled state of the text
   */
  isDisabled?: boolean;
  /**
   * Additional class names to add
   */
  className?: string;
}

const textCSS = (color: Color) => css`
  /* default to no margin */
  margin: 0;
  color: ${theme.textColors[color]};
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
      className="ac-text"
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
