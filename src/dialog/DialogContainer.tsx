import React, { ReactElement, ReactNode, useRef } from 'react';
import { Modal } from '../overlays';
import { DialogContext } from './context';

export interface DialogContainerProps {
  /** The Dialog to display, if any. */
  children: ReactNode;
  /** Handler that is called when the 'x' button of a dismissable Dialog is clicked. */
  onDismiss: () => void;
  /**
   * The type of Dialog that should be rendered. See the visual options below for examples of each.
   * @default 'modal'
   */
  type?: 'modal' | 'slideOver';
  /**
   * Whether the Dialog is dismissable.
   */
  isDismissable?: boolean;
  /** Whether pressing the escape key to close the dialog should be disabled. */
  isKeyboardDismissDisabled?: boolean;
}

/**
 * A DialogContainer accepts a single Dialog as a child, and manages showing and hiding
 * it in a modal. Useful in cases where there is no trigger element
 * or when the trigger unmounts while the dialog is open.
 */
export function DialogContainer(props: DialogContainerProps) {
  const {
    children,
    type = 'modal',
    onDismiss,
    isDismissable,
    isKeyboardDismissDisabled,
  } = props;

  const childArray = React.Children.toArray(children);
  if (childArray.length > 1) {
    throw new Error('Only a single child can be passed to DialogContainer.');
  }

  const lastChild = useRef<ReactElement | null>(null);
  const child = React.isValidElement(childArray[0]) ? childArray[0] : null;
  if (child) {
    lastChild.current = child;
  }

  const context = {
    type,
    onClose: onDismiss,
    isDismissable,
  };

  return (
    <Modal
      isOpen={!!child}
      onClose={onDismiss}
      type={type}
      isDismissable={isDismissable}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
    >
      <DialogContext.Provider value={context}>
        {lastChild.current}
      </DialogContext.Provider>
    </Modal>
  );
}
