import { Icon, CheckmarkOutline } from '../icon';
import { classNames } from '../utils';
import { FocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { Node } from '@react-types/shared';
import React, { Key, useRef } from 'react';
import { Text } from '../content';
import { TreeState } from '@react-stately/tree';
import { useHover } from '@react-aria/interactions';
import { useMenuContext } from './context';
import { useMenuItem } from '@react-aria/menu';
import { menuItemCSS } from './styles';

interface MenuItemProps<T> {
  item: Node<T>;
  state: TreeState<T>;
  isVirtualized?: boolean;
  onAction?: (key: Key) => void;
}

/** @private */
export function MenuItem<T>(props: MenuItemProps<T>) {
  let { item, state, isVirtualized, onAction } = props;

  let { onClose, closeOnSelect } = useMenuContext();

  let { rendered, key } = item;

  let isSelected = state.selectionManager.isSelected(key);
  let isDisabled = state.disabledKeys.has(key);

  let ref = useRef<HTMLLIElement>(null);
  let {
    menuItemProps,
    // labelProps,
    // descriptionProps,
    // keyboardShortcutProps,
  } = useMenuItem(
    {
      isSelected,
      isDisabled,
      'aria-label': item['aria-label'],
      key,
      onClose,
      closeOnSelect,
      isVirtualized,
      onAction,
    },
    state,
    ref
  );
  let { hoverProps, isHovered } = useHover({ isDisabled });

  let contents =
    typeof rendered === 'string' ? <Text>{rendered}</Text> : rendered;

  return (
    <FocusRing focusRingClass={'ac-focus-ring'} key={key}>
      <li
        {...mergeProps(menuItemProps, hoverProps)}
        ref={ref}
        key={key}
        className={classNames('ac-menu-item', {
          'is-disabled': isDisabled,
          'is-selected': isSelected,
          'is-selectable': state.selectionManager.selectionMode !== 'none',
          'is-hovered': isHovered,
        })}
        css={menuItemCSS}
      >
        {contents}
        {isSelected && <Icon svg={<CheckmarkOutline />} />}
      </li>
    </FocusRing>
  );
}
