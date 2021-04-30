import React, { ReactNode, SyntheticEvent } from 'react';
// import { FocusableRef } from '@react-types/shared';
import { useRadio } from '@react-aria/radio';
import { useRadioProvider } from './context';
import { Icon } from '../icon';
import { RadioButtonOff, RadioButtonOnFill } from './icons';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useFocusRing } from '@react-aria/focus';
import { radioCSS, radioButtonIconCSS, radioChildrenCSS } from './styles';
// import { useFocusableRef } from '@react-spectrum/utils';

import { Text } from '..';

export type RadioProps = {
  /**
   * One or group of components that will sit under the radio option
   */
  children?: ReactNode;
  /**
   * The value of what's currently selected i.e. `cats-adoption`
   */
  value: string;
  /**
   * The actual text to be displayed `Cats For Adoptions`
   */
  label: string;
  /**
   * Additional functionality after the select
   */
  onClick?: (e: SyntheticEvent<HTMLInputElement>) => void;
  /**
   * If this specific radio option is disabled
   * Overrides the disabled value coming from the parent component's status
   */
  isDisabled?: boolean;
  noPadding?: boolean;
};

function Radio(props: RadioProps) {
  const state = useRadioProvider();
  const {
    children,
    value,
    noPadding,
    label,
    onClick,
    isDisabled = state.isDisabled,
  } = props;

  const inputRef = React.useRef(null);
  const { inputProps } = useRadio(props, state, inputRef);
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
            aria-label={value}
            {...inputProps}
            {...focusProps}
            onChange={e => {
              state.setSelectedValue(props.value);
              onClick && onClick(e);
            }}
            value={value}
            ref={inputRef}
          />
        </VisuallyHidden>
        <Icon
          svg={currentRadioButton}
          css={radioButtonIconCSS({
            isDisabled,
            isFocusVisible,
          })}
          aria-label={value}
          aria-hidden={true}
        />
        <Text textSize="medium" color={isDisabled ? 'white30' : 'white90'}>
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
