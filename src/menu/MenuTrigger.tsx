import { DismissButton, useOverlayPosition } from '@react-aria/overlays';
import { DOMRef, DOMRefValue } from '@react-types/shared';
import { FocusScope } from '@react-aria/focus';
import { Placement } from '@react-types/overlays';
import { PressResponder } from '@react-aria/interactions';
import React, { forwardRef, Fragment, ReactElement, useRef } from 'react';
import { useMenuTrigger } from '@react-aria/menu';
import { useMenuTriggerState } from '@react-stately/menu';
import { Popover } from '../popover';
import { unwrapDOMRef, useDOMRef } from '../utils';
import { Alignment, OverlayTriggerProps } from '../types';
import { MenuContext } from './context';

type MenuTriggerType = 'press' | 'longPress';

export interface MenuTriggerProps extends OverlayTriggerProps {
  /**
   * How the menu is triggered.
   * @default 'press'
   */
  trigger?: MenuTriggerType;
  /**
   * Alignment of the menu relative to the trigger.
   * @default 'start'
   */
  align?: Alignment;
  /**
   * Where the Menu opens relative to its trigger.
   * @default 'bottom'
   */
  direction?: 'bottom' | 'top' | 'left' | 'right' | 'start' | 'end';
  /**
   * Whether the Menu closes when a selection is made.
   * @default true
   */
  closeOnSelect?: boolean;
  /**
   * Whether the menu should automatically flip direction when space is limited.
   * @default true
   */
  shouldFlip?: boolean;
  /**
   * The contents of the MenuTrigger - a trigger and a Menu.
   */
  children: ReactElement[];
}

function MenuTrigger(props: MenuTriggerProps, ref: DOMRef<HTMLElement>) {
  const menuPopoverRef = useRef<DOMRefValue<HTMLDivElement>>(null);
  const triggerRef = useRef<HTMLElement>(null);
  const domRef = useDOMRef(ref);
  const menuTriggerRef = domRef || triggerRef;
  const menuRef = useRef<HTMLUListElement>(null);
  const {
    children,
    align = 'start',
    shouldFlip = true,
    direction = 'bottom',
    closeOnSelect,
    trigger = 'press',
  } = props;

  const [menuTrigger, menu] = React.Children.toArray(children);
  const state = useMenuTriggerState(props);

  const { menuTriggerProps, menuProps } = useMenuTrigger(
    { trigger },
    state,
    menuTriggerRef
  );

  let initialPlacement: Placement;
  switch (direction) {
    case 'left':
    case 'right':
    case 'start':
    case 'end':
      initialPlacement = `${direction} ${
        align === 'end' ? 'bottom' : 'top'
      }` as Placement;
      break;
    case 'bottom':
    case 'top':
    default:
      initialPlacement = `${direction} ${align}` as Placement;
  }

  const { overlayProps: positionProps, placement } = useOverlayPosition({
    targetRef: menuTriggerRef,
    overlayRef: unwrapDOMRef(menuPopoverRef),
    scrollRef: menuRef,
    placement: initialPlacement,
    shouldFlip: shouldFlip,
    isOpen: state.isOpen,
    onClose: state.close,
  });

  const menuContext = {
    ...menuProps,
    ref: menuRef,
    onClose: state.close,
    closeOnSelect,
    autoFocus: state.focusStrategy || true,
    UNSAFE_className: 'ac-menu-popover',
  };

  // Only contain focus while the menu is open. There is a fade out transition during which we may try to move focus.
  // If we contain, then focus will be pulled back into the menu.
  const contents = (
    <FocusScope restoreFocus>
      <DismissButton onDismiss={state.close} />
      {menu}
      <DismissButton onDismiss={state.close} />
    </FocusScope>
  );

  // On small screen devices, the menu is rendered in a tray, otherwise a popover.

  const overlay = (
    <Popover
      isOpen={state.isOpen}
      style={positionProps.style}
      ref={menuPopoverRef}
      placement={placement}
      onClose={state.close}
      shouldCloseOnBlur
    >
      {contents}
    </Popover>
  );

  return (
    <Fragment>
      <PressResponder
        {...menuTriggerProps}
        ref={menuTriggerRef}
        isPressed={state.isOpen}
      >
        {menuTrigger}
      </PressResponder>
      <MenuContext.Provider value={menuContext}>{overlay}</MenuContext.Provider>
    </Fragment>
  );
}

/**
 * The MenuTrigger serves as a wrapper around a Menu and its associated trigger,
 * linking the Menu's open state with the trigger's press state.
 */
const _MenuTrigger = forwardRef(MenuTrigger);
export { _MenuTrigger as MenuTrigger };
