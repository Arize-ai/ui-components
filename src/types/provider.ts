import { ReactNode } from 'react';

export type ProviderTheme = 'light' | 'dark';

interface ContextProps {
  /** Whether descendants should be displayed with the quiet style. */
  isQuiet?: boolean;
  /** Whether descendants should be disabled. */
  isDisabled?: boolean;
  /** Whether descendants should be read only. */
  isReadOnly?: boolean;
  /** The color theme for all child components */
  theme?: ProviderTheme;
}

export interface ProviderProps extends ContextProps {
  /** The content of the Provider. */
  children: ReactNode;
}

export interface ProviderContext extends ContextProps {}
