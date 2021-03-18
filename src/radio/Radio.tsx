import React, { ReactNode } from 'react';
import theme from '../theme';
import { useRadio } from '@react-aria/radio';
import { RadioContext } from './context';
import { css } from '@emotion/core';

const container = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
`;

const labelText = css`
  color: ${theme.colors.text1};
  font-size: ${theme.fontSizes.small};

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 4px;
`;

export type RadioProps = {
  children: ReactNode | string;
  value: string;
};

function Radio(props: RadioProps) {
  let { children, value } = props;
  let state = React.useContext(RadioContext);
  let ref = React.useRef(null);
  let { inputProps } = useRadio(props, state, ref);

  return (
    <span css={container}>
      <label css={labelText} style={{ display: 'block' }}>
        <input {...inputProps} value={value} ref={ref} />
        {children}
      </label>
    </span>
  );
}

export { Radio };
