// import AlertMedium from '@spectrum-icons/ui/AlertMedium';
// import CheckmarkMedium from '@spectrum-icons/ui/CheckmarkMedium';
import { css } from '@emotion/core';
import { classNames, createFocusableRef } from '../utils';
import { Field } from '../field';
import { FocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { PressEvents } from '@react-types/shared';
import { Icon, AlertCircleOutline } from '../icon';
import React, {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactElement,
  Ref,
  RefObject,
  TextareaHTMLAttributes,
  useImperativeHandle,
  useRef,
  forwardRef,
} from 'react';
import {
  InputBase,
  LabelableProps,
  ExtendableLabelProps,
  ValueBase,
  TextInputBase,
  FocusableProps,
  HelpTextProps,
  Validation,
  AriaLabelingProps,
  FocusableDOMProps,
  TextInputDOMProps,
  AriaValidationProps,
  FocusableRefValue,
  AddonableProps,
} from '../types';
import { AddonBefore } from '../field';
import { useHover } from '@react-aria/interactions';
import theme from '../theme';

export interface TextFieldProps
  extends InputBase,
    Validation,
    HelpTextProps,
    FocusableProps,
    TextInputBase,
    ValueBase<string>,
    LabelableProps,
    ExtendableLabelProps {}

/**
 * Extend the base interface with a11y props
 */

export interface AriaTextFieldProps
  extends TextFieldProps,
    AriaLabelingProps,
    FocusableDOMProps,
    TextInputDOMProps,
    AriaValidationProps {
  // https://www.w3.org/TR/wai-aria-1.2/#textbox
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  'aria-activedescendant'?: string;
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
   * presented if they are made.
   */
  'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  'aria-haspopup'?:
    | boolean
    | 'false'
    | 'true'
    | 'menu'
    | 'listbox'
    | 'tree'
    | 'grid'
    | 'dialog';
}

interface TextFieldBaseProps
  extends Omit<AriaTextFieldProps, 'onChange'>,
    AddonableProps,
    PressEvents {
  wrapperChildren?: ReactElement | ReactElement[];
  inputClassName?: string;
  validationIconClassName?: string;
  multiLine?: boolean;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  inputProps:
    | InputHTMLAttributes<HTMLInputElement>
    | TextareaHTMLAttributes<HTMLTextAreaElement>;
  descriptionProps?: HTMLAttributes<HTMLElement>;
  errorMessageProps?: HTMLAttributes<HTMLElement>;
  inputRef?: RefObject<HTMLInputElement | HTMLTextAreaElement>;
  loadingIndicator?: ReactElement;
  isLoading?: boolean;
}

export interface TextFieldRef
  extends FocusableRefValue<
    HTMLInputElement | HTMLTextAreaElement,
    HTMLDivElement
  > {
  select(): void;
  getInputElement(): HTMLInputElement | HTMLTextAreaElement;
}

function TextFieldBase(props: TextFieldBaseProps, ref: Ref<TextFieldRef>) {
  let {
    label,
    validationState,
    isDisabled,
    isReadOnly,
    multiLine,
    autoFocus,
    inputClassName,
    wrapperChildren,
    labelProps = {},
    inputProps,
    descriptionProps = {},
    errorMessageProps = {},
    inputRef,
    isLoading,
    loadingIndicator,
    addonBefore,
  } = props;
  let { hoverProps, isHovered } = useHover({ isDisabled });
  let [isFocused, setIsFocused] = React.useState(false);
  let domRef = useRef<HTMLDivElement>(null);
  let defaultInputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  inputRef = inputRef || defaultInputRef;

  // Expose imperative interface for ref
  useImperativeHandle(ref, () => ({
    ...createFocusableRef(domRef, inputRef),
    select() {
      if (inputRef?.current) {
        inputRef?.current.select();
      }
    },
    // @ts-ignore
    getInputElement() {
      return inputRef?.current;
    },
  }));

  let ElementType: React.ElementType = multiLine ? 'textarea' : 'input';
  let isInvalid = validationState === 'invalid';

  let validation = (
    <Icon
      className="ac-textfield__validation-icon"
      svg={<AlertCircleOutline />}
    />
  );

  let textField = (
    <div
      className={classNames('ac-textfield', {
        'ac-textfield--invalid': isInvalid,
        'ac-textfield--valid': validationState === 'valid',
        'ac-textfield--loadable': loadingIndicator,
        'ac-textfield--multiline': multiLine,
        'is-hovered': isHovered,
        'is-focused': isFocused,
        'is-disabled': isDisabled,
        'is-readonly': isReadOnly,
      })}
      css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        min-width: 250px;
        border: 1px solid ${theme.colors.lightGrayBorder};
        border-radius: ${theme.borderRadius.medium}px;
        background-color: ${theme.components.textField.backgroundColor};
        transition: all 0.2s ease-in-out;
        overflow: hidden;
        &.is-hovered[:not(.is-disabled)] {
          border: 1px solid ${theme.components.textField.hoverBorderColor};
          background-color: ${theme.components.textField.activeBackgroundColor};
        }
        &.is-focused {
          border: 1px solid ${theme.components.textField.activeBorderColor};
          background-color: ${theme.components.textField.activeBackgroundColor};
        }
        &.is-disabled,
        &.is-readonly {
          border: 1px solid ${theme.components.textField.backgroundColor};
          background-color: ${theme.components.textField.backgroundColor};
          .ac-textfield__input {
            color: ${theme.textColors.white70};
          }
        }
        .ac-textfield__input::placeholder {
          color: ${theme.textColors.white50};
          font-style: italic;
        }
        .ac-textfield__input {
          flex: 1 1 auto;
          box-sizing: border-box;
          background-color: transparent;
          color: ${theme.textColors.white90};
          height: ${theme.singleLineHeight}px;
          padding: ${theme.spacing.padding4}px ${theme.spacing.padding8}px;
          transition: all 0.2s ease-in-out;
          /** provide an alternate highlight */
          outline: none;
          border: none;
        }

        &.ac-textfield--invalid {
          color: ${theme.colors.statusDanger};
          border: 1px solid ${theme.colors.statusDanger};
        }
        .ac-textfield__validation-icon {
          color: inherit;
          flex: none;
          margin-right: ${theme.spacing.padding8}px;
        }
      `}
    >
      {addonBefore != null ? <AddonBefore>{addonBefore}</AddonBefore> : null}
      <FocusRing
        focusRingClass={'focus-ring'}
        isTextInput
        autoFocus={autoFocus}
      >
        <ElementType
          {...mergeProps(inputProps, hoverProps, {
            onFocus: () => {
              setIsFocused(true);
            },
            onBlur: () => setIsFocused(false),
          })}
          ref={inputRef as any}
          rows={multiLine ? 1 : undefined}
          className={classNames('ac-textfield__input', inputClassName)}
        />
      </FocusRing>
      {validationState && !isLoading ? validation : null}
      {isLoading && loadingIndicator}
      {wrapperChildren}
    </div>
  );

  if (label) {
    textField = React.cloneElement(
      textField,
      mergeProps(textField.props, {
        // TODO support muli-line text areas
        className: multiLine ? 'ac-field--multiline' : '',
      })
    );
  }

  return (
    <Field
      {...props}
      labelProps={labelProps}
      descriptionProps={descriptionProps}
      errorMessageProps={errorMessageProps}
      showErrorIcon={false}
      ref={domRef}
    >
      {textField}
    </Field>
  );
}

const _TextFieldBase = forwardRef(TextFieldBase);
export { _TextFieldBase as TextFieldBase };
