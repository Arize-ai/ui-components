import { FocusRing } from '@react-aria/focus';
import { PressResponder, useHover } from '@react-aria/interactions';
import React, {
  InputHTMLAttributes,
  ReactElement,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useComboBox } from '@react-aria/combobox';
import { useComboBoxState } from '@react-stately/combobox';
import { useFilter } from '@react-aria/i18n';
import { useLayoutEffect } from '@react-aria/utils';
import { ListBoxBase, useListBoxLayout } from '../listbox';
import { useFormProps } from '../form';
import { FieldButton } from '../button';
import { Field } from '../field';
import { DOMRefValue, FocusableRef, FocusableRefValue } from '../types';
import {
  classNames,
  dimensionValue,
  useFocusableRef,
  useResizeObserver,
  useUnwrapDOMRef,
} from '../utils';
import { TextFieldBase } from '../textfield';
import { ProgressCircle } from '../progress';
import { Popover } from '../popover';
import { useProviderProps } from '../provider';
import { AriaButtonProps } from '../types';
import { ACComboBoxProps } from '../types';
import { ArrowIosDownwardOutline, Icon } from '../icon';

function ComboBox<T extends object>(
  props: ACComboBoxProps<T>,
  ref: FocusableRef<HTMLElement>
) {
  props = useProviderProps(props);
  props = useFormProps(props);

  return <ComboBoxBase {...props} ref={ref} />;
}

const ComboBoxBase = React.forwardRef(function ComboBoxBase<T extends object>(
  props: ACComboBoxProps<T>,
  ref: FocusableRef<HTMLElement>
) {
  let {
    menuTrigger = 'input',
    shouldFlip = true,
    direction = 'bottom',
    align = 'start',
    isQuiet,
    loadingState,
    onLoadMore,
    allowsCustomValue,
    menuWidth: customMenuWidth,
    name,
    formValue = 'text',
  } = props;
  if (allowsCustomValue) {
    formValue = 'text';
  }

  let isAsync = loadingState != null;
  let popoverRef = useRef<DOMRefValue<HTMLDivElement>>(null);
  let unwrappedPopoverRef = useUnwrapDOMRef(popoverRef);
  let buttonRef = useRef<FocusableRefValue<HTMLElement>>(null);
  let unwrappedButtonRef = useUnwrapDOMRef(buttonRef);
  let listBoxRef = useRef(null);
  let inputRef = useRef<HTMLInputElement>(null);
  // serve as the new popover `triggerRef` instead of `unwrappedButtonRef` before for better positioning.
  let inputGroupRef = useRef<HTMLDivElement>();
  let domRef = useFocusableRef(ref, inputRef);

  let { contains } = useFilter({ sensitivity: 'base' });
  let state = useComboBoxState({
    ...props,
    defaultFilter: contains,
    allowsEmptyCollection: isAsync,
  });
  let layout = useListBoxLayout(state);

  let {
    buttonProps,
    inputProps,
    listBoxProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
    validationDetails,
  } = useComboBox(
    {
      ...props,
      keyboardDelegate: layout,
      buttonRef: unwrappedButtonRef,
      popoverRef: unwrappedPopoverRef,
      listBoxRef,
      inputRef: inputRef,
      menuTrigger,
      name: formValue === 'text' ? name : undefined,
    },
    state
  );

  // Measure the width of the inputfield and the button to inform the width of the menu (below).
  let [menuWidth, setMenuWidth] = useState(null);

  let onResize = useCallback(() => {
    if (unwrappedButtonRef.current && inputRef.current) {
      let buttonWidth = unwrappedButtonRef.current.offsetWidth;
      let inputWidth = inputRef.current.offsetWidth;
      setMenuWidth(buttonWidth + inputWidth);
    }
  }, [unwrappedButtonRef, inputRef, setMenuWidth]);

  useResizeObserver({
    ref: domRef,
    onResize: onResize,
  });

  useLayoutEffect(onResize, [onResize]);

  let width = isQuiet ? null : menuWidth;
  let style = {
    width: customMenuWidth ? dimensionValue(customMenuWidth) : width,
    minWidth: isQuiet
      ? `calc(${menuWidth}px + calc(2 * var(--spectrum-dropdown-quiet-offset)))`
      : menuWidth,
  };

  return (
    <>
      <Field
        {...props}
        descriptionProps={descriptionProps}
        errorMessageProps={errorMessageProps}
        isInvalid={isInvalid}
        labelProps={labelProps}
        ref={domRef}
      >
        <ComboBoxInput
          {...props}
          isOpen={state.isOpen}
          loadingState={loadingState}
          inputProps={inputProps}
          inputRef={inputRef}
          triggerProps={buttonProps}
          triggerRef={buttonRef}
          validationState={
            props.validationState || (isInvalid ? 'invalid' : null)
          }
          ref={inputGroupRef}
        />
      </Field>
      {name && formValue === 'key' && (
        <input type="hidden" name={name} value={state.selectedKey} />
      )}
      <Popover
        state={state}
        UNSAFE_style={style}
        className={classNames('ac-input-group-popover', {
          'ac-input-group-popover--quiet': isQuiet,
        })}
        ref={popoverRef}
        triggerRef={inputGroupRef}
        scrollRef={listBoxRef}
        placement={`${direction} ${align}`}
        hideArrow
        isNonModal
        shouldFlip={shouldFlip}
      >
        <ListBoxBase
          {...listBoxProps}
          ref={listBoxRef}
          disallowEmptySelection
          autoFocus={state.focusStrategy}
          shouldSelectOnPressUp
          focusOnPointerEnter
          layout={layout}
          state={state}
          shouldUseVirtualFocus
          isLoading={
            loadingState === 'loading' || loadingState === 'loadingMore'
          }
          onLoadMore={onLoadMore}
          renderEmptyState={() =>
            isAsync && (
              <span className={classNames('no-results')}>
                {loadingState === 'loading' ? 'loading' : 'no results'}
              </span>
            )
          }
        />
      </Popover>
    </>
  );
});

