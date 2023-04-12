import React, { JSXElementConstructor, ReactNode, forwardRef } from 'react';
import { css } from '@emotion/react';
import theme from '../theme';
import { DOMRef, DimensionValue } from '../types';
import { useDOMRef } from '../utils';
import { useId } from '@react-aria/utils';

export interface ViewProps {
  /**
   * The children to be displayed in the View.
   */
  children?: ReactNode;
  /**
   * The element to render as the node.
   * @default 'section'
   */
  elementType?: string | JSXElementConstructor<any>;
  padding?: DimensionValue;
  id?: string;
}

function View(props: ViewProps, ref: DOMRef) {
  const {
    children,
    elementType: ElementType = 'section',
    padding = 16,
    id,
  } = props;
  const viewId = useId(id);
  const domRef = useDOMRef(ref);
  return (
    <ElementType
      ref={domRef}
      css={css`
        color: ${theme.textColors.white90};
        border: 1px solid ${theme.components.card.borderColor};
        overflow: hidden;
        padding: ${padding}px;
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
