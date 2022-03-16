import { css } from '@emotion/core';
import { Popover } from '../popover';
import { classNames, useDOMRef, useUnwrapDOMRef } from '../utils';
import { useOverlayPosition } from '@react-aria/overlays';
import { DOMRef, DOMRefValue, FocusableRefValue } from '../types';
import { HiddenSelect, useSelect } from '@react-aria/select';
import { ListBoxBase, useListBoxLayout } from '../listbox';
import { FocusScope } from '@react-aria/focus';
import {
  mergeProps,
  useLayoutEffect,
  useResizeObserver,
} from '@react-aria/utils';
import { Placement } from '@react-types/overlays';
import { DropdownMenu, DropdownButton } from '../dropdown';
import { PressResponder, useHover } from '@react-aria/interactions';
import React, { ReactElement, useCallback, useRef, useState } from 'react';
import { PickerProps } from '../types';
import { Text } from '../content';
import { useSelectState } from '@react-stately/select';
import theme from '../theme';

function Picker<T extends object>(
  props: PickerProps<T>,
  ref: DOMRef<HTMLDivElement>
) {
  let {
    isQuiet = false,
    isDisabled,
    direction = 'bottom',
    align = 'start',
    shouldFlip = true,
    placeholder = 'Select an option...',
    label,
    name,
    autoFocus,
    addonBefore,
  } = props;

  let state = useSelectState(props);
  let domRef = useDOMRef(ref);

  let dropdownRef = useRef<DOMRefValue<HTMLDivElement>>();
  // @ts-ignore
  let unwrappedDropdownRef = useUnwrapDOMRef(dropdownRef);
  let triggerRef = useRef<FocusableRefValue<HTMLElement>>();
  // @ts-ignore
  let unwrappedTriggerRef = useUnwrapDOMRef(triggerRef);
  let listboxRef = useRef();

  // We create the listbox layout in Picker and pass it to ListBoxBase below
  // so that the layout information can be cached even while the listbox is not mounted.
  // We also use the layout as the keyboard delegate for type to select.
  let layout = useListBoxLayout(state);
  let { triggerProps, menuProps } = useSelect(
    {
      ...props,
      keyboardDelegate: layout,
    },
    state,
    unwrappedTriggerRef
  );

  let { overlayProps, placement, updatePosition } = useOverlayPosition({
    targetRef: unwrappedTriggerRef,
    overlayRef: unwrappedDropdownRef,
    // @ts-ignore refs are not playing nicely with hooks
    scrollRef: listboxRef,
    placement: `${direction} ${align}` as Placement,
    shouldFlip: shouldFlip,
    isOpen: state.isOpen,
    onClose: state.close,
  });

  let { hoverProps, isHovered } = useHover({ isDisabled });

  // Update position once the ListBox has rendered. This ensures that
  // it flips properly when it doesn't fit in the available space.
  // TODO: add ResizeObserver to useOverlayPosition so we don't need this.
  useLayoutEffect(() => {
    if (state.isOpen) {
      requestAnimationFrame(() => {
        updatePosition();
      });
    }
  }, [state.isOpen, updatePosition]);

  let isLoadingInitial = props.isLoading && state.collection.size === 0;
  let isLoadingMore = props.isLoading && state.collection.size > 0;

  let listbox = (
    <FocusScope restoreFocus>
      <ListBoxBase
        {...menuProps}
        // @ts-ignore
        ref={listboxRef}
        disallowEmptySelection
        autoFocus={state.focusStrategy || true}
        shouldSelectOnPressUp
        focusOnPointerEnter
        // @ts-ignore
        layout={layout}
        state={state}
        isLoading={isLoadingMore}
        onLoadMore={props.onLoadMore}
      />
    </FocusScope>
  );

  // Measure the width of the button to inform the width of the menu (below).
  let [buttonWidth, setButtonWidth] = useState<number | null>(null);

  let onResize = useCallback(() => {
    if (unwrappedTriggerRef.current) {
      let width = unwrappedTriggerRef.current.offsetWidth;
      setButtonWidth(width);
    }
  }, [unwrappedTriggerRef, setButtonWidth]);

  useResizeObserver({
    ref: unwrappedTriggerRef,
    onResize: onResize,
  });

  useLayoutEffect(onResize, [state.selectedKey, onResize]);

  let style = {
    ...overlayProps.style,
    minWidth: buttonWidth,
  };

  const overlay = (
    <Popover
      isOpen={state.isOpen}
      // @ts-ignore
      style={style}
      className="ac-dropdown"
      // @ts-ignore
      ref={dropdownRef}
      placement={placement}
      hideArrow
      shouldCloseOnBlur
      onClose={state.close}
    >
      <DropdownMenu>{listbox}</DropdownMenu>
    </Popover>
  );

  let contents = state.selectedItem
    ? state.selectedItem.textValue || state.selectedItem.rendered
    : placeholder;
  if (typeof contents === 'string') {
    contents = (
      <Text
        className={classNames({
          'is-placeholder': state.selectedItem == null,
        })}
      >
        {contents}
      </Text>
    );
  }

  return (
    <div
      className={classNames(
        'ac-dropdown ac-dropdown--picker',
        {
          'is-disabled': isDisabled,
        },
        props.className
      )}
      ref={domRef}
      css={css`
        .ac-dropdown-button__text {
          .is-placeholder {
            color: ${theme.textColors.white50};
          }
        }
      `}
    >
      <HiddenSelect
        isDisabled={isDisabled}
        state={state}
        triggerRef={unwrappedTriggerRef}
        label={label}
        name={name}
      />
      {/**@ts-ignore */}
      <PressResponder {...mergeProps(hoverProps, triggerProps)}>
        <DropdownButton
          // @ts-ignore
          ref={triggerRef}
          isQuiet={isQuiet}
          isActive={state.isOpen}
          isDisabled={isDisabled}
          autoFocus={autoFocus}
          className={classNames('ac-dropdown-trigger', {
            'is-hovered': isHovered,
          })}
          {...{ addonBefore }}
        >
          <div>{contents}</div>
          {isLoadingInitial && 'Loading...'}
        </DropdownButton>
      </PressResponder>
      {state.collection.size === 0 ? null : overlay}
    </div>
  );
}

/**
 * Pickers allow users to choose a single option from a collapsible list of options when space is limited.
 */
// forwardRef doesn't support generic parameters, so cast the result to the correct type
// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref
const _Picker = React.forwardRef(Picker) as <T>(
  props: PickerProps<T> & { ref?: DOMRef<HTMLDivElement> }
) => ReactElement;
export { _Picker as Picker };
