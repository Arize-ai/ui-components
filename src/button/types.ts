import { ReactNode } from 'react';

export interface BaseButtonProps {
  /**
   * A custom id for ally, analytics
   */
  id?: string;
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /** The content to display in the button. */
  children?: ReactNode;
}
