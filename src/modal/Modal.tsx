import React, { ReactNode, HTMLAttributes, forwardRef } from 'react';
import { useOverlay, useModal } from '@react-aria/overlays';
import { Overlay } from '../overlays';

import { DOMRef } from '../types';
import { mergeProps } from '@react-aria/utils';
import { useDialog } from '@react-aria/dialog';
import { useDOMRef } from '../utils/useDOMRef';
import { classNames } from '../utils/classNames';
import { modalCSS, modalWrapperCSS } from './styles';

import { css } from '@emotion/core';

export interface ModalProps extends HTMLAttributes<HTMLElement> {
  onClose?: () => void;
  isOpen?: boolean;
  children: ReactNode;
}

const Underlay = ({ isOpen }: { isOpen: boolean }) => (
  <div
    className={classNames({
      'is-open': isOpen,
    })}
    css={css`
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      overflow: hidden;
      background: rgb(0 0 0 / 40%);

      &.is-open {
        visibility: visible;
        opacity: 1;
        transition-delay: 0ms;
        pointer-events: auto;
      }
    `}
  ></div>
);
function Modal(props: ModalProps, ref: DOMRef<HTMLDivElement>) {
  const { children, isOpen = false, onClose, style, ...otherProps } = props;
  const domRef = useDOMRef(ref);
  // Handle interacting outside the modal and pressing
  // the Escape key to close the modal.
  const { overlayProps } = useOverlay(
    {
      onClose,
      isOpen,
      isDismissable: true,
    },
    domRef
  );

  let modalClassName = classNames({
    'is-open': isOpen,
  });

  // Hide content outside the modal from screen readers.
  const { modalProps } = useModal();

  // Mark the content as part of a dialog
  const { dialogProps } = useDialog({}, domRef);
  return (
    <Overlay isOpen={isOpen}>
      <Underlay isOpen={isOpen} />
      <div
        {...mergeProps(overlayProps, otherProps, dialogProps, modalProps)}
        data-is-open={isOpen}
        // Explicitly set the tab index to 0.
        // TODO investigate why -1 from dialog props is not granting focus
        tabIndex={0}
        css={modalWrapperCSS}
      >
        <div
          className={modalClassName}
          css={modalCSS}
          {...mergeProps(otherProps, overlayProps, modalProps)}
          ref={domRef}
          data-testid="modal"
        >
          {children}
        </div>
      </div>
    </Overlay>
  );
}

const _Modal = forwardRef(Modal);
export { _Modal as Modal };