interface ComboBoxInputProps extends ACComboBoxProps<unknown> {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  inputRef: RefObject<HTMLInputElement | HTMLTextAreaElement>;
  triggerProps: AriaButtonProps;
  triggerRef: RefObject<FocusableRefValue<HTMLElement>>;
  style?: React.CSSProperties;
  className?: string;
  isOpen?: boolean;
}

const ComboBoxInput = React.forwardRef(function ComboBoxInput(
  props: ComboBoxInputProps,
  ref: RefObject<HTMLElement>
) {
  let {
    isQuiet,
    isDisabled,
    validationState,
    inputProps,
    inputRef,
    triggerProps,
    triggerRef,
    autoFocus,
    style,
    className,
    loadingState,
    isOpen,
    menuTrigger,
  } = props;
  let { hoverProps, isHovered } = useHover({});
  let timeout = useRef(null);
  let [showLoading, setShowLoading] = useState(false);

  let loadingCircle = (
    <ProgressCircle
      aria-label={'loading'}
      size="S"
      isIndeterminate
      className={classNames(
        'spectrum-Textfield-circleLoader',
        'ac-input-group-input-circle-loader'
      )}
    />
  );

  let isLoading = loadingState === 'loading' || loadingState === 'filtering';
  let inputValue = inputProps.value;
  let lastInputValue = useRef(inputValue);
  useEffect(() => {
    if (isLoading && !showLoading) {
      if (timeout.current === null) {
        timeout.current = setTimeout(() => {
          setShowLoading(true);
        }, 500);
      }

      // If user is typing, clear the timer and restart since it is a new request
      if (inputValue !== lastInputValue.current) {
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
          setShowLoading(true);
        }, 500);
      }
    } else if (!isLoading) {
      // If loading is no longer happening, clear any timers and hide the loading circle
      setShowLoading(false);
      clearTimeout(timeout.current);
      timeout.current = null;
    }

    lastInputValue.current = inputValue;
  }, [isLoading, showLoading, inputValue]);

  useEffect(() => {
    return () => {
      clearTimeout(timeout.current);
      timeout.current = null;
    };
  }, []);

  return (
    <FocusRing
      within
      isTextInput
      focusClass={'is-focused'}
      focusRingClass={'focus-ring'}
      autoFocus={autoFocus}
    >
      <div
        {...hoverProps}
        ref={ref as RefObject<HTMLDivElement>}
        style={style}
        className={classNames(
          'ac-input-group',
          {
            'ac-input-group--quiet': isQuiet,
            'is-disabled': isDisabled,
            'ac-input-group--invalid':
              validationState === 'invalid' && !isDisabled,
            'is-hovered': isHovered,
          },
          className
        )}
      >
        <TextFieldBase
          inputProps={inputProps}
          inputRef={inputRef}
          UNSAFE_className={classNames('ac-input-group-field')}
          inputClassName={classNames('ac-input-group-input')}
          validationIconClassName={classNames(
            'ac-input-group-input-validationIcon'
          )}
          isDisabled={isDisabled}
          isQuiet={isQuiet}
          validationState={validationState}
          // loading circle should only be displayed if menu is open, if menuTrigger is "manual", or first time load (to stop circle from showing up when user selects an option)
          // TODO: add special case for completionMode: complete as well
          isLoading={
            showLoading &&
            (isOpen || menuTrigger === 'manual' || loadingState === 'loading')
          }
          loadingIndicator={loadingState != null && loadingCircle}
          disableFocusRing
        />
        <PressResponder preventFocusOnPress isPressed={isOpen}>
          <FieldButton
            {...triggerProps}
            ref={triggerRef}
            className={classNames('ac-field-button')}
            isQuiet={isQuiet}
            validationState={validationState}
          >
            <Icon
              className="ac-combobox__dropdown-icon"
              svg={<ArrowIosDownwardOutline />}
            />
          </FieldButton>
        </PressResponder>
      </div>
    </FocusRing>
  );
});

/**
 * ComboBoxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.
 */
const _ComboBox = React.forwardRef(ComboBox) as <T>(
  props: ACComboBoxProps<T> & { ref?: FocusableRef<HTMLElement> }
) => ReactElement;
export { _ComboBox as ComboBox };
