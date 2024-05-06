import { DOMRef } from '@react-types/shared';
import React, { Key, ReactElement, useCallback, useRef } from 'react';
import { useBreadcrumbs } from '@react-aria/breadcrumbs';
import { useLayoutEffect, useValueEffect } from '@react-aria/utils';
import { useResizeObserver } from '@react-aria/utils';
import { css } from '@emotion/react';
import { useProviderProps } from '../provider';
import { MenuTrigger } from '../menu/MenuTrigger';
import { Menu } from '../menu/Menu';
import { FolderOutline } from '../icon/Icons';
import { classNames, useDOMRef } from '../utils';
import { ActionButton } from '../button';
import theme from '../theme';
import { AriaLabelingProps, DOMProps, ItemProps, StyleProps } from '../types';
import { BreadcrumbItem } from './BreadcrumbItem';

const MIN_VISIBLE_ITEMS = 1;
const MAX_VISIBLE_ITEMS = 4;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BreadcrumbsProps {}
export interface AriaBreadcrumbsProps
  extends BreadcrumbsProps,
    DOMProps,
    AriaLabelingProps {}

export interface ArizeBreadcrumbsProps<T>
  extends AriaBreadcrumbsProps,
    StyleProps {
  /** The breadcrumb items. */
  children: ReactElement<ItemProps<T>> | ReactElement<ItemProps<T>>[];
  /** Whether the Breadcrumbs are disabled. */
  isDisabled?: boolean;
  /** Called when an item is acted upon (usually selection via press). */
  onAction?: (key: Key) => void;
  /**
   * Size of the Breadcrumbs including spacing and layout.
   * @default 'L'
   */
  size?: 'S' | 'M' | 'L';
  /** Whether to always show the root item if the items are collapsed. */
  showRoot?: boolean;
  /**
   * Whether to place the last Breadcrumb item onto a new line.
   */
  isMultiline?: boolean;
  /**
   * Whether to autoFocus the last Breadcrumb item when the Breadcrumbs render.
   */
  autoFocusCurrent?: boolean;
}

const ulCSS = css`
  flex-wrap: nowrap;
  flex: 1 0;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  color: var(--ac-global-text-color-700);
  li:last-of-type {
    font-weight: ${theme.typography.weights.heavy};
    color: var(--ac-global-text-color-900);
  }
  li:not(:last-of-type):hover {
    text-decoration: underline;
    cursor: pointer;
    color: var(--ac-global-text-color-900);
  }
`;

const liCSS = css`
  box-sizing: border-box;
  white-space: nowrap;

  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
  position: relative;

  .ac-breadcrumbs-item-link {
    padding: 0 var(--ac-global-dimension-static-size-50);
    outline: none;
  }
  .ac-icon-wrap {
    color: var(--ac-global-text-color-700);
  }
`;

