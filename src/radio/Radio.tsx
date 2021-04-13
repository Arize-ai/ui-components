import React, { ReactNode } from 'react';
import { useRadio } from '@react-aria/radio';
import { RadioContext } from './context';
import { RadioButtonOff, RadioButtonOnFill } from '../icon/Icons';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useFocusRing } from '@react-aria/focus';
import { radioCSS } from './styles';

export type RadioProps = {
  children: ReactNode | string;
  value: string;
};

function Radio(props: RadioProps) {
  const { children, value } = props;
  const state = React.useContext(RadioContext);
  const ref = React.useRef(null);
  const { inputProps } = useRadio(props, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();
  const isSelected = state.selectedValue === props.value;

  return (
    <label
      aria-disabled={inputProps.disabled}
      css={radioCSS({ isFocusVisible, isDisabled: inputProps.disabled })}
      aria-label={value}
    >
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} value={value} ref={ref} />
      </VisuallyHidden>
      {isSelected ? <RadioButtonOnFill /> : <RadioButtonOff />}
      {children}
    </label>
  );
}

export { Radio };
