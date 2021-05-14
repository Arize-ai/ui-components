import React, { HTMLAttributes } from 'react';

export interface ModalContextValue extends HTMLAttributes<HTMLElement> {
  isDismissable?: boolean;
  onClose: () => void;
}

export const PopoverContext = React.createContext<ModalContextValue>({
  isDismissable: true,
  onClose: () => {},
});