function Breadcrumbs<T>(props: ArizeBreadcrumbsProps<T>, ref: DOMRef) {
  props = useProviderProps(props);
  const {
    size = 'L',
    isMultiline,
    children,
    showRoot,
    isDisabled,
    onAction,
    autoFocusCurrent,
  } = props;

  // Not using React.Children.toArray because it mutates the key prop.
  const childArray: ReactElement[] = [];
  React.Children.forEach(children, child => {
    if (React.isValidElement(child)) {
      childArray.push(child);
    }
  });

  const domRef = useDOMRef(ref);
  const listRef = useRef<HTMLUListElement>(null);

  const [visibleItems, setVisibleItems] = useValueEffect(childArray.length);

  const { navProps } = useBreadcrumbs(props);

  const updateOverflow = useCallback(() => {
    const computeVisibleItems = (visibleItems: number) => {
      // Refs can be null at runtime.
      const currListRef: HTMLUListElement | null = listRef.current;
      if (!currListRef) {
        return;
      }

      const listItems = Array.from(currListRef.children) as HTMLLIElement[];
      const containerWidth = currListRef.offsetWidth;
      const isShowingMenu = childArray.length > visibleItems;
      let calculatedWidth = 0;
      let newVisibleItems = 0;
      let maxVisibleItems = MAX_VISIBLE_ITEMS;

      if (showRoot) {
        calculatedWidth += (listItems.shift() as HTMLLIElement).offsetWidth;
        newVisibleItems++;
      }

      if (isShowingMenu) {
        calculatedWidth += (listItems.shift() as HTMLLIElement).offsetWidth;
        maxVisibleItems--;
      }

      if (showRoot && calculatedWidth >= containerWidth) {
        newVisibleItems--;
      }

      // TODO: what if multiline and only one breadcrumb??
      if (isMultiline) {
        listItems.pop();
        newVisibleItems++;
      } else {
        if (listItems.length > 0) {
          // Ensure the last breadcrumb isn't truncated when we measure it.
          const last = listItems.pop() as HTMLLIElement;
          last.style.overflow = 'visible';

          calculatedWidth += last.offsetWidth;
          if (calculatedWidth < containerWidth) {
            newVisibleItems++;
          }

          last.style.overflow = '';
        }
      }

      for (const breadcrumb of listItems.reverse()) {
        calculatedWidth += breadcrumb.offsetWidth;
        if (calculatedWidth < containerWidth) {
          newVisibleItems++;
        }
      }

      return Math.max(
        MIN_VISIBLE_ITEMS,
        Math.min(maxVisibleItems, newVisibleItems)
      );
    };

    // eslint-disable-next-line func-names
    setVisibleItems(function*() {
      // Update to show all items.
      yield childArray.length;

      // Measure, and update to show the items that fit.
      const newVisibleItems = computeVisibleItems(childArray.length);
      yield newVisibleItems;

      // If the number of items is less than the number of children,
      // then update again to ensure that the menu fits.
      if (
        newVisibleItems != null &&
        newVisibleItems < childArray.length &&
        newVisibleItems > 1
      ) {
        yield computeVisibleItems(newVisibleItems);
      }
    });
  }, [childArray.length, setVisibleItems, showRoot, isMultiline]);

  useResizeObserver({ ref: domRef, onResize: updateOverflow });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(updateOverflow, [children]);

  let contents = childArray;
  if (childArray.length > visibleItems) {
    const selectedItem = childArray[childArray.length - 1];
    const selectedKey = selectedItem.key ?? childArray.length - 1;
    const onMenuAction = (key: Key) => {
      // Don't fire onAction when clicking on the last item
      if (key !== selectedKey && onAction) {
        onAction(key);
      }
    };

    const menuItem = (
      <BreadcrumbItem key="menu">
        <MenuTrigger>
          <ActionButton aria-label="…" isDisabled={isDisabled}>
            <FolderOutline />
          </ActionButton>
          <Menu
            selectionMode="single"
            selectedKeys={[selectedKey]}
            onAction={onMenuAction}
          >
            {childArray}
          </Menu>
        </MenuTrigger>
      </BreadcrumbItem>
    );

    contents = [menuItem];
    const breadcrumbs = [...childArray];
    let endItems = visibleItems;
    if (showRoot && visibleItems > 1) {
      contents.unshift(breadcrumbs.shift() as ReactElement);
      endItems--;
    }
    contents.push(...breadcrumbs.slice(-endItems));
  }

  const lastIndex = contents.length - 1;
  const breadcrumbItems = contents.map((child, index) => {
    const isCurrent = index === lastIndex;
    const key = child.key ?? index;
    const onPress = () => {
      if (onAction) {
        onAction(key);
      }
    };

    return (
      <li key={index} className={classNames('ac-breadcrumbs-item')} css={liCSS}>
        <BreadcrumbItem
          key={key}
          isCurrent={isCurrent}
          isDisabled={isDisabled}
          onPress={onPress}
          autoFocus={isCurrent && autoFocusCurrent}
        >
          {child.props.children}
        </BreadcrumbItem>
      </li>
    );
  });

  return (
    <nav
      {...navProps}
      ref={domRef}
      css={css`
        width: 100%;
      `}
    >
      <ul
        ref={listRef}
        className={classNames('ac-breadcrumbs', {
          'ac-breadcrumbs--small': size === 'S',
          'ac-breadcrumbs--medium': size === 'M',
          'ac-breadcrumbs--multiline': isMultiline,
          'ac-breadcrumbs--showRoot': showRoot,
          'is-disabled': isDisabled,
        })}
        css={ulCSS}
      >
        {breadcrumbItems}
      </ul>
    </nav>
  );
}

/**
 * Breadcrumbs show hierarchy and navigational context for a user’s location within an application.
 */
const _Breadcrumbs = React.forwardRef(Breadcrumbs);
export { _Breadcrumbs as Breadcrumbs };
