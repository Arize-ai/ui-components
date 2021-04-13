import { useRadioGroupState } from '@react-stately/radio';
import { useRadioGroup } from '@react-aria/radio';
import { useId } from '@react-aria/utils';

import React, { ReactNode, HTMLAttributes } from 'react';

import { RadioContext } from './context';
import { radioGroupCSS } from './styles';
export interface RadioGroupProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  label?: string;
}

function RadioGroup(props: RadioGroupProps) {
  const { children, label } = props;
  const labeledById = useId();

  const state = useRadioGroupState({ label });

  const { radioGroupProps, labelProps } = useRadioGroup(
    { label, 'aria-labelledby': labeledById },
    state
  );

  return (
    <div role="radiogroup" css={radioGroupCSS(state)} {...radioGroupProps}>
      <span id={labeledById} {...labelProps}>
        {label}
      </span>
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </div>
  );
}

export { RadioGroup };
