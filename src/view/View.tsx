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
  padding?: Extract<
    DimensionValue,
    'static-size-50' | 'static-size-100' | 'static-size-200'
  >;
  borderRadius?: string;
  borderColor?: string;
  backgroundColor?: string;
  width?: DimensionValue;
  height?: DimensionValue;
  id?: string;
}

function View(props: ViewProps, ref: DOMRef) {
  const {
    children,
    elementType: ElementType = 'div',
    padding,
    borderRadius,
    borderColor,
    backgroundColor,
    width = 'static-size-4000',
    height = 'static-size-4000',
    id,
  } = props;
  const viewId = useId(id);
  const domRef = useDOMRef(ref);
  return (
    <ElementType
      ref={domRef}
      css={css`
        overflow: hidden;
        padding: ${padding != null ? dimensionValue(padding) : 0};
        border: 1px solid
          ${
            borderColor != null
              ? borderColor
              : theme.components.card.borderColor
          };
        background-color: ${
          backgroundColor != null
            ? backgroundColor
            : theme.components.card.backgroundColor
        }
        border-radius: ${borderRadius != null ? `${borderRadius}px` : 0};
        width: ${width != null ? dimensionValue(width) : 0};
        height: ${height != null ? dimensionValue(height) : 0};
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
