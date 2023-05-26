import React, {
  ElementType,
  ReactNode,
  forwardRef,
  HTMLProps,
  CSSProperties,
} from 'react';
import { css } from '@emotion/react';
import { DOMRef } from '../types';
import { useDOMRef } from '../utils/useDOMRef';
import theme, { designationColors } from '../theme';
import { TextColor, Size, TextElementType, Weight } from './types';
import { textSizeCSS, textWeightCSS } from './styles';
import { filterDOMProps } from '@react-aria/utils';

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
  color?: TextColor;
  /**
   * The font style
   * @default 'normal'
   */
  fontStyle?: CSSProperties['fontStyle'];
  /**
   * The disabled state of the text
   */
  isDisabled?: boolean;
  /**
   * Additional class names to add
   */
  className?: string;
}

const getTextColor = (color: TextColor) => {
  if (color.startsWith('designation')) {
    // Return the designation color (e.x. the main primary / reference colors)
    return designationColors[color];
  }
  return theme.textColors[color];
};
const textCSS = (color: TextColor) => css`
  /* default to no margin */
  margin: 0;
  color: ${getTextColor(color)};
`;

/**
 * Text is used to create various sizes of typographic hierarchies.
 */
function Text(props: TextProps, ref: DOMRef<HTMLSpanElement>) {
  const { isDisabled = false } = props;
  const {
    children,
    color = isDisabled ? 'white30' : 'white90',
    textSize = 'medium',
    elementType = 'span',
    weight = 'normal',
    fontStyle = 'normal',
    ...otherProps
  } = props;
  const TextTag = elementType as ElementType;
  const domRef = useDOMRef(ref);

  return (
    <TextTag
      className="ac-text"
      {...filterDOMProps(otherProps)}
      css={css`
        ${textCSS(color)};
        ${textSizeCSS(textSize)};
        ${textWeightCSS(weight)};
        font-style: ${fontStyle};
      `}
      ref={domRef}
    >
      {children}
    </TextTag>
  );
}

const _Text = forwardRef(Text);
export { _Text as Text };
