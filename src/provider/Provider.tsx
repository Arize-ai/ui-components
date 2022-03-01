import React, { useContext } from 'react';
import { OverlayProvider } from '@react-aria/overlays';
import { ProviderProps, ProviderContext } from '../types';

const Context = React.createContext<ProviderContext | null>(null);

export function Provider(props: ProviderProps) {
  const { children, ...context } = props;
  return (
    <Context.Provider value={context}>
      <OverlayProvider>{children}</OverlayProvider>
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
      isDisabled: context.isDisabled,
      isReadOnly: context.isReadOnly,
    },
    props
  );
}
