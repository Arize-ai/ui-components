import React, { HTMLAttributes } from 'react';

export interface DialogContextValue extends HTMLAttributes<HTMLElement> {
  type: 'modal' | 'slideOver';
  isDismissable?: boolean;
  onClose: () => void;
}

export const DialogContext = React.createContext<DialogContextValue | null>(
  null
);
