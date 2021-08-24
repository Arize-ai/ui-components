import { ReactNode } from 'react';

export interface BaseButtonProps {
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /** The content to display in the button. */
  children?: ReactNode;
}
