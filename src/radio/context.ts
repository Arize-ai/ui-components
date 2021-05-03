import React from 'react';
import { RadioGroupState } from '@react-stately/radio';

const RadioContext = React.createContext<RadioGroupState>({
  name: '',
  isDisabled: false,
  isReadOnly: false,
  selectedValue: null,
  setSelectedValue: () => {},
  lastFocusedValue: null,
  setLastFocusedValue: () => {},
});

export function useRadioProvider() {
  return React.useContext(RadioContext);
}

export { RadioContext };
