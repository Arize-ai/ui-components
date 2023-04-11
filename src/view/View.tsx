import React, { JSXElementConstructor, ReactNode, forwardRef } from 'react';
import { DOMRef } from '../types';
import { useDOMRef } from '../utils';
import { useId } from '@react-aria/utils';
import { viewCSS } from './styles';

export interface ViewProps {
  /**
   * The children to be displayed in the View.
   */
  children?: ReactNode;
  /**
   * The element to render as the node.
   */
  elementType?: string | JSXElementConstructor<any>;
  id?: string;
}

function View(props: ViewProps, ref: DOMRef) {
  const { children, elementType: ElementType = 'section', id } = props;
  const viewId = useId(id);
  const domRef = useDOMRef(ref);
  return (
    <ElementType
      ref={domRef}
      css={viewCSS}
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
