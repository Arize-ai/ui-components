import { ReactNode } from 'react';
import { AriaLabelingProps, DOMProps } from './dom';
import { LabelPosition } from './labelable';
import { StyleProps } from './style';

export interface ProgressBaseProps {
  /**
   * The current value (controlled).
   * @default 0
   */
  value?: number;
  /**
   * The smallest value allowed for the input.
   * @default 0
   */
  minValue?: number;
  /**
   * The largest value allowed for the input.
   * @default 100
   */
  maxValue?: number;
}

export interface ProgressBarBaseProps extends ProgressBaseProps {
  /** The content to display as the label. */
  label?: ReactNode;
  /**
   * The display format of the value label.
   * @default {style: 'percent'}
   */
  formatOptions?: Intl.NumberFormatOptions;
  /** The content to display as the value's label (e.g. 1 of 4). */
  valueLabel?: ReactNode;
}

export interface AriaProgressBarBaseProps
  extends ProgressBarBaseProps,
    DOMProps,
    AriaLabelingProps {}

export interface ProgressBarProps extends ProgressBarBaseProps {
  /**
   * Whether presentation is indeterminate when progress isn't known.
   */
  isIndeterminate?: boolean;
}

export interface AriaProgressBarProps
  extends ProgressBarProps,
    DOMProps,
    AriaLabelingProps {}

export interface ACProgressBarBaseProps
  extends AriaProgressBarBaseProps,
    StyleProps {
  /**
   * How thick the bar should be.
   * @default 'L'
   */
  size?: 'S' | 'L';
  /**
   * The label's overall position relative to the element it is labeling.
   * @default 'top'
   */
  labelPosition?: LabelPosition;
  /** Whether the value's label is displayed. True by default if there's a label, false by default if not. */
  showValueLabel?: boolean;
}

export interface ACProgressBarProps
  extends ACProgressBarBaseProps,
    ProgressBarProps {
  /** The static color style to apply. Useful when the button appears over a color background. */
  staticColor?: 'white' | 'black';
}
