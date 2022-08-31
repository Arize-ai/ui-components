import React, { RefObject, useCallback, useRef } from 'react';
import {
  TextFieldBase,
  AriaTextFieldProps,
  TextFieldRef,
} from './TextFieldBase';
import { useTextField } from '@react-aria/textfield';
import { chain, useLayoutEffect } from '@react-aria/utils';
import { useControlledState } from '@react-stately/utils';
import { useProviderProps } from '../provider';
import { AddonableProps } from '../types';

export interface TextAreaProps extends AriaTextFieldProps, AddonableProps {
  className?: string;
  variant?: 'default' | 'quiet';
  /** The height of the text area */
  height?: number;
}
function TextArea(props: TextAreaProps, ref: RefObject<TextFieldRef>) {
  props = useProviderProps(props);
  let {
    isDisabled = false,
    isReadOnly = false,
    isRequired = false,
    onChange,
    height,
    ...otherProps
  } = props;

  // not in stately because this is so we know when to re-measure, which is a spectrum design
  let [inputValue, setInputValue] = useControlledState(
    props.value,
    props.defaultValue,
    () => {}
  );
  let inputRef = useRef<HTMLTextAreaElement>();

  let onHeightChange = useCallback(() => {
    // Quiet textareas always grow based on their text content.
    // Standard textareas also grow by default, unless an explicit height is set.
    let input = inputRef.current;

    if (input && !height) {
      let prevAlignment = input.style.alignSelf;
      let prevOverflow = input.style.overflow;
      // Firefox scroll position is lost when overflow: 'hidden' is applied so we skip applying it.
      // The measure/applied height is also incorrect/reset if we turn on and off
      // overflow: hidden in Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1787062
      let isFirefox = 'MozAppearance' in input.style;
      if (!isFirefox) {
        input.style.overflow = 'hidden';
      }
      input.style.alignSelf = 'start';
      input.style.height = 'auto';
      // offsetHeight - clientHeight accounts for the border/padding.
      input.style.height = `${input.scrollHeight +
        (input.offsetHeight - input.clientHeight)}px`;
      input.style.overflow = prevOverflow;
      input.style.alignSelf = prevAlignment;
    }
  }, [inputRef, height]);

  useLayoutEffect(() => {
    if (inputRef.current) {
      onHeightChange();
    }
  }, [onHeightChange, inputValue, inputRef]);

  let {
    labelProps,
    inputProps,
    descriptionProps,
    errorMessageProps,
  } = useTextField(
    {
      ...props,
      onChange: chain(onChange, setInputValue),
      inputElementType: 'textarea',
    },
    // @ts-ignore
    inputRef
  );

  return (
    <TextFieldBase
      {...otherProps}
      ref={ref}
      labelProps={labelProps}
      inputProps={inputProps}
      descriptionProps={descriptionProps}
      errorMessageProps={errorMessageProps}
      multiLine
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      height={height}
      // @ts-ignore
      inputRef={inputRef}
    />
  );
}

/**
 * TextAreas are multiline text inputs, useful for cases where users have
 * a sizable amount of text to enter. They allow for all customizations that
 * are available to text fields.
 */
// @ts-ignore
let _TextArea = React.forwardRef(TextArea);
export { _TextArea as TextArea };
