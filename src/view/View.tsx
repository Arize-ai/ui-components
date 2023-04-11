import React, {
  JSXElementConstructor,
  CSSProperties,
  ReactNode,
  forwardRef,
} from 'react';
import { DOMRef } from '../types';
import { useDOMRef } from '../utils';
import { useId } from '@react-aria/utils';
import { headerCSS, viewCSS } from './styles';

export interface ViewProps {
  /**
   * The children to be displayed in the View.
   */
  children?: ReactNode;
  /**
   * The title of the View.
   */
  title?: ReactNode;
  /**
   * An extra interactive element to be displayed next to the header.
   */
  titleExtra?: ReactNode;
  /**
   * The element to render as the node.
   */
  elementType?: string | JSXElementConstructor<any>;
  style?: CSSProperties;
  id?: string;
}

function View(props: ViewProps, ref: DOMRef) {
  const {
    children,
    title,
    titleExtra,
    elementType: ElementType = 'div',
    style,
    id,
  } = props;
  const viewId = useId(id);
  const domRef = useDOMRef(ref);
  const titleEl =
    titleExtra != null ? (
      <header css={headerCSS}>
        {title}
        {titleExtra}
      </header>
    ) : (
      <header css={headerCSS}>{title}</header>
    );
  return (
    <ElementType
      ref={domRef}
      css={viewCSS}
      style={style}
      className="ac-view"
      aria-labelledby={viewId}
    >
      {titleEl}
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
