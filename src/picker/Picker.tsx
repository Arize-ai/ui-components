import { css } from '@emotion/react';
import { Popover } from '../popover';
import { classNames, useDOMRef, useUnwrapDOMRef } from '../utils';
import { useOverlayPosition } from '@react-aria/overlays';
import {
  DOMRef,
  DOMRefValue,
  FocusableRefValue,
  LabelPosition,
} from '../types';
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
import { useProviderProps } from '../provider';
import { Field } from '../field';

function Picker<T extends object>(
  props: PickerProps<T>,
  ref: DOMRef<HTMLDivElement>
) {
  // Call use provider props so the textfield can inherit from the provider
  // E.x. disabled, readOnly, etc.
  props = useProviderProps(props);
  let {
    isQuiet = false,
    isDisabled,
    direction = 'bottom',
    align = 'start',
    shouldFlip = true,
    placeholder = 'Select an option...',
    labelPosition = 'top' as LabelPosition,
    label,
    name,
    autoFocus,
    addonBefore,
    isInline,
    isUnderlined,
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
  let {
    labelProps,
    triggerProps,
    menuProps,
    descriptionProps,
    errorMessageProps,
  } = useSelect(
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
        // Set max height: inherit so dropdown menu scrolling works
        style={{ maxHeight: 'inherit' }}
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
    // underline style popover width should not conform to the button width
    minWidth: isUnderlined ? '200px' : buttonWidth,
  };

  const overlay = (
    <Popover
      isOpen={state.isOpen}
      // @ts-ignore
      style={style}
      className={classNames('ac-dropdown', props.className)}
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

  const picker = (
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
          isUnderlined={isUnderlined}
          {...{ addonBefore }}
        >
          <div>{contents}</div>
          {isLoadingInitial && 'Loading...'}
        </DropdownButton>
      </PressResponder>
      {state.collection.size === 0 ? null : overlay}
    </div>
  );

  let wrapperClassName = label
    ? classNames('ac-field', props.className, {
        'ac-dropdown-field-wrapper--quiet': isQuiet,
        'ac-Dropdown-field-wrapper--positionSide': labelPosition === 'side',
      })
    : '';

  return (
    <Field
      {...props}
      ref={domRef}
      wrapperClassName={wrapperClassName}
      labelProps={labelProps}
      descriptionProps={descriptionProps}
      errorMessageProps={errorMessageProps}
      showErrorIcon={false}
      includeNecessityIndicatorInAccessibilityName
      elementType="span"
      isInline={isInline}
    >
      {picker}
    </Field>
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
