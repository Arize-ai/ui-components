import { css, keyframes } from '@emotion/react';
import { classNames, createFocusableRef } from '../utils';
import { Field } from '../field';
import { FocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { PressEvents, StyleProps } from '@react-types/shared';
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

const appearKeyframes = keyframes`
    0% {  opacity: 0; }
    100% { opacity: 1; }
`;

interface TextFieldProps
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
    PressEvents,
    StyleProps {
  wrapperChildren?: ReactElement | ReactElement[];
  inputClassName?: string;
  validationIconClassName?: string;
  multiLine?: boolean;
  /**
   * Whether the input is nested within another input composite component
   * @default false
   */
  isNested?: boolean;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  inputProps:
    | InputHTMLAttributes<HTMLInputElement>
    | TextareaHTMLAttributes<HTMLTextAreaElement>;
  descriptionProps?: HTMLAttributes<HTMLElement>;
  errorMessageProps?: HTMLAttributes<HTMLElement>;
  inputRef?: RefObject<HTMLInputElement | HTMLTextAreaElement>;
  loadingIndicator?: ReactElement;
  isLoading?: boolean;
  className?: string;
  /** Whether the input should be displayed with a quiet style. */
  isQuiet?: boolean;
}

const textFieldBaseCSS = (height?: number) => css`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  min-width: 270px;
  width: 100%;

  transition: all 0.2s ease-in-out;
  overflow: hidden;
  font-size: ${theme.typography.sizes.medium.fontSize}px;
  box-sizing: border-box;
  --ac-textfield-border-color: ${theme.components.textField.borderColor};
  border-bottom: 1px solid
    var(--ac-field-border-color-override, var(--ac-textfield-border-color));

  &.ac-textfield--quiet {
    border-top: 1px solid transparent;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    &.is-hovered:not(.is-disabled) {
      border-bottom: 1px solid ${theme.components.textField.hoverBorderColor};
    }
    &.is-focused:not(.is-disabled) {
      border-bottom: 1px solid ${theme.components.textField.activeBorderColor};

      &.ac-textfield--invalid {
        border-bottom: 1px solid ${theme.colors.statusDanger};
      }
    }
    &.is-disabled {
      border-bottom: 1px solid ${theme.colors.lightGrayBorder};
      opacity: ${theme.opacity.disabled};
      .ac-textfield__input {
        color: ${theme.textColors.white50};
      }
    }
  }
  // The default style for the textfield
  &:not(.ac-textfield--quiet) {
    background-color: ${theme.components.textField.backgroundColor};
    border-radius: ${theme.borderRadius.medium}px;
    border-top: 1px solid
      var(--ac-field-border-color-override, var(--ac-textfield-border-color));
    border-left: 1px solid
      var(--ac-field-border-color-override, var(--ac-textfield-border-color));
    border-right: 1px solid
      var(--ac-field-border-color-override, var(--ac-textfield-border-color));
    &.is-hovered:not(.is-disabled) {
      border: 1px solid ${theme.components.textField.hoverBorderColor};
      background-color: ${theme.components.textField.activeBackgroundColor};
    }
    &.is-focused:not(.is-disabled) {
      border: 1px solid ${theme.components.textField.activeBorderColor};
      background-color: ${theme.components.textField.activeBackgroundColor};
      &.ac-textfield--invalid {
        border: 1px solid ${theme.colors.statusDanger};
      }
    }
    &.is-disabled {
      border: 1px solid ${theme.colors.lightGrayBorder};
      background-color: ${theme.components.textField.backgroundColor};
      opacity: ${theme.opacity.disabled};
      .ac-textfield__input {
        color: ${theme.textColors.white50};
      }
    }
    .ac-textfield__input {
      padding: ${theme.spacing.padding4}px ${theme.spacing.padding8}px;
    }
  }

  .ac-textfield__input::placeholder {
    color: ${theme.textColors.white30};
    font-style: italic;
  }
  .ac-textfield__input {
    flex: 1 1 auto;
    box-sizing: border-box;
    background-color: transparent;
    color: ${theme.textColors.white90};
    height: ${height ?? theme.singleLineHeight}px;
    transition: all 0.2s ease-in-out;
    /** provide an alternate highlight */
    outline: none;
    border: none;
  }

  &.ac-textfield--multiline {
    height: ${height ?? theme.singleLineHeight}px;
    ${height && `padding-top: ${theme.spacing.padding4}px;`}

    textarea {
      resize: none;
      overflow-y: scroll;
    }
  }

  &.ac-textfield--invalid {
    color: ${theme.colors.statusDanger};
    border: 1px solid ${theme.colors.statusDanger};
    .ac-textfield__input {
      // Make room for the invalid icon (outer padding + icon width + inner padding)
      padding-right: ${theme.spacing.padding8 + 24 + theme.spacing.padding4}px;
    }
  }
  .ac-textfield__validation-icon {
    /* Animate in the icon */
    animation: ${appearKeyframes} ${0.2}s forwards ease-in-out;
    top: ${theme.spacing.padding8}px;
    right: ${theme.spacing.padding8}px;
    position: absolute;
    &.ac-textfield__validation-icon--invalid {
      color: ${theme.colors.statusDanger};
    }
  }
  /* Style for type=search */
  input[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='rgba(255,255,255, 0.7)'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>");
    cursor: pointer;
  }

  &.ac-textfield--nested {
    border: none;
  }
`;

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
    isQuiet = false,
    isDisabled,
    isNested,
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
    className,
    height,
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

  const validation = (
    <Icon
      key="validation-icon"
      className={`ac-textfield__validation-icon ac-textfield__validation-icon--${validationState}`}
      svg={<AlertCircleOutline />}
    />
  );

  let textField = (
    <div
      className={classNames('ac-textfield', {
        'ac-textfield--quiet': isQuiet,
        'ac-textfield--nested': isNested,
        'ac-textfield--invalid': isInvalid,
        'ac-textfield--valid': validationState === 'valid',
        'ac-textfield--loadable': loadingIndicator,
        'ac-textfield--multiline': multiLine,
        'is-hovered': isHovered,
        'is-focused': isFocused,
        'is-disabled': isDisabled,
        'is-readonly': isReadOnly,
      })}
      css={textFieldBaseCSS(height as number)}
    >
      {addonBefore != null ? (
        <AddonBefore key="addon-before">{addonBefore}</AddonBefore>
      ) : null}
      <FocusRing
        focusRingClass={'focus-ring'}
        isTextInput
        autoFocus={autoFocus}
      >
        <ElementType
          key="element"
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
      {validationState && validationState === 'invalid' && !isLoading
        ? validation
        : null}
      {isLoading && loadingIndicator}
      {wrapperChildren}
    </div>
  );

  if (label) {
    textField = React.cloneElement(
      textField,
      mergeProps(textField.props, {
        className: multiLine ? 'ac-textfield--multiline' : '',
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
      wrapperClassName={className}
    >
      {textField}
    </Field>
  );
}

const _TextFieldBase = forwardRef(TextFieldBase);
export { _TextFieldBase as TextFieldBase };
