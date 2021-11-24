import { layoutInfoToStyle, useVirtualizerItem } from '@react-aria/virtualizer';
import { ListBoxContext } from './ListBoxContext';
import { Node } from '@react-types/shared';
import React, { Fragment, ReactNode, useContext, useRef } from 'react';
import { ReusableView } from '@react-stately/virtualizer';
import { useListBoxSection } from '@react-aria/listbox';
import { useLocale } from '@react-aria/i18n';
import { useSeparator } from '@react-aria/separator';

interface ListBoxSectionProps<T> {
  reusableView: ReusableView<Node<T>, unknown>;
  header: ReusableView<Node<T>, unknown>;
  children?: ReactNode;
}

/** @private */
export function ListBoxSection<T>(props: ListBoxSectionProps<T>) {
  let { children, reusableView, header } = props;
  let item = reusableView.content;
  let { headingProps, groupProps } = useListBoxSection({
    heading: item.rendered,
    'aria-label': item['aria-label'],
  });

  let { separatorProps } = useSeparator({
    elementType: 'li',
  });

  let headerRef = useRef();
  useVirtualizerItem({
    reusableView: header,
    // @ts-ignore
    ref: headerRef,
  });

  let { direction } = useLocale();
  let state = useContext(ListBoxContext);

  return (
    <Fragment>
      <div
        role="presentation"
        // @ts-ignore
        ref={headerRef}
        // @ts-ignore
        style={layoutInfoToStyle(header.layoutInfo, direction)}
      >
        {item.key !== state.collection.getFirstKey() && (
          <div {...separatorProps} className="ac-enu-divider" />
        )}
        {item.rendered && (
          <div {...headingProps} className="ac-menu-section-heading">
            {item.rendered}
          </div>
        )}
      </div>
      <div
        {...groupProps}
        // @ts-ignore
        style={layoutInfoToStyle(reusableView.layoutInfo, direction)}
        className="ac-menu"
      >
        {children}
      </div>
    </Fragment>
  );
}
