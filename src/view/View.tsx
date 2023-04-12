import React, { JSXElementConstructor, ReactNode, forwardRef } from 'react';
import { css } from '@emotion/react';
import theme from '../theme';
import { DOMRef, DimensionValue } from '../types';
import { useDOMRef } from '../utils';
import { useId } from '@react-aria/utils';
import { dimensionValue } from '../utils/styleProps';

export interface ViewProps {
  /**
   * The children to be displayed in the View.
   */
  children?: ReactNode;
  /**
   * The element to render as the node.
   * @default 'div'
   */
  elementType?: string | JSXElementConstructor<any>;
  padding?: 'static-size-50' | 'static-size-100' | 'static-size-200'; // TODO use Extract
  // borderRadius?: string;
  // BorderColor[ColorVersion]
  // BackgroundColor[ColorVersion]
  id?: string;
}

function View(props: ViewProps, ref: DOMRef) {
  const { children, elementType: ElementType = 'div', padding, id } = props;
  const viewId = useId(id);
  const domRef = useDOMRef(ref);
  return (
    <ElementType
      ref={domRef}
      css={css`
        color: ${theme.textColors.white90};
        border: 1px solid ${theme.components.card.borderColor};
        overflow: hidden;
        padding: ${padding != null ? dimensionValue(padding) : 0};
      `}
      className="ac-view"
      aria-labelledby={viewId}
    >
      {children}
    </ElementType>
  );
}

/**
 * View is a general purpose container with no specific semantics
 * that can be used for custom styling purposes, similar to a div.
 */
const _View = forwardRef(View);
export { _View as View };
