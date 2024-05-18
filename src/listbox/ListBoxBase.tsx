import { AriaListBoxOptions, useListBox } from '@react-aria/listbox';

import { ListLayout } from '@react-stately/layout';
import { ListState } from '@react-stately/list';
import { mergeProps } from '@react-aria/utils';
import React, {
  HTMLAttributes,
  ReactElement,
  ReactNode,
  RefObject,
  useMemo,
  CSSProperties,
} from 'react';
import { ReusableView } from '@react-stately/virtualizer';
import { useCollator } from '@react-aria/i18n';
import { Virtualizer, VirtualizerItem } from '@react-aria/virtualizer';
import {
  AriaLabelingProps,
  DOMProps,
  FocusStrategy,
  StyleProps,
  Node,
} from '../types';
import { ListBoxSection } from './ListBoxSection';
import { ListBoxOption } from './ListBoxOption';
import { ListBoxContext } from './ListBoxContext';

interface ListBoxBaseProps<T>
  extends AriaListBoxOptions<T>,
    DOMProps,
    AriaLabelingProps,
    StyleProps {
  layout: ListLayout<T>;
  state: ListState<T>;
  autoFocus?: boolean | FocusStrategy;
  shouldFocusWrap?: boolean;
  shouldSelectOnPressUp?: boolean;
  focusOnPointerEnter?: boolean;
  domProps?: HTMLAttributes<HTMLElement>;
  disallowEmptySelection?: boolean;
  shouldUseVirtualFocus?: boolean;
  transitionDuration?: number;
  isLoading?: boolean;
  style?: CSSProperties;
  onLoadMore?: () => void;
  renderEmptyState?: () => ReactNode;
  onScroll?: () => void;
}

/** @private */
export function useListBoxLayout<T>(state: ListState<T>) {
  const collator = useCollator({ usage: 'search', sensitivity: 'base' });
  const layout = useMemo<ListLayout<T>>(
    () =>
      new ListLayout<T>({
        estimatedRowHeight: 32,
        estimatedHeadingHeight: 26,
        padding: 4,
        loaderHeight: 40,
        placeholderHeight: 32,
        collator,
      }),
    [collator]
  );

  layout.collection = state.collection;
  layout.disabledKeys = state.disabledKeys;
  return layout;
}

/** @private */
function ListBoxBase<T>(
  props: ListBoxBaseProps<T>,
  ref: RefObject<HTMLDivElement>
) {
  const {
    layout,
    state,
    shouldSelectOnPressUp,
    focusOnPointerEnter,
    shouldUseVirtualFocus,
    domProps = {},
    transitionDuration = 0,
    onScroll,
    isLoading = false,
  } = props;
  const { listBoxProps } = useListBox(
    {
      ...props,
      keyboardDelegate: layout,
      isVirtualized: true,
    },
    state,
    ref
  );

  // Sync loading state into the layout.
  layout.isLoading = isLoading;

  // This overrides collection view's renderWrapper to support hierarchy of items in sections.
  // The header is extracted from the children so it can receive ARIA labeling properties.
  type View = ReusableView<Node<T>, unknown>;

  const renderWrapper = (
    parent: View,
    reusableView: View,
    children: View[],
    renderChildren: (views: View[]) => ReactElement[]
  ) => {
    if (reusableView.viewType === 'section') {
      return (
        <ListBoxSection
          key={reusableView.key}
          item={reusableView.content}
          layoutInfo={reusableView.layoutInfo!}
          virtualizer={reusableView.virtualizer}
          // @ts-ignore
          headerLayoutInfo={
            // @ts-ignore
            children.find(c => c.viewType === 'header').layoutInfo
          }
        >
          {renderChildren(children.filter(c => c.viewType === 'item'))}
        </ListBoxSection>
      );
    }

    return (
      <VirtualizerItem
        key={reusableView.key}
        // @ts-ignore
        layoutInfo={reusableView.layoutInfo}
        virtualizer={reusableView.virtualizer}
        parent={parent?.layoutInfo ?? undefined}
      >
        {reusableView.rendered as ReactNode}
      </VirtualizerItem>
    );
  };

  return (
    <ListBoxContext.Provider value={state}>
      <Virtualizer
        style={props.style}
        {...mergeProps(listBoxProps, domProps)}
        ref={ref}
        focusedKey={state.selectionManager.focusedKey}
        sizeToFit="height"
        scrollDirection="vertical"
        className="ac-menu"
        layout={layout}
        collection={state.collection}
        // @ts-ignore assume there is a header
        renderWrapper={renderWrapper}
        transitionDuration={transitionDuration}
        isLoading={isLoading}
        onLoadMore={props.onLoadMore}
        shouldUseVirtualFocus={shouldUseVirtualFocus}
        onScroll={onScroll}
      >
        {(type, item: Node<T>) => {
          if (type === 'item') {
            return (
              <ListBoxOption
                item={item}
                shouldSelectOnPressUp={shouldSelectOnPressUp}
                shouldFocusOnHover={focusOnPointerEnter}
                shouldUseVirtualFocus={shouldUseVirtualFocus}
              />
            );
          } else if (type === 'loader') {
            return (
              // aria-selected isn't needed here since this option is not selectable.
              <div
                role="option"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                <div className={'ac-dropdown-progress-circle'}>
                  {state.collection.size > 0 ? 'Loading More' : 'Loading'}
                </div>
              </div>
            );
          } else if (type === 'placeholder') {
            const emptyState = props.renderEmptyState
              ? props.renderEmptyState()
              : null;
            if (emptyState == null) {
              return null;
            }

            return (
              <div
                // aria-selected isn't needed here since this option is not selectable.
                role="option"
              >
                {emptyState}
              </div>
            );
          }
          return null;
        }}
      </Virtualizer>
    </ListBoxContext.Provider>
  );
}

// forwardRef doesn't support generic parameters, so cast the result to the correct type
// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref
// @ts-ignore
const _ListBoxBase = React.forwardRef(ListBoxBase) as <T>(
  props: ListBoxBaseProps<T> & { ref?: RefObject<HTMLDivElement> }
) => ReactElement;
export { _ListBoxBase as ListBoxBase };
