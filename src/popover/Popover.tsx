import React, { ReactNode, RefObject, HTMLAttributes } from 'react';
import { useOverlay, useModal } from '@react-aria/overlays';
import { Overlay } from '../overlays';
import { PlacementAxis } from '../types';
import { mergeProps } from '@react-aria/utils';

export interface PopoverProps extends HTMLAttributes<HTMLElement> {
  onClose?: () => void;
  isOpen?: boolean;
  children: ReactNode;
  placement?: PlacementAxis;
}

export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      placement = 'bottom',
      children,
      isOpen,
      onClose,
      style,
      ...otherProps
    }: PopoverProps,
    ref
  ) => {
    // Handle interacting outside the popover and pressing
    // the Escape key to close the modal.
    let { overlayProps } = useOverlay(
      {
        onClose,
        isOpen,
        isDismissable: true,
      },
      ref as RefObject<HTMLDivElement>
    );

    // Hide content outside the modal from screen readers.
    let { modalProps } = useModal();

    return (
      <Overlay isOpen={isOpen}>
        <div
          {...mergeProps(overlayProps, otherProps, modalProps)}
          ref={ref}
          style={style}
          data-testid="popover"
          data-is-open={isOpen}
        >
          {children}
        </div>
      </Overlay>
    );
  }
);
