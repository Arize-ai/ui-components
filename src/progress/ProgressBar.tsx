import { DOMRef } from '@react-types/shared';
import React from 'react';
import { useProgressBar } from '@react-aria/progress';
import { ACProgressBarProps } from '../types';
import { classNames } from '../utils';
import { ProgressBarBase } from './ProgressBarBase';

function ProgressBar(props: ACProgressBarProps, ref: DOMRef<HTMLDivElement>) {
  let { staticColor, ...otherProps } = props;
  const { progressBarProps, labelProps } = useProgressBar(props);

  return (
    <ProgressBarBase
      {...otherProps}
      ref={ref as any}
      barProps={progressBarProps}
      labelProps={labelProps}
      barClassName={classNames({
        'ac-barloader--static-white': staticColor === 'white',
        'ac-barloader--static-black': staticColor === 'black',
      })}
    />
  );
}

/**
 * ProgressBars show the progression of a system operation: downloading, uploading, processing, etc., in a visual way.
 * They can represent either determinate or indeterminate progress.
 */
let _ProgressBar = React.forwardRef(ProgressBar);
export { _ProgressBar as ProgressBar };
