import { clamp } from '@react-aria/utils';
import React, { ReactNode } from 'react';
import { classNames } from '../utils';
import { FocusableRef } from '../types';
import { ACSliderProps } from '../types/slider';
import {
  SliderBase,
  SliderBaseChildArguments,
  SliderBaseProps,
} from './SliderBase';
import { SliderThumb } from './SliderThumb';

function Slider(props: ACSliderProps, ref: FocusableRef<HTMLDivElement>) {
  let {
    onChange,
    onChangeEnd,
    value,
    defaultValue,
    isFilled,
    fillOffset,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    trackGradient,
    getValueLabel,
    ...otherProps
  } = props;

  const baseProps: Omit<SliderBaseProps, 'children'> = {
    ...otherProps,
    // Normalize `value: number[]` to `value: number`
    value: value != null ? [value] : undefined,
    defaultValue: defaultValue != null ? [defaultValue] : undefined,
    onChange: (v: number[]): void => {
      onChange?.(v[0]);
    },
    onChangeEnd: (v: number[]): void => {
      onChangeEnd?.(v[0]);
    },

    getValueLabel:
      typeof getValueLabel === 'function'
        ? // @ts-ignore
          ([v]) => getValueLabel(v)
        : undefined,
  };

  return (
    <SliderBase {...baseProps} ref={ref}>
      {({ trackRef, inputRef, state }: SliderBaseChildArguments) => {
        fillOffset =
          fillOffset != null
            ? clamp(
                fillOffset,
                state.getThumbMinValue(0),
                state.getThumbMaxValue(0)
              )
            : fillOffset;

        const lowerTrack = (
          <div
            className={classNames('ac-slider-track')}
            style={{
              width: `${state.getThumbPercent(0) * 100}%`,
              // TODO not sure if it has advantages, but this could also be implemented as CSS calc():
              // .track::before {
              //    background-size: calc((1/ (var(--width)/100)) * 100%);
              //    width: calc(var(--width) * 1%)M
              // }
              // @ts-ignore
              '--ac-track-background-size': `${(1 / state.getThumbPercent(0)) *
                100}%`,
            }}
          />
        );
        const upperTrack = (
          <div
            className="ac-slider-track"
            style={{
              width: `${(1 - state.getThumbPercent(0)) * 100}%`,
              // @ts-ignore
              '--ac-track-background-size': `${(1 /
                (1 - state.getThumbPercent(0))) *
                100}%`,
              '--ac-track-background-position': '100%',
            }}
          />
        );

        let filledTrack: ReactNode = null;
        if (isFilled && fillOffset != null) {
          const width =
            state.getThumbPercent(0) - state.getValuePercent(fillOffset);
          const isRightOfOffset = width > 0;
          const offset = isRightOfOffset
            ? state.getValuePercent(fillOffset)
            : state.getThumbPercent(0);
          filledTrack = (
            <div
              className="ac-slider-fill"
              style={{
                left: `${offset * 100}%`,
                width: `${Math.abs(width) * 100}%`,
              }}
            />
          );
        }

        return (
          <>
            {lowerTrack}
            <SliderThumb
              index={0}
              isDisabled={props.isDisabled}
              trackRef={trackRef}
              inputRef={inputRef}
              state={state}
              name={props.name}
            />
            {filledTrack}
            {upperTrack}
          </>
        );
      }}
    </SliderBase>
  );
}

/**
 * Sliders allow users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable.
 */
const _Slider = React.forwardRef(Slider);
export { _Slider as Slider };
