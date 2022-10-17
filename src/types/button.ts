import { ReactNode, SyntheticEvent } from 'react';
import { AriaLabelingProps, FocusableDOMProps } from '.';

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

export interface ButtonProps extends BaseButtonProps {
  children?: ReactNode | string;
  variant: 'primary' | 'default' | 'danger' | 'quiet';
  disabled?: boolean;
  className?: string;
  onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  icon?: ReactNode;
  /**
   * The title of the button. Required if only showing an icon
   */
  title?: string;
  /**
   * The size of the button
   * @default 'normal'
   */
  size?: 'normal' | 'compact';
}
