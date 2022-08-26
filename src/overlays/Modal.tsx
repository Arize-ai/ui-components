import { css } from '@emotion/core';
import { useModal, useOverlay, usePreventScroll } from '@react-aria/overlays';
import { mergeProps, useViewportSize } from '@react-aria/utils';
import React, { forwardRef, HTMLAttributes, ReactNode, RefObject } from 'react';
import theme from '../theme';
import { DOMRef, ModalProps } from '../types';
import { classNames, useDOMRef } from '../utils';
import { Overlay } from './Overlay';
import { Underlay } from './Underlay';

const modalWrapperCSS = css`
  box-sizing: border-box;
  height: var(--ac-visual-viewport-height);
  z-index: 2;
  transition: visibility 0ms linear 130ms;
  display: flex;
  position: fixed;
  pointer-events: none;
  &.ac-modal-wrapper--slideOver {
    top: 0;
    right: 0;
  }
`;

const transitionAnimationTime = '0.2s';
const modalCSS = css`
  background-color: ${theme.components.modal.bgColor};
  pointer-events: auto;
  opacity: 0;
  &.ac-modal--slideOver {
    border-left: 1px solid ${theme.colors.gray500};
    box-shadow: -10px 0px 30px 10px rgba(0, 0, 0, 0.1);
    /* Start offset by the animation distance */
    transform: translateX(500px);

    /* Exit animations */
    transition: opacity ${transitionAnimationTime} cubic-bezier(0.5, 0, 1, 1),
      transform ${transitionAnimationTime} cubic-bezier(0, 0, 0.4, 1);
    &.is-open {
      /* Entry animations */
      transition: transform 200ms cubic-bezier(0, 0, 0.4, 1),
        opacity 200ms cubic-bezier(0, 0, 0.4, 1);
      opacity: 0.9999;
      visibility: visible;
      transform: translateX(0);
    }
  }
`;
interface ModalWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  type?: 'modal' | 'fullscreen' | 'fullscreenTakeover';
  overlayProps: HTMLAttributes<HTMLElement>;
}

// @ts-ignore
const ModalWrapper = forwardRef<HTMLDivElement>(function(
  props: ModalWrapperProps,
  ref: RefObject<HTMLDivElement>
) {
  let { children, isOpen, type, overlayProps, ...otherProps } = props;

  usePreventScroll();
  const { modalProps } = useModal();

  const wrapperClassName = classNames('ac-modal-wrapper', {
    [`ac-modal-wrapper--${type}`]: type,
  });

  const modalClassName = classNames(
    'ac-modal',
    {
      'is-open': isOpen,
    },

    { [`ac-modal--${type}`]: type },
    otherProps.className
  );

  let viewport = useViewportSize();
  let style: any = {
    '--ac-visual-viewport-height': viewport.height + 'px',
  };

  return (
    <div className={wrapperClassName} style={style} css={modalWrapperCSS}>
      <div
        {...mergeProps(otherProps, overlayProps, modalProps)}
        ref={ref}
        className={modalClassName}
        data-testid="modal"
        css={modalCSS}
      >
        {children}
      </div>
    </div>
  );
});

function Modal(props: ModalProps, ref: DOMRef<HTMLElement>) {
  const { children, onClose, type, ...otherProps } = props;
  const domRef = useDOMRef(ref);

  const { overlayProps, underlayProps } = useOverlay(props, domRef);
  return (
    <Overlay {...otherProps}>
      <Underlay {...underlayProps} />
      <ModalWrapper
        onClose={onClose}
        type={type}
        // @ts-ignore
        ref={domRef}
        overlayProps={overlayProps}
      >
        {children}
      </ModalWrapper>
    </Overlay>
  );
}

let _Modal = forwardRef(Modal);
export { _Modal as Modal };
