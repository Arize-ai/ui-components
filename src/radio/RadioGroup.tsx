import { useRadioGroupState } from '@react-stately/radio';
import { useRadioGroup } from '@react-aria/radio';
import { useId } from '@react-aria/utils';
import { radioGroupCSS, radioGroupLabelCSS } from './styles';
import { Text } from '..';

import React, { ReactNode } from 'react';

import { RadioContext } from './context';

export interface RadioGroupProps {
  children: ReactNode;
  /**
   * (Optional) For labelling the radio options
   */
  label?: string;
  /**
   * Matches the `value` option of one of the Radio Children components
   */
  defaultValue: string;
  /**
   * On change handler that is triggered by the selectedValue state change.
   * `value` is the new selected value.
   */
  onChange?: (value: string) => void;
}

function RadioGroup(props: RadioGroupProps) {
  const { children, label } = props;
  const labeledById = useId();

  const state = useRadioGroupState(props);

  const { radioGroupProps, labelProps } = useRadioGroup(
    { ...props, 'aria-labelledby': labeledById },
    state
  );

  return (
    <div
      role="radiogroup"
      css={radioGroupCSS(state)}
      {...radioGroupProps}
      className="ac-radio-group"
      {...labelProps}
    >
      {label && (
        <Text css={radioGroupLabelCSS} id={labeledById} elementType="p">
          {label}
        </Text>
      )}
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </div>
  );
}

export { RadioGroup };
