import React, { ReactNode, SyntheticEvent } from 'react';
import { useRadio } from '@react-aria/radio';
import { useRadioProvider } from './context';
import { Icon } from '../icon';
import { RadioButtonOff, RadioButtonOnFill } from './icons';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useFocusRing } from '@react-aria/focus';
import {
  radioCSS,
  radioButtonIconCSS,
  radioChildrenCSS,
  defaultRadioCSS,
  selectorRadioCSS,
} from './styles';
import { useId } from '@react-aria/utils';
import { Text } from '../content';

export type RadioProps = {
  /**
   * @default default
   */
  variant?: 'default' | 'selector';
  /**
   * For the "default" variant, this is one or group of
   * components that will sit under the radio option
   *
   * For the "selector" variant, this is the content of the radio itself
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
  onClick?: (e?: SyntheticEvent<HTMLInputElement>) => void;
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
    variant = 'default',
    children,
    value,
    noPadding,
    label,
    onClick,
    isDisabled = state.isDisabled,
  } = props;

  const inputRef = React.useRef(null);
  const labeledById = useId();

  const { inputProps } = useRadio(
    { ...props, 'aria-labelledby': labeledById },
    state,
    inputRef
  );
  const { isFocusVisible, focusProps } = useFocusRing();
  const isSelected = state.selectedValue === props.value;

  const currentRadioButton = isSelected ? (
    <RadioButtonOnFill />
  ) : (
    <RadioButtonOff />
  );

  const handleOnChangeLabel = () => {
    if (!isDisabled) {
      state.setSelectedValue(props.value);
      onClick && onClick();
    }
  };

  const handleOnChange = (e: SyntheticEvent<HTMLInputElement>) => {
    if (!isDisabled) {
      state.setSelectedValue(props.value);
      onClick && onClick(e);
    }
  };

  const radioChildren = children
    ? React.Children.map(
        props.children,
        child =>
          child &&
          // @ts-ignore
          React.cloneElement(child, { isDisabled })
      )
    : null;

  return (
    <label
      aria-disabled={isDisabled}
      css={radioCSS({
        isDisabled,
        noPadding,
      })}
      aria-label={value}
      className="ac-radio"
      {...focusProps}
      onClick={handleOnChangeLabel}
    >
      <>
        <VisuallyHidden>
          <input
            aria-label={value}
            {...inputProps}
            onChange={handleOnChange}
            value={value}
            ref={inputRef}
          />
        </VisuallyHidden>
        {variant === 'default' ? (
          <div css={defaultRadioCSS} className="ac-radio--variant-default">
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
          </div>
        ) : (
          <>
            {children && (
              <div
                className="ac-radio--variant-selector"
                css={selectorRadioCSS({
                  isDisabled,
                  isSelected,
                })}
                aria-label={value}
                aria-hidden={true}
              >
                {radioChildren}
              </div>
            )}
          </>
        )}
      </>
      {variant === 'default' && children && (
        <div css={radioChildrenCSS} className="ac-radio--children">
          {radioChildren}
        </div>
      )}
    </label>
  );
}

export { Radio };
