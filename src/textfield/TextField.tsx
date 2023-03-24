import React, { forwardRef, RefObject, useRef } from 'react';
import {
  TextFieldBase,
  AriaTextFieldProps,
  TextFieldRef,
} from './TextFieldBase';
import { useTextField } from '@react-aria/textfield';
import { AddonableProps, StyleProps } from '../types';
import { useProviderProps } from '../provider';

export interface TextFieldProps
  extends AriaTextFieldProps,
    AddonableProps,
    StyleProps {
  /**
   * Whether the input is nested within another input composite component
   * @private
   * @default false
   */
  isNested?: boolean;
}

function TextField(props: TextFieldProps, ref: RefObject<TextFieldRef>) {
  // Call use provider props so the textfield can inherit from the provider
  // E.x. disabled, readOnly, etc.
  props = useProviderProps(props);
  let inputRef = useRef<HTMLInputElement>(null);
  let {
    labelProps,
    inputProps,
    descriptionProps,
    errorMessageProps,
  } = useTextField(props, inputRef);
  return (
    <TextFieldBase
      {...props}
      labelProps={labelProps}
      inputProps={inputProps}
      descriptionProps={descriptionProps}
      errorMessageProps={errorMessageProps}
      ref={ref}
      inputRef={inputRef}
    />
  );
}

/**
 * TextFields are text inputs that allow users to input custom text entries
 * with a keyboard. Various decorations can be displayed around the field to
 * communicate the entry requirements.
 */
// @ts-ignore
const _TextField = forwardRef(TextField);
export { _TextField as TextField };
