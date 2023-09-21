import React, {
  ElementType,
  ReactNode,
  forwardRef,
  CSSProperties,
} from 'react';
import { css } from '@emotion/react';
import { ColorValue, DOMProps, DOMRef, StyleProps } from '../types';
import theme, { designationColors } from '../theme';
import { TextColor, Size, TextElementType, Weight } from './types';

import { textSizeCSS, textWeightCSS } from './styles';
import { filterDOMProps } from '@react-aria/utils';
import { colorValue, useDOMRef, useStyleProps } from '../utils';

export interface TextProps extends DOMProps, StyleProps {
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
   * @default 'text-900'
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
  const textColor = theme.textColors[color];
  if (textColor) {
    return textColor;
  }
  if (color.startsWith('text-')) {
    const [, num] = color.split('-');
    return `var(--ac-global-text-color-${num})`;
  }
  return colorValue(color as ColorValue);
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
    color = isDisabled ? 'text-300' : 'text-900',
    textSize = 'medium',
    elementType = 'span',
    weight = 'normal',
    fontStyle = 'normal',
    ...otherProps
  } = props;
  const TextTag = elementType as ElementType;
  const domRef = useDOMRef(ref);
  const { styleProps } = useStyleProps(otherProps);

  return (
    <TextTag
      className="ac-text"
      {...filterDOMProps(otherProps)}
      {...styleProps}
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
