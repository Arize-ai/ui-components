import { useRadioGroupState } from '@react-stately/radio';
import { useRadioGroup } from '@react-aria/radio';
import { css } from '@emotion/core';
import theme from '../theme';
import { useId } from '@react-aria/utils';

import React, { ReactNode } from 'react';

import { RadioContext } from './context';
const containerCSS = css`
  color: ${theme.colors.text1};
`;
export interface RadioGroupProps {
  children: ReactNode;
  label?: string;
}

function RadioGroup(props: RadioGroupProps) {
  const { children, label } = props;
  const state = useRadioGroupState(props);

  const labeledById = useId();
  const { radioGroupProps, labelProps } = useRadioGroup(
    { ...props, 'aria-labelledby': labeledById },
    state
  );

  return (
    <div role="radiogroup" css={containerCSS} {...radioGroupProps}>
      <span id={labeledById} {...labelProps}>
        {label}
      </span>
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </div>
  );
}

export { RadioGroup };
