import { classNames, useFocusableRef } from '../utils';
import { FocusableRef } from '@react-types/shared';
import React, { CSSProperties, ReactNode, RefObject, useRef } from 'react';
import { SliderState, useSliderState } from '@react-stately/slider';
import { BarSliderBase } from '../types/slider';
import { useNumberFormatter } from '@react-aria/i18n';
import { useProviderProps } from '../provider';
import { useSlider } from '@react-aria/slider';
import { css } from '@emotion/react';
import theme from '../theme';

export interface SliderBaseChildArguments {
  inputRef: RefObject<HTMLInputElement>;
  trackRef: RefObject<HTMLElement>;
  state: SliderState;
}

export interface SliderBaseProps<T = number[]> extends BarSliderBase<T> {
  children: (opts: SliderBaseChildArguments) => ReactNode;
  classes?: string[] | Object;
  style?: CSSProperties;
}

const labelContainerCSS = css`
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'label contextualHelp value';
  justify-items: start;
  display: grid;
`;

const labelCSS = css`
  color: ${theme.textColors.white90};
`;

const sliderCSS = css`
  --ac-slider-handle-width: var(--ac-global-dimension-size-200);
  width: var(
    --ac-alias-single-line-width,
    var(--ac-global-dimension-size-2400)
  );
  flex-direction: column;
  display: inline-flex;

  .ac-slider-track {
    height: var(--ac-slider-track-height, var(--ac-global-border-size-thick));
    box-sizing: border-box;
    z-index: 1;
    top: calc(var(--ac-slider-height, var(--ac-alias-single-line-height)) / 2);
    margin-top: calc(
      var(--ac-slider-fill-track-height, var(--ac-alias-border-size-thick)) / -2
    );
    pointer-events: none;
    position: absolute;

    &::before {
      content: '';
      height: 100%;
      display: block;
    }
    &:first-of-type::before,
    &:last-of-type::before {
      /* The edge tracks */
      background: var(--ac-global-color-gray-500);
    }
    &:not(:first-of-type):not(:last-of-type)::before {
      /* The middle track */
      background: var(--ac-global-color-gray-100);
    }
    &:last-of-type {
      margin-left: calc(
        var(--ac-slider-handle-width, var(--ac-global-dimension-size-200)) / 2 *
          -1
      );
      right: 0;
      left: auto;
      padding-left: var(
        --ac-slider-handle-gap,
        var(--ac-global-border-size-thicker)
      );
      padding-right: 0;
    }
  }
`;

const controlsCSS = css`
  min-height: var(--ac-slider-height, var(--ac-alias-single-line-height));
`;

function SliderBase(props: SliderBaseProps, ref: FocusableRef<HTMLDivElement>) {
  props = useProviderProps(props);
  let {
    isDisabled,
    children,
    classes,
    style,
    labelPosition = 'top',
    getValueLabel,
    showValueLabel = !!props.label,
    formatOptions,
    minValue = 0,
    maxValue = 100,
  } = props;

  // `Math.abs(Math.sign(a) - Math.sign(b)) === 2` is true if the values have a different sign.
  let alwaysDisplaySign =
    Math.abs(Math.sign(minValue) - Math.sign(maxValue)) === 2;
  if (alwaysDisplaySign) {
    if (formatOptions != null) {
      if (!('signDisplay' in formatOptions)) {
        formatOptions = {
          ...formatOptions,
          signDisplay: 'exceptZero',
        };
      }
    } else {
      formatOptions = { signDisplay: 'exceptZero' };
    }
  }

  const formatter = useNumberFormatter(formatOptions);
  const state = useSliderState({
    ...props,
    numberFormatter: formatter,
    minValue,
    maxValue,
  });
  let trackRef = useRef<HTMLDivElement>(null);
  let { groupProps, trackProps, labelProps, outputProps } = useSlider(
    props,
    state,
    trackRef
  );

  let inputRef = useRef<HTMLInputElement>(null);
  let domRef = useFocusableRef(ref, inputRef);

  let displayValue = '';
  let maxLabelLength: number | undefined = undefined;

  if (typeof getValueLabel === 'function') {
    displayValue = getValueLabel(state.values);
    switch (state.values.length) {
      case 1:
        maxLabelLength = Math.max(
          getValueLabel([minValue]).length,
          getValueLabel([maxValue]).length
        );
        break;
      case 2:
        // Try all possible combinations of min and max values.
        maxLabelLength = Math.max(
          getValueLabel([minValue, minValue]).length,
          getValueLabel([minValue, maxValue]).length,
          getValueLabel([maxValue, minValue]).length,
          getValueLabel([maxValue, maxValue]).length
        );
        break;
      default:
        throw new Error('Only sliders with 1 or 2 handles are supported!');
    }
  } else {
    maxLabelLength = Math.max(
      [...formatter.format(minValue)].length,
      [...formatter.format(maxValue)].length
    );
    switch (state.values.length) {
      case 1:
        displayValue = state.getThumbValueLabel(0);
        break;
      case 2:
        // This should really use the NumberFormat#formatRange proposal...
        // https://github.com/tc39/ecma402/issues/393
        // https://github.com/tc39/proposal-intl-numberformat-v3#formatrange-ecma-402-393
        displayValue = `${state.getThumbValueLabel(
          0
        )} – ${state.getThumbValueLabel(1)}`;
        maxLabelLength =
          3 +
          2 *
            Math.max(
              maxLabelLength,
              [...formatter.format(minValue)].length,
              [...formatter.format(maxValue)].length
            );
        break;
      default:
        throw new Error('Only sliders with 1 or 2 handles are supported!');
    }
  }

  let labelNode = (
    <label className={'ac-slider-label'} {...labelProps} css={labelCSS}>
      {props.label}
    </label>
  );

  let valueNode = (
    <output
      {...outputProps}
      className={'ac-slider-value'}
      css={css`
        grid-area: value;
        text-align: right;
      `}
      style={
        maxLabelLength > 0
          ? {
              width: `${maxLabelLength}ch`,
              minWidth: `${maxLabelLength}ch`,
            }
          : undefined
      }
    >
      {displayValue}
    </output>
  );

  return (
    <div
      ref={domRef}
      className={classNames(
        'ac-slider',
        {
          'ac-slider--positionTop': labelPosition === 'top',
          'ac-slider--positionSide': labelPosition === 'side',
          'is-disabled': isDisabled,
        },
        classes
      )}
      style={{
        ...style,
      }}
      {...groupProps}
      css={sliderCSS}
    >
      {props.label && (
        <div
          className={'ac-slider-labelContainer'}
          css={labelContainerCSS}
          role="presentation"
        >
          {props.label && labelNode}
          {labelPosition === 'top' && showValueLabel && valueNode}
        </div>
      )}
      <div
        className={'ac-slider-controls'}
        css={controlsCSS}
        ref={trackRef}
        {...trackProps}
        role="presentation"
      >
        {children({
          trackRef,
          inputRef,
          state,
        })}
      </div>
      {labelPosition === 'side' && (
        <div className={'ac-slider-valueLabelContainer'} role="presentation">
          {showValueLabel && valueNode}
        </div>
      )}
    </div>
  );
}

const _SliderBase = React.forwardRef(SliderBase);
export { _SliderBase as SliderBase };
