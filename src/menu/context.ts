import React, { HTMLAttributes, MutableRefObject, useContext } from 'react';

type FocusStrategy = 'first' | 'last';

export interface MenuContextValue
  extends Omit<HTMLAttributes<HTMLElement>, 'autoFocus'> {
  onClose?: () => void;
  closeOnSelect?: boolean;
  shouldFocusWrap?: boolean;
  autoFocus?: boolean | FocusStrategy;
  ref?: MutableRefObject<HTMLUListElement | null>;
}

export const MenuContext = React.createContext<MenuContextValue>({});

export function useMenuContext(): MenuContextValue {
  return useContext(MenuContext);
}
