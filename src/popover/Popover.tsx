import React, { ReactNode, HTMLAttributes, forwardRef } from 'react';
import { useOverlay, useModal } from '@react-aria/overlays';
import { Overlay } from '../overlays';
import { PlacementAxis, DOMRef } from '../types';
import { mergeProps } from '@react-aria/utils';
import { FocusScope } from '@react-aria/focus';
import { useDialog } from '@react-aria/dialog';
import { useDOMRef } from '../utils/useDOMRef';
import { classNames } from '../utils/classNames';
import { popoverCSS } from './styles';

export interface PopoverProps extends HTMLAttributes<HTMLElement> {
  onClose?: () => void;
  isOpen?: boolean;
  /**
   * Whether or not the popover should close when the component loses focus
   * @default true
   */
  shouldCloseOnBlur?: boolean;
  children: ReactNode;
  placement?: PlacementAxis;
}

function Popover(props: PopoverProps, ref: DOMRef<HTMLDivElement>) {
  const {
    placement = 'bottom',
    children,
    isOpen = false,
    onClose,
    shouldCloseOnBlur = true,
    style,
    ...otherProps
  } = props;
  console.log('style', style);
  const domRef = useDOMRef(ref);
  // Handle interacting outside the popover and pressing
  // the Escape key to close the modal.
  const { overlayProps } = useOverlay(
    {
      onClose,
      isOpen,
      shouldCloseOnBlur,
      isDismissable: true,
    },
    domRef
  );

  // Hide content outside the modal from screen readers.
  const { modalProps } = useModal();

  // Mark the content as part of a dialog
  const { dialogProps } = useDialog({}, domRef);

  return (
    <Overlay isOpen={isOpen}>
      <FocusScope restoreFocus autoFocus>
        <div
          {...mergeProps(overlayProps, otherProps, dialogProps, modalProps)}
          ref={domRef}
          style={style}
          className={classNames('ac-popover', `ac-popover--${placement}`, {
            'is-open': isOpen,
          })}
          css={popoverCSS({ placement })}
          data-testid="popover"
          data-is-open={isOpen}
          // Explicitly set the tab index to 0.
          // TODO investigate why -1 from dialog props is not granting focus
          tabIndex={0}
        >
          {children}
        </div>
      </FocusScope>
    </Overlay>
  );
}

const _Popover = forwardRef(Popover);
export { _Popover as Popover };
