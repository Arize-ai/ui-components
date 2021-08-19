import React, {
  CSSProperties,
  ReactNode,
  useState,
  useCallback,
  useRef,
} from 'react';
import { DropdownButton, DropdownButtonProps } from './DropdownButton';
import { DropdownMenu } from './DropdownMenu';
import { DropdownTrigger } from './DropdownTrigger';
import { useResizeObserver } from '@react-aria/utils';
import { Placement, FocusableRefValue } from '../types';
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
   * the placement of the dropdown menu
   * @default "bottom left"
   */
  menuPlacement?: Placement;
  /**
   * before text or icon for the button
   */
  buttonAddonBefore?: DropdownButtonProps['addonBefore'];
  /**
   * additional styles for the button
   */
  buttonStyle?: CSSProperties;
};

export function Dropdown({
  menu,
  children,
  menuPlacement = 'bottom left',
  buttonAddonBefore,
  buttonStyle,
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
    <DropdownTrigger placement={menuPlacement}>
      <DropdownButton
        ref={triggerRef}
        addonBefore={buttonAddonBefore}
        style={buttonStyle}
      >
        {children}
      </DropdownButton>
      <DropdownMenu style={menuStyle}>{menu}</DropdownMenu>
    </DropdownTrigger>
  );
}
