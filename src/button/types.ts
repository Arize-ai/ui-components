import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface BaseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /** The content to display in the button. */
  children?: ReactNode;
}
