import React from 'react';
import { RadioGroupState } from '@react-stately/radio';

interface RadioGroupContext {
  isEmphasized?: boolean;
  name?: string;
  validationState?: 'valid' | 'invalid';
  state: RadioGroupState;
}

const RadioContext = React.createContext<RadioGroupContext | null>(null);

export function useRadioProvider() {
  return React.useContext(RadioContext);
}

export { RadioContext };
