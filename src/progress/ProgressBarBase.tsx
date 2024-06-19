import { clamp } from '@react-aria/utils';
import React, { CSSProperties, HTMLAttributes } from 'react';
import { DOMRef, ProgressBarProps, ACProgressBarBaseProps } from '../types';
import { classNames, useDOMRef, useStyleProps } from '../utils';
import { progressBarCSS } from './styles';
interface ProgressBarBaseProps
  extends ACProgressBarBaseProps,
    ProgressBarProps {
  barClassName?: string;
  barProps?: HTMLAttributes<HTMLDivElement>;
  labelProps?: HTMLAttributes<HTMLLabelElement>;
}

// Base ProgressBar component shared with Meter.
function ProgressBarBase(
  props: ProgressBarBaseProps,
  ref: DOMRef<HTMLDivElement>
) {
  let {
    value = 0,
    minValue = 0,
    maxValue = 100,
    size = 'L',
    label,
    barClassName,
    showValueLabel = !!label,
    labelPosition = 'top',
    isIndeterminate = false,
    barProps,
    labelProps,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    ...otherProps
  } = props;
  let domRef = useDOMRef(ref);
  let { styleProps } = useStyleProps(otherProps);

  value = clamp(value, minValue, maxValue);

  let barStyle: CSSProperties = {};
  if (!isIndeterminate) {
    let percentage = (value - minValue) / (maxValue - minValue);
    barStyle.width = `${Math.round(percentage * 100)}%`;
  }

  // Ideally this should be in useProgressBar, but children
  // are not supported in ProgressCircle which shares that hook...
  if (!label && !ariaLabel && !ariaLabelledby) {
    // eslint-disable-next-line no-console
    console.warn(
      'If you do not provide a visible label via children, you must specify an aria-label or aria-labelledby attribute for accessibility'
    );
  }
  // use inline style for fit-content because cssnano is too smart for us and will strip out the -moz prefix in css files
  return (
    <div
      {...barProps}
      ref={domRef}
      className={classNames(
        'ac-barloader',
        {
          'ac-barloader--small': size === 'S',
          'ac-barloader--large': size === 'L',
          'ac-barloader--indeterminate': isIndeterminate,
          'ac-barloader--sideLabel': labelPosition === 'side',
        },
        barClassName,
        styleProps.className
      )}
      css={progressBarCSS}
      style={{ minWidth: '-moz-fit-content', ...styleProps.style }}
    >
      {label && (
        <span {...labelProps} className="ac-barloader-label">
          {label}
        </span>
      )}
      {showValueLabel && barProps && (
        <div className={'ac-barloader-percentage'}>
          {barProps['aria-valuetext']}
        </div>
      )}
      <div className={'ac-barloader-track'}>
        <div className={'ac-barloader-fill'} style={barStyle} />
      </div>
    </div>
  );
}

let _ProgressBarBase = React.forwardRef(ProgressBarBase);
export { _ProgressBarBase as ProgressBarBase };
