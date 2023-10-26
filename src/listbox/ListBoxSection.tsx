import {
  VirtualizerItemOptions,
  layoutInfoToStyle,
  useVirtualizerItem,
} from '@react-aria/virtualizer';
import { ListBoxContext } from './ListBoxContext';
import { Node } from '@react-types/shared';
import React, { Fragment, ReactNode, useContext, useRef } from 'react';
import { LayoutInfo } from '@react-stately/virtualizer';
import { useListBoxSection } from '@react-aria/listbox';
import { useLocale } from '@react-aria/i18n';
import { useSeparator } from '@react-aria/separator';
import { css } from '@emotion/react';
import theme from '../theme';

interface ListBoxSectionProps<T> extends Omit<VirtualizerItemOptions, 'ref'> {
  headerLayoutInfo: LayoutInfo;
  item: Node<T>;
  children?: ReactNode;
}

const headingCSS = css`
  padding-left: var(--ac-global-dimension-static-size-200);
  padding-right: var(--ac-global-dimension-static-size-200);
  margin-top: var(--ac-global-dimension-size-75);
  margin-bottom: var(--ac-global-dimension-size-40);
  font-size: ${theme.typography.sizes.medium.fontSize}px;
  line-height: ${theme.typography.sizes.medium.lineHeight}px;
  font-weight: ${theme.typography.weights.heavy};
`;

const dividerCSS = css`
  box-sizing: content-box;
  height: var(--ac-global-border-size-thick);
  margin: 1.5px var(--ac-global-dimension-static-size-150);
  background: var(--ac-global-border-color-default);
  border: none;
  padding: 0;
  overflow: visible;
`;

/** @private */
export function ListBoxSection<T>(props: ListBoxSectionProps<T>) {
  let { children, layoutInfo, headerLayoutInfo, virtualizer, item } = props;
  let { headingProps, groupProps } = useListBoxSection({
    heading: item.rendered,
    'aria-label': item['aria-label'],
  });

  let { separatorProps } = useSeparator({
    elementType: 'li',
  });

  let headerRef = useRef(null);
  useVirtualizerItem({
    layoutInfo: headerLayoutInfo,
    virtualizer,
    ref: headerRef,
  });

  let { direction } = useLocale();
  let state = useContext(ListBoxContext);

  return (
    <Fragment>
      <div
        role="presentation"
        ref={headerRef}
        style={layoutInfoToStyle(headerLayoutInfo, direction)}
      >
        {item.key !== state.collection.getFirstKey() && (
          <div
            {...separatorProps}
            className="ac-menu-divider"
            css={dividerCSS}
          />
        )}
        {item.rendered && (
          <div
            {...headingProps}
            className="ac-menu-section-heading"
            css={headingCSS}
          >
            {item.rendered}
          </div>
        )}
      </div>
      <div
        {...groupProps}
        style={layoutInfoToStyle(layoutInfo, direction)}
        className="ac-menu"
      >
        {children}
      </div>
    </Fragment>
  );
}
