import React, { ReactNode } from 'react';
import theme from '../theme';
import { useRadio } from '@react-aria/radio';
import { RadioContext } from './context';
import { css } from '@emotion/core';
import Icon from '../src/Icon';

const containerCSS = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const labelTextCSS = css`
  color: ${theme.colors.text1};
  font-size: ${theme.fontSizes.small};
  display: flex;
  align-items: center;
`;

export type RadioProps = {
  children: ReactNode | string;
  value: string;
};

function Radio(props: RadioProps) {
  const { children, value } = props;
  const state = React.useContext<RadioContextType>(RadioContext);
  const ref = React.useRef<HTMLInputElement>(null);
  const { inputProps } = useRadio(props, state, ref);

  return (
    <label css={labelTextCSS} style={{ display: 'block' }}>
      <input {...inputProps} value={value} ref={ref} />
      <span> </span>
      {children}
    </label>
  );
}

export { Radio };
