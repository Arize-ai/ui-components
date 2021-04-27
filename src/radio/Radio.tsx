import React, { ReactNode, SyntheticEvent } from 'react';
import { useRadio } from '@react-aria/radio';
import { RadioContext } from './context';
import { Icon } from '../icon';
import { RadioButtonOff, RadioButtonOnFill } from './icons';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useFocusRing } from '@react-aria/focus';
import { radioCSS, radioButtonIconCSS, radioChildrenCSS } from './styles';
import { Text } from '..';

export type RadioProps = {
  children?: ReactNode;
  value: string;
  noPadding?: boolean;
  label: string;
  onClick?: (e: SyntheticEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
};

function Radio(props: RadioProps) {
  const state = React.useContext(RadioContext);
  const {
    children,
    value,
    noPadding,
    label,
    onClick,
    isDisabled = state.isDisabled,
  } = props;

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
        aria-disabled={isDisabled}
        css={radioCSS({
          isDisabled,
          noPadding,
        })}
        aria-label={value}
        className="ac-radio"
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
            isDisabled,
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
              React.cloneElement(child, { isDisabled })
          )}
        </div>
      )}
    </>
  );
}

export { Radio };
