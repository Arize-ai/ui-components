import React, { ReactNode } from 'react';
import { useRadioGroupState } from '@react-stately/radio';
import { useRadioGroup } from '@react-aria/radio';
import { useId } from '@react-aria/utils';
import { radioGroupCSS, radioGroupLabelCSS } from './styles';
import { Text } from '../content';
import { RadioContext } from './context';

export interface RadioGroupProps {
  /**
   * (Optional) For the custom style of radio buttons
   */
  type?: 'default' | 'custom';
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
  const { children, label, type } = props;
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
      <RadioContext.Provider value={state}>
        {children &&
          React.Children.map(
            children,
            child =>
              child &&
              // @ts-ignore
              React.cloneElement(child, { type })
          )}
      </RadioContext.Provider>
    </div>
  );
}

export { RadioGroup };
