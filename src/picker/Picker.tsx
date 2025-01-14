import { css } from '@emotion/react';
import { useOverlayPosition } from '@react-aria/overlays';
import { HiddenSelect, useSelect } from '@react-aria/select';
import { FocusScope } from '@react-aria/focus';
import {
  mergeProps,
  useLayoutEffect,
  useResizeObserver,
} from '@react-aria/utils';
import { PressResponder, useHover } from '@react-aria/interactions';
import React, { ReactElement, useCallback, useRef, useState } from 'react';
import { useSelectState } from '@react-stately/select';
import { PickerProps, Placement } from '../types';
import { DropdownMenu, DropdownButton } from '../dropdown';
import { ListBoxBase, useListBoxLayout } from '../listbox';
import {
  DOMRef,
  DOMRefValue,
  FocusableRefValue,
  LabelPosition,
} from '../types';
import { classNames, useDOMRef, useUnwrapDOMRef } from '../utils';
import { Popover } from '../popover';
import { useProviderProps } from '../provider';
import { Field } from '../field';
import { dimensionValue } from '../utils/styleProps';

function Picker<T extends object>(
  props: PickerProps<T>,
  ref: DOMRef<HTMLDivElement>
) {
  // Call use provider props so the textfield can inherit from the provider
  // E.x. disabled, readOnly, etc.
  props = useProviderProps(props);
  const {
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
    menuWidth,
    validationState,
    size = 'default',
  } = props;

  const state = useSelectState(props);
  const domRef = useDOMRef(ref);

  const dropdownRef = useRef<DOMRefValue<HTMLDivElement>>(null);
  const unwrappedDropdownRef = useUnwrapDOMRef(dropdownRef);
  const triggerRef = useRef<FocusableRefValue<HTMLElement>>(null);
  const unwrappedTriggerRef = useUnwrapDOMRef(triggerRef);
  const listboxRef = useRef();

  // We create the listbox layout in Picker and pass it to ListBoxBase below
  // so that the layout information can be cached even while the listbox is not mounted.
  // We also use the layout as the keyboard delegate for type to select.
  const layout = useListBoxLayout(state);
  const {
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

  const propsPlacement = `${direction} ${align}` as Placement;
  const { overlayProps, placement, updatePosition } = useOverlayPosition({
    targetRef: unwrappedTriggerRef,
    overlayRef: unwrappedDropdownRef,
    // @ts-ignore refs are not playing nicely with hooks
    scrollRef: listboxRef,
    placement: propsPlacement,
    shouldFlip: shouldFlip,
    isOpen: state.isOpen,
    onClose: state.close,
  });

  const { hoverProps, isHovered } = useHover({ isDisabled });

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

  const isLoadingInitial = props.isLoading && state.collection.size === 0;
  const isLoadingMore = props.isLoading && state.collection.size > 0;

  const listbox = (
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
  const [buttonWidth, setButtonWidth] = useState<number | null>(null);

  const onResize = useCallback(() => {
    if (unwrappedTriggerRef.current) {
      const width = unwrappedTriggerRef.current.offsetWidth;
      setButtonWidth(width);
    }
  }, [unwrappedTriggerRef, setButtonWidth]);

  useResizeObserver({
    ref: unwrappedTriggerRef,
    onResize: onResize,
  });

  useLayoutEffect(onResize, [state.selectedKey, onResize]);

  // If quiet, use the default width, otherwise match the width of the button. This can be overridden by the menuWidth prop.
  // Always have a minimum width of the button width. When quiet, there is an extra offset to add.
  // Not using style props for this because they don't support `calc`.
  const width = isQuiet ? null : buttonWidth;

  const style = {
    ...overlayProps.style,
    width: menuWidth ? dimensionValue(menuWidth) : width,
    // TODO: move to a css variable
    minWidth: isQuiet ? '200px' : buttonWidth,
  };

  const overlay = (
    <Popover
      isOpen={state.isOpen}
      // @ts-ignore
      style={style}
      className={classNames('ac-dropdown', props.className)}
      // @ts-ignore
      ref={dropdownRef}
      placement={placement || 'center'}
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
      <span
        className={classNames({
          'is-placeholder': state.selectedItem == null,
          'ac-dropdown__content': true,
        })}
      >
        {contents}
      </span>
    );
  }

  const picker = (
    <div
      className={classNames(
        'ac-dropdown ac-dropdown--picker',
        {
          'is-disabled': isDisabled,
          'ac-dropdown--quiet': isQuiet,
        },
        props.className
      )}
      ref={domRef}
      css={css`
        --ac-dropdown-min-width: 200px;
        .ac-dropdown-button__text {
          .is-placeholder {
            color: var(--ac-global-text-color-700);
            font-style: italic;
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
          size={size}
          className={classNames('ac-dropdown-trigger', {
            'is-hovered': isHovered,
          })}
          validationState={validationState}
          {...{ addonBefore }}
        >
          <div>{contents}</div>
          {isLoadingInitial && 'Loading...'}
        </DropdownButton>
      </PressResponder>
      {state.collection.size === 0 ? null : overlay}
    </div>
  );

  const wrapperClassName = label
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
