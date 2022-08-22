import { useDOMRef } from '../utils';
import { DOMRef } from '@react-types/shared';
import { filterDOMProps } from '@react-aria/utils';
import React, { forwardRef, ReactNode } from 'react';
import { DOMProps } from '../types';

export interface ContentProps extends DOMProps {
  /**
   * Content content.
   */
  children: ReactNode;
}

function Content(props: ContentProps, ref: DOMRef) {
  let { children, ...otherProps } = props;
  let domRef = useDOMRef(ref);

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
