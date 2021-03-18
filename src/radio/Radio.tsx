import React, { ReactNode } from 'react';
import { useRadio } from '@react-aria/radio';
import { RadioContext } from './context';
import { RadioButtonOff, RadioButtonOnFill, Icon } from '../icon';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useFocusRing } from '@react-aria/focus';
import { radioCSS, radioButtonIconCSS, radioChildrenCSS } from './styles';
import { Text } from '..';

export type RadioProps = {
  children?: ReactNode | string;
  value: string;
  noPadding?: boolean;
  label: string;
  onClick?: () => void;
};

function Radio(props: RadioProps) {
  const { children, value, noPadding, label, onClick } = props;
  const state = React.useContext(RadioContext);
  const ref = React.useRef(null);
  const { inputProps } = useRadio(props, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();
  const isSelected = state.selectedValue === props.value;
  const currentRadioButton = isSelected ? (
    <RadioButtonOnFill />
  ) : (
    <RadioButtonOff />
  );

  return (
    <>
      <label
        aria-disabled={state.isDisabled}
        css={radioCSS({
          isDisabled: state.isDisabled,
          noPadding,
        })}
        aria-label={value}
      >
        <VisuallyHidden>
          <input
            {...inputProps}
            {...focusProps}
            onClick={onClick}
            value={value}
            ref={ref}
          />
        </VisuallyHidden>
        <Icon
          svg={currentRadioButton}
          css={radioButtonIconCSS({
            isDisabled: state.isDisabled,
            isFocusVisible,
          })}
          aria-hidden={true}
        />
        <Text textSize="medium" color="white70">
          {label}
        </Text>
      </label>
      {children && (
        <div css={radioChildrenCSS}>
          {React.Children.map(
            props.children,
            child =>
              child &&
              // @ts-ignore
              React.cloneElement(child, { isDisabled: state.isDisabled })
          )}
        </div>
      )}
    </>
  );
}

export { Radio };
