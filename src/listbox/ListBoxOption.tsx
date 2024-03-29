import { Icon, CheckmarkOutline } from '../icon';
import { classNames } from '../utils';
import { FocusRing } from '@react-aria/focus';
import { isFocusVisible, useHover } from '@react-aria/interactions';
import { ListBoxContext } from './ListBoxContext';
import { mergeProps } from '@react-aria/utils';
import { Node } from '@react-types/shared';
import React, { useContext } from 'react';
import { Text } from '../content';
import { useOption } from '@react-aria/listbox';
import { useRef } from 'react';
import { menuItemCSS } from '../menu/styles';

interface OptionProps<T> {
  item: Node<T>;
  shouldSelectOnPressUp?: boolean;
  shouldFocusOnHover?: boolean;
  shouldUseVirtualFocus?: boolean;
}

/** @private */
export function ListBoxOption<T>(props: OptionProps<T>) {
  let {
    item,
    shouldSelectOnPressUp,
    shouldFocusOnHover,
    shouldUseVirtualFocus,
  } = props;

  let { rendered, key } = item;

  let state = useContext(ListBoxContext);

  let ref = useRef<HTMLDivElement>();
  let { optionProps, isSelected, isDisabled, isFocused } = useOption(
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
  let { hoverProps, isHovered } = useHover({
    ...props,
    isDisabled,
  });

  let contents =
    typeof rendered === 'string' ? <Text>{rendered}</Text> : rendered;

  let isKeyboardModality = isFocusVisible();

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
