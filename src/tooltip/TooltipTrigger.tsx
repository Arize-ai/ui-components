import React, { ReactElement, useRef } from 'react';
import { FocusableProvider } from '@react-aria/focus';
import { useOverlayPosition } from '@react-aria/overlays';
import { useTooltipTrigger } from '@react-aria/tooltip';
import { useTooltipTriggerState } from '@react-stately/tooltip';
import { Overlay } from '../overlays';
import { PositionProps, OverlayTriggerProps } from '../types';
import { TooltipContext } from './context';

export interface TooltipTriggerProps
  extends PositionProps,
    OverlayTriggerProps {
  /**
   * Whether the tooltip should be disabled, independent from the trigger.
   */
  isDisabled?: boolean;

  /**
   * The delay time for the tooltip to show up in milliseconds
   * @default 1500
   */
  delay?: number;

  /**
   * By default, opens for both focus and hover. Can be made to open only for focus.
   */
  trigger?: 'focus';
  /**
   * The first child is the element that triggers the tooltip while the second is the tooltip itself
   */
  children: [ReactElement, ReactElement];
}

const DEFAULT_OFFSET = -1; // Offset needed to reach 4px/5px (med/large) distance between tooltip and trigger button
const DEFAULT_CROSS_OFFSET = 0;

export function TooltipTrigger(props: TooltipTriggerProps) {
  const {
    children,
    offset = DEFAULT_OFFSET,
    crossOffset = DEFAULT_CROSS_OFFSET,
    isDisabled,
    trigger: triggerAction,
  } = props;
  const [trigger, tooltip] = React.Children.toArray(children);

  const state = useTooltipTriggerState(props);

  const tooltipTriggerRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const { triggerProps, tooltipProps } = useTooltipTrigger(
    {
      isDisabled,
      trigger: triggerAction,
    },
    state,
    tooltipTriggerRef
  );

  const { overlayProps, arrowProps, placement } = useOverlayPosition({
    placement: props.placement,
    targetRef: tooltipTriggerRef,
    overlayRef,
    offset,
    crossOffset,
    isOpen: state.isOpen,
  });

  return (
    <FocusableProvider {...triggerProps} ref={tooltipTriggerRef}>
      {trigger}
      <TooltipContext.Provider
        value={{
          state,
          placement: placement || 'top',
          ref: overlayRef,
          style: overlayProps.style,
          arrowProps,
          ...tooltipProps,
        }}
      >
        <Overlay isOpen={state.isOpen}>{tooltip}</Overlay>
      </TooltipContext.Provider>
    </FocusableProvider>
  );
}
