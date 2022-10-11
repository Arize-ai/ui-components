import { useDOMRef } from '../utils';
import {
  AriaLabelingProps,
  CollectionBase,
  DOMProps,
  DOMRef,
  FocusStrategy,
  MultipleSelection,
} from '../types';
import { MenuContext } from './context';
import { MenuItem } from './MenuItem';
import { MenuSection } from './MenuSection';
import { mergeProps, useSyncRef } from '@react-aria/utils';
import React, { Key, ReactElement, useContext } from 'react';
import { useMenu } from '@react-aria/menu';
import { useTreeState } from '@react-stately/tree';
import theme from '../theme';
import { css } from '@emotion/core';

export interface MenuProps<T> extends CollectionBase<T>, MultipleSelection {
  /** Where the focus should be set. */
  autoFocus?: boolean | FocusStrategy;
  /** Whether keyboard navigation is circular. */
  shouldFocusWrap?: boolean;
  /** Handler that is called when an item is selected. */
  onAction?: (key: Key) => void;
  /** Handler that is called when the menu should close after selecting an item. */
  onClose?: () => void;
}

export interface AriaMenuProps<T>
  extends MenuProps<T>,
    DOMProps,
    AriaLabelingProps {}

export interface MenuComponentProps<T> extends AriaMenuProps<T> {}

const menuULCSS = css`
  background-color: ${theme.colors.gray500};
  border-radius: 4px;
  color: ${theme.textColors.white90};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  outline: none;
  border: 1px solid ${theme.components.dropdown.borderColor};
  max-height: inherit;
  list-style: none;
  margin: 0;
  padding: ${theme.spacing.padding4}px 0;
`;
function Menu<T extends object>(
  props: MenuComponentProps<T>,
  ref: DOMRef<HTMLUListElement>
) {
  let contextProps = useContext(MenuContext);
  let completeProps = {
    ...mergeProps(contextProps, props),
  };

  let domRef = useDOMRef(ref);
  let state = useTreeState(completeProps);
  let { menuProps } = useMenu(completeProps, state, domRef);
  useSyncRef(contextProps, domRef);

  return (
    <ul {...menuProps} ref={domRef} className={'ac-menu'} css={menuULCSS}>
      {[...state.collection].map(item => {
        if (item.type === 'section') {
          return (
            <MenuSection
              key={item.key}
              item={item}
              state={state}
              onAction={completeProps.onAction}
            />
          );
        }

        let menuItem = (
          <MenuItem
            key={item.key}
            item={item}
            state={state}
            onAction={completeProps.onAction}
          />
        );

        if (item.wrapper) {
          menuItem = item.wrapper(menuItem);
        }

        return menuItem;
      })}
    </ul>
  );
}

/**
 * Menus display a list of actions or options that a user can choose.
 */
// forwardRef doesn't support generic parameters, so cast the result to the correct type
// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref
const _Menu = React.forwardRef(Menu) as <T>(
  props: MenuComponentProps<T> & { ref?: DOMRef<HTMLUListElement> }
) => ReactElement;
export { _Menu as Menu };
