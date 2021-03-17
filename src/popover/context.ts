import React, { HTMLAttributes } from 'react';

export interface PopoverContextValue extends HTMLAttributes<HTMLElement> {
  isDismissable?: boolean;
  onClose: () => void;
}

export const PopoverContext = React.createContext<PopoverContextValue>({
  isDismissable: true,
  onClose: () => {},
});
