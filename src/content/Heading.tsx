import React, { ElementType, ReactNode, forwardRef } from 'react';
import { css } from '@emotion/react';
import { DOMRef } from '../types';
import { useDOMRef } from '../utils/useDOMRef';
import theme from '../theme';

const {
  typography: { sizes, weights },
} = theme;
type Level = 1 | 2 | 3 | 4 | 5 | 6;
type Weight = 'heavy' | 'normal';

export interface HeadingProps {
  /**
   * Sets heading level, h1 through h6.
   * @default 3
   */
  level?: Level;
  /**
   * Sets the font weight
   * @default
   */
  weight?: Weight;
  /**
   * Heading content.
   */
  children: ReactNode;
}

const headingCSS = css`
  /* default to no margin */
  margin: 0;
  color: ${theme.textColors.white90};
`;

const headingSizeCSS = (level: Level) => {
  switch (level) {
    case 1: {
      return css`
        font-size: ${sizes.xxlarge.fontSize}px;
        line-height: ${sizes.xxlarge.lineHeight}px;
      `;
    }
    case 2: {
      return css`
        font-size: ${sizes.xlarge.fontSize}px;
        line-height: ${sizes.xlarge.lineHeight}px;
      `;
    }
    case 3: {
      return css`
        font-size: ${sizes.large.fontSize}px;
        line-height: ${sizes.large.lineHeight}px;
      `;
    }
    case 4: {
      return css`
        font-size: ${sizes.medium.fontSize}px;
        line-height: ${sizes.medium.lineHeight}px;
      `;
    }
    case 5: {
      return css`
        font-size: ${sizes.small.fontSize}px;
        line-height: ${sizes.small.lineHeight}px;
      `;
    }
    case 6: {
      return css`
        font-size: ${sizes.xsmall.fontSize}px;
        line-height: ${sizes.xsmall.lineHeight}px;
      `;
    }
    default: {
      return css``;
    }
  }
};

const headingWeightCSS = (weight: Weight) => css`
  font-weight: ${weight === 'heavy' ? weights.heavy : weights.normal};
`;

/**
 * Heading is used to create various levels of typographic hierarchies.
 */
function Heading(props: HeadingProps, ref: DOMRef<HTMLHeadingElement>) {
  const { children, level = 3, weight = 'normal', ...otherProps } = props;
  const HeadingTag = `h${level}` as ElementType;
  const domRef = useDOMRef(ref);

  return (
    <HeadingTag
      {...otherProps}
      css={css(headingCSS, headingSizeCSS(level), headingWeightCSS(weight))}
      ref={domRef}
    >
      {children}
    </HeadingTag>
  );
}

const _Heading = forwardRef(Heading);
export { _Heading as Heading };
