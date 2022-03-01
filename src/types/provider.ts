import { ReactNode } from 'react';

interface ContextProps {
  /** Whether descendants should be disabled. */
  isDisabled?: boolean;
  /** Whether descendants should be read only. */
  isReadOnly?: boolean;
}

export interface ProviderProps extends ContextProps {
  /** The content of the Provider. */
  children: ReactNode;
}

export interface ProviderContext extends ContextProps {}
