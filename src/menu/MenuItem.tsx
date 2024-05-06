import { FocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { Node } from '@react-types/shared';
import React, { Key, useRef } from 'react';
import { TreeState } from '@react-stately/tree';
import { useHover } from '@react-aria/interactions';
import { useMenuItem } from '@react-aria/menu';
import { Text } from '../content';
import { classNames } from '../utils';
import { Icon, CheckmarkOutline } from '../icon';
import { useMenuContext } from './context';
import { menuItemCSS } from './styles';

interface MenuItemProps<T> {
  item: Node<T>;
  state: TreeState<T>;
  isVirtualized?: boolean;
  onAction?: (key: Key) => void;
}

/** @private */
export function MenuItem<T>(props: MenuItemProps<T>) {
  const { item, state, isVirtualized, onAction } = props;

  const { onClose, closeOnSelect } = useMenuContext();

  const { rendered, key } = item;

  const isSelected = state.selectionManager.isSelected(key);
  const isDisabled = state.disabledKeys.has(key);

  const ref = useRef<HTMLLIElement>(null);
  const {
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
  const { hoverProps, isHovered } = useHover({ isDisabled });

  const contents =
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
