import React, { isValidElement, ReactNode } from 'react';
import { useRadioGroupState } from '@react-stately/radio';
import { useRadioGroup } from '@react-aria/radio';
import { useId } from '@react-aria/utils';
import { radioGroupCSS, radioGroupLabelCSS } from './styles';
import { Text } from '../content';
import { RadioContext } from './context';
import { RadioVariant } from './types';
import { classNames } from '../utils';

export interface RadioGroupProps {
  /**
   * @default 'default'
   */
  variant?: RadioVariant;
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
  const { children, label, variant } = props;
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
      className={classNames('ac-radio-group', `ac-radio-group--${variant}`)}
      {...labelProps}
    >
      {label && (
        <Text css={radioGroupLabelCSS} id={labeledById} elementType="p">
          {label}
        </Text>
      )}
      <RadioContext.Provider value={state}>
        {children &&
          React.Children.map(children, child => {
            if (isValidElement(child)) {
              return React.cloneElement(child, { variant });
            }
            return null;
          })}
      </RadioContext.Provider>
    </div>
  );
}

export { RadioGroup };
