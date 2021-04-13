import React, { ReactNode } from 'react';
import theme from '../theme';
import { useRadio } from '@react-aria/radio';
import { RadioContext } from './context';
import { css } from '@emotion/core';
import { RadioButtonOff, RadioButtonOnFill } from '../icon/Icons';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useFocusRing } from '@react-aria/focus';

const labelTextCSS = ({
  isFocusVisible = false,
  isDisabled = false,
}: {
  isFocusVisible?: boolean;
  isDisabled?: boolean;
}) => css`
  display: flex;
  color: ${isDisabled ? theme.colors.disabled : theme.colors.text1};
  font-size: ${theme.typography.sizes.small.fontSize}px;
  line-height: ${theme.typography.sizes.small.lineHeight}px;
  svg {
    fill: ${isDisabled ? theme.colors.disabled : theme.colors.text1};
    margin-right: ${theme.spacing.padding8}px;
    height: 16px;
    width: 16px;
    ${isFocusVisible && `outline: 2px solid -webkit-focus-ring-color;`}
  }
  align-items: center;
  cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
`;

export type RadioProps = {
  children: ReactNode | string;
  value: string;
};

function Radio(props: RadioProps) {
  const { children, value } = props;
  const state = React.useContext(RadioContext);
  const ref = React.useRef(null);
  const { inputProps } = useRadio(props, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();
  const isSelected = state.selectedValue === props.value;

  return (
    <label
      aria-disabled={inputProps.disabled}
      css={labelTextCSS({ isFocusVisible, isDisabled: inputProps.disabled })}
      aria-label={value}
    >
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} value={value} ref={ref} />
      </VisuallyHidden>
      {isSelected ? <RadioButtonOnFill /> : <RadioButtonOff />}
      {children}
    </label>
  );
}

export { Radio };
