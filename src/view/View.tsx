import React, { JSXElementConstructor, ReactNode, forwardRef } from 'react';
import { css } from '@emotion/react';
import { DOMProps, DOMRef, ViewStyleProps } from '../types';
import { useDOMRef } from '../utils';
import { useStyleProps, viewStyleProps } from '../utils';
import { filterDOMProps } from '@react-aria/utils';

export interface ViewProps extends ViewStyleProps, DOMProps {
  /**
   * The children to be displayed in the View.
   */
  children?: ReactNode;
  /**
   * The element to render as the node.
   * @default 'div'
   */
  elementType?: string | JSXElementConstructor<any>;
}

function View(props: ViewProps, ref: DOMRef) {
  const {
    children,
    elementType: ElementType = 'div',
    id,
    ...otherProps
  } = props;
  const { styleProps } = useStyleProps(props, viewStyleProps);
  const domRef = useDOMRef(ref);
  return (
    <ElementType
      {...filterDOMProps(otherProps as DOMProps)}
      {...styleProps}
      ref={domRef}
      css={css`
        overflow: hidden;
      `}
      className="ac-view"
      id={id}
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
