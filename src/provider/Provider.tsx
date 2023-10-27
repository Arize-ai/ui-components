import React, { useContext } from 'react';
import { OverlayProvider } from '@react-aria/overlays';
import { ProviderProps, ProviderContext, ProviderTheme } from '../types';
import { GlobalStyles } from './GlobalStyles';

const Context = React.createContext<ProviderContext | null>(null);

export function Provider(props: ProviderProps) {
  const prevContext = useContext(Context);
  let { children, theme: propsTheme, ...context } = props;
  let theme: ProviderTheme = propsTheme || 'dark';
  let isRootProvider = !prevContext;
  // If there is a theme higher up in the tree, use that theme
  if (prevContext && prevContext.theme) {
    theme = prevContext.theme;
  }
  let content = isRootProvider ? (
    <OverlayProvider>{children}</OverlayProvider>
  ) : (
    children
  );
  return (
    <Context.Provider value={{ ...context, theme }}>
      {isRootProvider ? <GlobalStyles /> : null}
      <div className={`ac-theme ac-theme--${theme}`}>{content}</div>
    </Context.Provider>
  );
}

export function useProvider(): ProviderContext {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useProvider must be used within a Provider');
  }
  return context;
}

export function useProviderProps<T>(props: T): T {
  let context = useProvider();
  if (!context) {
    return props;
  }
  return Object.assign(
    {},
    {
      isQuiet: context.isQuiet,
      isDisabled: context.isDisabled,
      isReadOnly: context.isReadOnly,
    },
    props
  );
}
