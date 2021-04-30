import { useRadioGroupState } from '@react-stately/radio';
import { useRadioGroup } from '@react-aria/radio';
import { useId } from '@react-aria/utils';
import { radioGroupCSS, radioGroupLabelCSS } from './styles';
import { Text } from '..';

import React, { ReactNode } from 'react';

import { RadioContext } from './context';

export interface RadioGroupProps {
  children: ReactNode;
  label?: string;
  defaultValue: string;
}

function RadioGroup(props: RadioGroupProps) {
  const { children, label } = props;
  const labeledById = useId();

  const state = useRadioGroupState(props);

  const { radioGroupProps, labelProps, ...rest } = useRadioGroup(
    { ...props, 'aria-labelledby': labeledById },
    state
  );

  console.log('state', state);
  console.log('radioGroupProps', radioGroupProps);
  console.log('labelProps', labelProps);
  console.log('rest', rest);

  return (
    <div
      role="radiogroup"
      css={radioGroupCSS(state)}
      {...radioGroupProps}
      className="ac-radio-group"
      {...labelProps}
    >
      {label && (
        <Text textSize="large" css={radioGroupLabelCSS} id={labeledById}>
          {label}
        </Text>
      )}
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </div>
  );
}

export { RadioGroup };
