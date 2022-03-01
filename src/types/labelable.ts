import { ReactNode } from 'react';

export type LabelPosition = 'top' | 'side';
export type Alignment = 'start' | 'end';
export type NecessityIndicator = 'icon' | 'label';

export interface LabelableProps {
  /** The content to display as the label. */
  label?: ReactNode;
  /**
   * The label's overall position relative to the element it is labeling.
   * @default 'top'
   */
  labelPosition?: LabelPosition;
  /**
   * The label's horizontal alignment relative to the element it is labeling.
   * @default 'start'
   */
  labelAlign?: Alignment;
  /**
   * Whether the required state should be shown as an icon or text.
   * @default 'icon'
   */
  necessityIndicator?: NecessityIndicator;
  /**
   * Whether the label is labeling a required field or group.
   */
  isRequired?: boolean;
}

export interface ExtendableLabelProps {
  /**
   * An extra element to add at the end of the label
   */
  labelExtra?: ReactNode;
}

/**
 * An interface for things that support addon labels
 */
export interface AddonableProps {
  addonBefore?: ReactNode;
}
