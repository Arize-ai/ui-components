import React, { ReactNode, useState, useCallback, useRef } from 'react';
import { DropdownButton, DropdownButtonProps } from './DropdownButton';
import { DropdownMenu } from './DropdownMenu';
import { DropdownTrigger, DropdownTriggerProps } from './DropdownTrigger';
import { useResizeObserver } from '@react-aria/utils';
import { FocusableRefValue } from '../types';
import { useUnwrapDOMRef } from '../utils';

export type DropdownProps = {
  /**
   * The content of the dropdown menu
   */
  menu: ReactNode;
  /**
   * the content of the dropdown button
   */
  children: ReactNode;
  /**
   * the dropdown trigger props
   */
  triggerProps?: Omit<DropdownTriggerProps, 'children'>;
  /**
   * the dropdown button props
   */
  buttonProps?: DropdownButtonProps;
};

export function Dropdown({
  menu,
  children,
  triggerProps = { placement: 'bottom left' },
  buttonProps,
}: DropdownProps) {
  let triggerRef = useRef<FocusableRefValue<HTMLButtonElement>>(null);
  let unwrappedTriggerRef = useUnwrapDOMRef(triggerRef);

  // Measure the width of the button to inform the width of the menu (below).
  let [buttonWidth, setButtonWidth] = useState<number>();

  let onResize = useCallback(() => {
    if (unwrappedTriggerRef.current) {
      let width = unwrappedTriggerRef.current.offsetWidth;
      setButtonWidth(width);
    }
  }, [unwrappedTriggerRef, setButtonWidth]);

  // Handle re-sizes of the trigger
  useResizeObserver({
    ref: unwrappedTriggerRef,
    onResize: onResize,
  });

  const menuStyle = {
    minWidth: buttonWidth,
  };

  return (
    <DropdownTrigger {...triggerProps}>
      <DropdownButton ref={triggerRef} {...buttonProps}>
        {children}
      </DropdownButton>
      <DropdownMenu style={menuStyle}>{menu}</DropdownMenu>
    </DropdownTrigger>
  );
}
