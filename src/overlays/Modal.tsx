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

  pointer-events: none;
  z-index: 2;
  transition: visibility 0ms linear 130ms;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
`;
const modalCSS = css`
  background-color: ${theme.colors.gray500};
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  let domRef = useDOMRef(ref);

  let { overlayProps, underlayProps } = useOverlay(props, domRef);
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
