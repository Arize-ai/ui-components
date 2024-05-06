import React, { isValidElement, ReactElement, ReactNode } from 'react';
import { useRadioGroupState } from '@react-stately/radio';
import { useRadioGroup } from '@react-aria/radio';
import { useId } from '@react-aria/utils';
import { Text } from '../content';
import { classNames } from '../utils';
import { radioGroupCSS, radioGroupLabelCSS } from './styles';
import { RadioContext } from './context';
import { RadioSize, RadioVariant } from './types';
import { RadioProps } from './Radio';

export interface RadioGroupProps {
  /**
   * @default 'default'
   */
  variant?: RadioVariant;
  /**
   * The size of the radio. Only relevant to `inline-button`
   * @default 'normal'
   */
  size?: RadioSize;
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
  const { children, label, variant, size = 'normal' } = props;
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
      <RadioContext.Provider value={{ state }}>
        {children &&
          React.Children.map(children, child => {
            if (isValidElement(child)) {
              return React.cloneElement(child as ReactElement<RadioProps>, {
                variant,
                size,
              });
            }
            return null;
          })}
      </RadioContext.Provider>
    </div>
  );
}

export { RadioGroup };
