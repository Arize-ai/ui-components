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
