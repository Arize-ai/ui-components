import React from 'react';
import { useLocale } from '@react-aria/i18n';
import { RangeSliderProps } from '../types/slider';
import { FocusableRef } from '../types';
import {
  SliderBase,
  SliderBaseChildArguments,
  SliderBaseProps,
} from './SliderBase';
import { SliderThumb } from './SliderThumb';

function RangeSlider(
  props: RangeSliderProps,
  ref: FocusableRef<HTMLDivElement>
) {
  const {
    onChange,
    onChangeEnd,
    value,
    defaultValue,
    getValueLabel,
    ...otherProps
  } = props;

  const baseProps: Omit<SliderBaseProps<number[]>, 'children'> = {
    ...otherProps,
    value: value != null ? [value.start, value.end] : undefined,
    defaultValue:
      defaultValue != null
        ? [defaultValue.start, defaultValue.end]
        : // make sure that useSliderState knows we have two handles
          [props.minValue ?? 0, props.maxValue ?? 100],
    onChange(v) {
      onChange?.({ start: v[0], end: v[1] });
    },
    onChangeEnd(v) {
      onChangeEnd?.({ start: v[0], end: v[1] });
    },
    getValueLabel: getValueLabel
      ? ([start, end]) => getValueLabel({ start, end })
      : undefined,
  };

  const { direction } = useLocale();

  return (
    <SliderBase {...baseProps} classes={'ac-slider--range'} ref={ref}>
      {({ trackRef, inputRef, state }: SliderBaseChildArguments) => {
        const cssDirection = direction === 'rtl' ? 'right' : 'left';
        return (
          <>
            <div
              className={'ac-slider-track'}
              style={{ width: `${state.getThumbPercent(0) * 100}%` }}
            />
            <SliderThumb
              index={0}
              aria-label={'minimum'}
              isDisabled={props.isDisabled}
              trackRef={trackRef}
              inputRef={inputRef}
              state={state}
            />
            <div
              className={'ac-slider-track'}
              style={{
                [cssDirection]: `${state.getThumbPercent(0) * 100}%`,
                width: `${Math.abs(
                  state.getThumbPercent(0) - state.getThumbPercent(1)
                ) * 100}%`,
              }}
            />
            <SliderThumb
              index={1}
              aria-label={'maximum'}
              isDisabled={props.isDisabled}
              trackRef={trackRef}
              state={state}
            />
            <div
              className={'ac-slider-track'}
              style={{
                width: `${(1 - state.getThumbPercent(1)) * 100}%`,
              }}
            />
          </>
        );
      }}
    </SliderBase>
  );
}

/**
 * RangeSliders allow users to quickly select a subset range. They should be used when the upper and lower bounds to the range are invariable.
 */
const _RangeSlider = React.forwardRef(RangeSlider);
export { _RangeSlider as RangeSlider };
