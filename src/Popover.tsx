import React, { ReactNode, RefObject, HTMLAttributes } from 'react';
import { useOverlay } from '@react-aria/overlays';

export interface PopoverProps extends HTMLAttributes<HTMLElement> {
  onClose?: () => void;
  isOpen?: boolean;
  children: ReactNode;
}

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  ({ children, isOpen, onClose, style }: PopoverProps, ref) => {
    // Handle interacting outside the dialog and pressing
    // the Escape key to close the modal.
    let { overlayProps } = useOverlay(
      {
        onClose,
        isOpen,
        isDismissable: true,
      },
      ref as RefObject<HTMLDivElement>
    );

    return (
      <div
        {...overlayProps}
        ref={ref}
        style={{
          background: 'white',
          color: 'black',
          padding: 30,
          ...style,
        }}
      >
        {children}
        {isOpen ? children : null}
        {/* <DismissButton onDismiss={onClose} /> */}
      </div>
    );
  }
);

export default Popover;
