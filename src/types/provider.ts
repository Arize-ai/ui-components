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
  /**
   * Whether or not to mount the global styles. This should only be set to false if
   * you are wanting to manually set the global design tokens.
   * @default true
   */
  mountGlobalStyles?: boolean;
}

export type ProviderContext = ContextProps;
