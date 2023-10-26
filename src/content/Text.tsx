import React, {
  ElementType,
  ReactNode,
  forwardRef,
  CSSProperties,
} from 'react';
import { css } from '@emotion/react';
import {
  ColorValue,
  DOMProps,
  DOMRef,
  DesignationColorValue,
  StyleProps,
  TextColorValue,
} from '../types';
import theme from '../theme';
import { Size, TextElementType, Weight } from './types';

import { textSizeCSS, textWeightCSS } from './styles';
import { filterDOMProps } from '@react-aria/utils';
import {
  colorValue,
  designationColorValue,
  useDOMRef,
  useStyleProps,
} from '../utils';
import { assertUnreachable } from '../utils/typeUtils';

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
  color?: TextColorValue;
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

function isDesignationColor(color: string): color is DesignationColorValue {
  return color.startsWith('designation');
}

const getTextColor = (color: TextColorValue): string => {
  if (isDesignationColor(color)) {
    return designationColorValue(color);
  }
  if (color === 'inherit') {
    return 'inherit';
  }
  const textColor = theme.textColors[color];
  if (textColor) {
    console.warn(
      `${textColor} is deprecated since it is not light/dark theme compatible.`
    );
    return textColor;
  }
  if (color.startsWith('text-')) {
    const [, num] = color.split('-');
    return `var(--ac-global-text-color-${num})`;
  }
  return colorValue(color as ColorValue);
};

const textCSS = (color: TextColorValue) => css`
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
