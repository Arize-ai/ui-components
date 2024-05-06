import { DOMRef } from '@react-types/shared';
import { filterDOMProps } from '@react-aria/utils';
import React, { forwardRef, ReactNode } from 'react';
import { useDOMRef } from '../utils';
import { DOMProps } from '../types';

export interface ContentProps extends DOMProps {
  /**
   * Content content.
   */
  children: ReactNode;
}

function Content(props: ContentProps, ref: DOMRef) {
  const { children, ...otherProps } = props;
  const domRef = useDOMRef(ref);

  return (
    <section
      {...filterDOMProps(otherProps)}
      ref={domRef}
      className="ac-content"
    >
      {children}
    </section>
  );
}

/**
 * Content represents the primary content a container
 */
const _Content = forwardRef(Content);
export { _Content as Content };
