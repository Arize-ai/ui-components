import { LabelPosition, LabelableProps } from './labelable';
import { RangeInputBase, RangeValue, Validation, ValueBase } from './input';
import { FocusableProps } from './events';
import { Orientation } from './orientation';
import {
  AriaLabelingProps,
  AriaValidationProps,
  DOMProps,
  FocusableDOMProps,
  InputDOMProps,
} from './dom';

export interface SliderProps<T = number | number[]>
  extends RangeInputBase<number>,
    ValueBase<T>,
    LabelableProps {
  /**
   * The orientation of the Slider.
   * @default 'horizontal'
   */
  orientation?: Orientation;
  /** Whether the whole Slider is disabled. */
  isDisabled?: boolean;
  /** Fired when the slider stops moving, due to being let go. */
  onChangeEnd?: (value: T) => void;
  // These are duplicated from ValueBase to define defaults for the docs.
  /**
   * The slider's minimum value.
   * @default 0
   */
  minValue?: number;
  /**
   * The slider's maximum value.
   * @default 100
   */
  maxValue?: number;
  /**
   * The slider's step value.
   * @default 1
   */
  step?: number;
}

export interface SliderThumbProps
  extends FocusableProps,
    Validation,
    LabelableProps {
  /**
   * The orientation of the Slider.
   * @default 'horizontal'
   * @deprecated - pass to the slider instead.
   */
  orientation?: Orientation;
  /** Whether the Thumb is disabled. */
  isDisabled?: boolean;
  /** Index of the thumb for accessing purposes. */
  index: number;
}

export interface AriaSliderProps<T = number | number[]>
  extends SliderProps<T>,
    DOMProps,
    AriaLabelingProps {}
export interface AriaSliderThumbProps
  extends SliderThumbProps,
    DOMProps,
    FocusableDOMProps,
    AriaLabelingProps,
    AriaValidationProps,
    InputDOMProps {}

export interface BarSliderBase<T> extends AriaSliderProps<T>, ValueBase<T> {
  /**
   * The display format of the value label.
   */
  formatOptions?: Intl.NumberFormatOptions;
  /**
   * The label's overall position relative to the element it is labeling.
   * @default 'top'
   */
  labelPosition?: LabelPosition;
  /** Whether the value's label is displayed. True by default if there's a `label`, false by default if not. */
  showValueLabel?: boolean;
  /** A function that returns the content to display as the value's label. Overrides default formatted number. */
  getValueLabel?: (value: T) => string;
  /**
   * A ContextualHelp element to place next to the label.
   * TODO: implement this
   */
  // contextualHelp?: ReactNode;
}

export interface ACSliderProps extends BarSliderBase<number>, InputDOMProps {
  /**
   * Whether a fill color is shown between the start of the slider and the current value.
   */
  isFilled?: boolean;
  /**
   * The offset from which to start the fill.
   */
  fillOffset?: number;
  /**
   * The background of the track, specified as the stops for a CSS background: `linear-gradient(to right/left, ...trackGradient)`.
   * @example trackGradient={['red', 'green']}
   * @example trackGradient={['red 20%', 'green 40%']}
   */
  trackGradient?: string[];
}

export interface RangeSliderProps extends BarSliderBase<RangeValue<number>> {}
