import React, { ReactNode, ReactElement, useRef } from 'react';
import { PressResponder } from '@react-aria/interactions';
import { Popover } from './Popover';
import {
  OverlayTriggerState,
  useOverlayTriggerState,
} from '@react-stately/overlays';
import { PopoverClose, OverlayTriggerProps, PositionProps } from '../types';
import { useOverlayPosition, useOverlayTrigger } from '@react-aria/overlays';
import { PopoverContext } from './context';

export interface PopoverTriggerProps
  extends OverlayTriggerProps,
    PositionProps {
  children: ReactNode;
}

/**
 * A HOC that supports a trigger and pop-over content
 */
export function PopoverTrigger(props: PopoverTriggerProps) {
  const { children } = props;
  if (!Array.isArray(children) || children.length > 2) {
    throw new Error('DialogTrigger must have exactly 2 children');
  }

  // if a function is passed as the second child, it won't appear in toArray
  const [trigger, content] = children as [ReactElement, PopoverClose];
  const state = useOverlayTriggerState(props);

  const triggerRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const { overlayProps: popoverProps, placement } = useOverlayPosition({
    targetRef: triggerRef,
    overlayRef,
    placement: props.placement,
    isOpen: state.isOpen,
  });

  let { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
    triggerRef
  );

  const triggerPropsWithRef = {
    ...triggerProps,
    ref: triggerRef,
  };

  const overlay = (
    <Popover
      isOpen={state.isOpen}
      ref={overlayRef}
      onClose={state.close}
      placement={placement}
      // arrowProps={arrowProps}
      // hideArrow={hideArrow}
      {...popoverProps}
    >
      {typeof content === 'function' ? content(state.close) : content}
    </Popover>
  );
  return (
    <PopoverTriggerBase
      state={state}
      triggerProps={triggerPropsWithRef}
      popoverProps={overlayProps}
      trigger={trigger}
      overlay={overlay}
    />
  );
}

interface PopoverTriggerBaseProps {
  state: OverlayTriggerState;
  isDismissable?: boolean;
  triggerProps?: any;
  popoverProps?: any;
  overlay: ReactElement;
  trigger: ReactElement;
}

function PopoverTriggerBase({
  state,
  isDismissable,
  triggerProps = {},
  popoverProps = {},
  overlay,
  trigger,
}: PopoverTriggerBaseProps) {
  let context = {
    onClose: state.close,
    isDismissable,
    ...popoverProps,
  };
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
      <PopoverContext.Provider value={context}>
        {overlay}
      </PopoverContext.Provider>
    </>
  );
}
