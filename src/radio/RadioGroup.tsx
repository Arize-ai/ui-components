import { useRadioGroupState } from '@react-stately/radio';
import { useRadioGroup } from '@react-aria/radio';
import { css } from '@emotion/core';
import theme from '../theme';

import React, { ReactNode } from 'react';

import { RadioContext } from './context';
const container = css`
  color: ${theme.colors.text1};
`;

export interface RadioGroupProps {
  children: ReactNode;
  label?: string;
}

function RadioGroup(props: RadioGroupProps) {
  let { children, label } = props;
  let state = useRadioGroupState(props);
  let { radioGroupProps, labelProps } = useRadioGroup(props, state);

  return (
    <div css={container} {...radioGroupProps}>
      <span {...labelProps}>{label}</span>
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </div>
  );
}

export { RadioGroup };
