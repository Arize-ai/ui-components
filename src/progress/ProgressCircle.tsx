import { clamp } from '@react-aria/utils';
import { AriaLabelingProps, DOMRef } from '@react-types/shared';
import React, { CSSProperties } from 'react';
import { useProgressBar } from '@react-aria/progress';
import { classNames, useDOMRef } from '../utils';
import { DOMProps, ProgressBaseProps } from '../types';
import { progressCircleCSS } from './styles';

interface AriaProgressCircleProps extends DOMProps, AriaLabelingProps {}
export interface ProgressCircleProps
  extends AriaProgressCircleProps,
    ProgressBaseProps {
  /**
   * Whether presentation is indeterminate when progress isn't known.
   */
  isIndeterminate?: boolean;
  /**
   * What the ProgressCircle's diameter should be.
   * @default 'M'
   */
  size?: 'S' | 'M' | 'L';
}

function ProgressCircle(
  props: ProgressCircleProps,
  ref: DOMRef<HTMLDivElement>
) {
  let {
    value = 0,
    minValue = 0,
    maxValue = 100,
    size = 'M',
    isIndeterminate = false,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
  } = props;
  const domRef = useDOMRef(ref);

  value = clamp(value, minValue, maxValue);
  const { progressBarProps } = useProgressBar({ ...props, value });

  const subMask1Style: CSSProperties = {};
  const subMask2Style: CSSProperties = {};
  if (!isIndeterminate) {
    const percentage = ((value - minValue) / (maxValue - minValue)) * 100;
    let angle;
    if (percentage > 0 && percentage <= 50) {
      angle = -180 + (percentage / 50) * 180;
      subMask1Style.transform = `rotate(${angle}deg)`;
      subMask2Style.transform = 'rotate(-180deg)';
    } else if (percentage > 50) {
      angle = -180 + ((percentage - 50) / 50) * 180;
      subMask1Style.transform = 'rotate(0deg)';
      subMask2Style.transform = `rotate(${angle}deg)`;
    }
  }

  if (!ariaLabel && !ariaLabelledby) {
    // eslint-disable-next-line no-console
    console.warn(
      'ProgressCircle requires an aria-label or aria-labelledby attribute for accessibility'
    );
  }

  return (
    <div
      {...progressBarProps}
      ref={domRef}
      css={progressCircleCSS}
      className={classNames('ac-progress-circle', {
        'ac-progress-circle--indeterminate': isIndeterminate,
        'ac-progress-circle--small': size === 'S',
        'ac-progress-circle--large': size === 'L',
      })}
    >
      <div className={'ac-progress-circle-track'} />
      <div className={'ac-progress-circle-fills'}>
        <div className={'ac-progress-circle-fillMask1'}>
          <div
            className={'ac-progress-circle-fillSubMask1'}
            data-testid="fillSubMask1"
            style={subMask1Style}
          >
            <div className={'ac-progress-circle-fill'} />
          </div>
        </div>
        <div className={'ac-progress-circle-fillMask2'}>
          <div
            className={'ac-progress-circle-fillSubMask2'}
            data-testid="fillSubMask2"
            style={subMask2Style}
          >
            <div className={'ac-progress-circle-fill'} />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ProgressCircles show the progression of a system operation such as downloading, uploading, processing, etc. in a visual way.
 * They can represent determinate or indeterminate progress.
 */
const _ProgressCircle = React.forwardRef(ProgressCircle);
export { _ProgressCircle as ProgressCircle };
