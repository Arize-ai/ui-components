import React, { ReactNode, ReactElement, useRef } from 'react';
import { PressResponder } from '@react-aria/interactions';
import { Modal, ModalProps } from './Modal';
import {
  OverlayTriggerState,
  useOverlayTriggerState,
} from '@react-stately/overlays';
import {
  ModalClose,
  OverlayTriggerProps,
  PositionProps,
  DOMRefValue,
} from '../types';
import { useOverlayPosition, useOverlayTrigger } from '@react-aria/overlays';
import { unwrapDOMRef } from '../utils/useDOMRef';

export interface ModalTriggerProps
  extends OverlayTriggerProps,
    PositionProps,
    ModalProps {
  children: ReactNode;
}

/**
 * A HOC that supports a trigger and modal content
 */
export function ModalTrigger(props: ModalTriggerProps) {
  const { children } = props;
  if (!Array.isArray(children) || children.length > 2) {
    throw new Error('ModalTrigger must have exactly 2 children');
  }

  // if a function is passed as the second child, it won't appear in toArray
  const [trigger, content] = children as [ReactElement, ModalClose];
  const state = useOverlayTriggerState(props);

  const triggerRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<DOMRefValue<HTMLDivElement>>(null);
  const { overlayProps: modalProps } = useOverlayPosition({
    targetRef: triggerRef,
    overlayRef: unwrapDOMRef(overlayRef),
    isOpen: state.isOpen,
  });

  const { triggerProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
    triggerRef
  );

  const triggerPropsWithRef = {
    ...triggerProps,
    ref: triggerRef,
  };

  const overlay = (
    <Modal
      isOpen={state.isOpen}
      ref={overlayRef}
      onClose={state.close}
      {...modalProps}
    >
      {typeof content === 'function' ? content(state.close) : content}
    </Modal>
  );
  return (
    <ModalTriggerBase
      state={state}
      triggerProps={triggerPropsWithRef}
      trigger={trigger}
      overlay={overlay}
    />
  );
}

interface ModalTriggerBaseProps {
  state: OverlayTriggerState;
  triggerProps?: any;
  modalProps?: any;
  overlay: ReactElement;
  trigger: ReactElement;
}

function ModalTriggerBase({
  state,
  triggerProps = {},
  overlay,
  trigger,
}: ModalTriggerBaseProps) {
  return (
    <>
      <PressResponder
        {...triggerProps}
        onPress={() => {
          state.toggle();
        }}
        isPressed={state.isOpen}
      >
        {trigger}
      </PressResponder>
      {overlay}
    </>
  );
}
