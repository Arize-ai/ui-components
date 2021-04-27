import { useRadioGroupState } from '@react-stately/radio';
import { useRadioGroup } from '@react-aria/radio';
import { useId } from '@react-aria/utils';
import { radioGroupCSS, radioGroupLabelCSS } from './styles';

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

  const { radioGroupProps, labelProps } = useRadioGroup(
    { ...props, 'aria-labelledby': labeledById },
    state
  );

  return (
    <div role="radiogroup" css={radioGroupCSS(state)} {...radioGroupProps}>
      <span css={radioGroupLabelCSS} id={labeledById} {...labelProps}>
        {label}
      </span>
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </div>
  );
}

export { RadioGroup };
