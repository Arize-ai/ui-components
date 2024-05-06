import { FocusRing } from '@react-aria/focus';
import { isFocusVisible, useHover } from '@react-aria/interactions';
import { mergeProps } from '@react-aria/utils';
import { Node } from '@react-types/shared';
import React, { useContext } from 'react';
import { useOption } from '@react-aria/listbox';
import { useRef } from 'react';
import { Text } from '../content';
import { classNames } from '../utils';
import { Icon, CheckmarkOutline } from '../icon';
import { menuItemCSS } from '../menu/styles';
import { ListBoxContext } from './ListBoxContext';

interface OptionProps<T> {
  item: Node<T>;
  shouldSelectOnPressUp?: boolean;
  shouldFocusOnHover?: boolean;
  shouldUseVirtualFocus?: boolean;
}

/** @private */
export function ListBoxOption<T>(props: OptionProps<T>) {
  const {
    item,
    shouldSelectOnPressUp,
    shouldFocusOnHover,
    shouldUseVirtualFocus,
  } = props;

  const { rendered, key } = item;

  const state = useContext(ListBoxContext);

  const ref = useRef<HTMLDivElement>();
  const { optionProps, isSelected, isDisabled, isFocused } = useOption(
    {
      'aria-label': item['aria-label'],
      key,
      shouldSelectOnPressUp,
      shouldFocusOnHover,
      isVirtualized: true,
      shouldUseVirtualFocus,
    },
    state,
    // @ts-ignore
    ref
  );
  const { hoverProps, isHovered } = useHover({
    ...props,
    isDisabled,
  });

  const contents =
    typeof rendered === 'string' ? <Text>{rendered}</Text> : rendered;

  const isKeyboardModality = isFocusVisible();

  return (
    <FocusRing focusRingClass="focus-ring">
      <div
        {...mergeProps(optionProps, shouldFocusOnHover ? {} : hoverProps)}
        // @ts-ignore
        ref={ref}
        className={classNames('ac-menu-item', {
          // If using virtual focus, apply focused styles to the item when the user is interacting with keyboard modality
          'is-focused':
            shouldUseVirtualFocus && isFocused && isKeyboardModality,
          'is-disabled': isDisabled,
          'is-selected': isSelected,
          'is-selectable': state.selectionManager.selectionMode !== 'none',
          // When shouldFocusOnHover is false, apply hover styles both when hovered with the mouse.
          // Otherwise, apply hover styles when focused using non-keyboard modality.
          'is-hovered':
            (isHovered && !shouldFocusOnHover) ||
            (isFocused && !isKeyboardModality),
        })}
        css={menuItemCSS}
      >
        {contents}
        {isSelected && (
          <Icon
            svg={<CheckmarkOutline />}
            className="ac-menu-item__selected-checkmark"
          />
        )}
      </div>
    </FocusRing>
  );
}
