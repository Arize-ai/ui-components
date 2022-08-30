import { ReactNode } from 'react';
import { AriaLabelingProps, FocusableDOMProps } from '../types';

interface AriaBaseButtonProps extends FocusableDOMProps, AriaLabelingProps {
  /**
   * The behavior of the button when used in an HTML form.
   */
  type?: 'button' | 'submit' | 'reset';
}
export interface BaseButtonProps extends AriaBaseButtonProps {
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /** The content to display in the button. */
  children?: ReactNode;
}
