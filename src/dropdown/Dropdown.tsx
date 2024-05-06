import React, { ReactNode, useState, useCallback, useRef } from 'react';
import { useResizeObserver } from '@react-aria/utils';
import { filterDOMProps } from '@react-aria/utils';
import { DOMProps, FocusableRefValue } from '../types';
import { useUnwrapDOMRef } from '../utils';
import { useProviderProps } from '../provider';
import { DropdownButton, DropdownButtonProps } from './DropdownButton';
import { DropdownMenu } from './DropdownMenu';
import { DropdownTrigger, DropdownTriggerProps } from './DropdownTrigger';

export interface DropdownProps extends DOMProps {
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
  /**
   * display the dropdown as quiet
   * Can be provided via the Form as well
   * @default false
   */
  isQuiet?: boolean;
  /**
   * Whether or not the dropdown is disabled
   */
  isDisabled?: boolean;
};

export function Dropdown(props: DropdownProps) {
  // Call use provider props so the textfield can inherit from the provider
  // E.x. disabled, readOnly, etc.
  props = useProviderProps(props);
  let {
    menu,
    children,
    triggerProps = { placement: 'bottom left' },
    isQuiet = false,
    isDisabled,
    buttonProps,
    ...otherProps
  } = props;
  buttonProps = { ...buttonProps, isDisabled, isQuiet };
  const triggerRef = useRef<FocusableRefValue<HTMLButtonElement>>(null);
  const unwrappedTriggerRef = useUnwrapDOMRef(triggerRef);

  // Measure the width of the button to inform the width of the menu (below).
  const [buttonWidth, setButtonWidth] = useState<number>();

  const onResize = useCallback(() => {
    if (unwrappedTriggerRef.current) {
      const width = unwrappedTriggerRef.current.offsetWidth;
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
  const domProps = filterDOMProps(otherProps as DOMProps)
  const buttonComponentProps = {...buttonProps, ...domProps}
  return (
    <DropdownTrigger {...triggerProps}>
      <DropdownButton ref={triggerRef} {...buttonComponentProps}>
        {children}
      </DropdownButton>
      <DropdownMenu style={menuStyle}>{menu}</DropdownMenu>
    </DropdownTrigger>
  );
}
