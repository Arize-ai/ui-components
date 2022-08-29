import { ReactNode } from 'react';
import { AriaLabelingProps, DOMProps } from './dom';

export interface DialogContainerProps {
  /** The Dialog to display, if any. */
  children: ReactNode;
  /** Handler that is called when the 'x' button of a dismissable Dialog is clicked. */
  onDismiss: () => void;
  /**
   * The type of Dialog that should be rendered. See the visual options below for examples of each.
   * @default 'modal'
   */
  type?: 'modal' | 'fullscreen' | 'fullscreenTakeover';
  /** Whether the Dialog is dismissable. See the [Dialog docs](Dialog.html#dismissable-dialogs) for more details. */
  isDismissable?: boolean;
  /** Whether pressing the escape key to close the dialog should be disabled. */
  isKeyboardDismissDisabled?: boolean;
}
export interface AriaDialogProps extends DOMProps, AriaLabelingProps {
  /**
   * The accessibility role for the dialog.
   * @default 'dialog'
   */
  role?: 'dialog' | 'alertdialog';
}

export interface DialogProps extends AriaDialogProps {
  /**
   * The title that will be displayed at the top of the dialog.
   */
  title: ReactNode;
  /**
   * component to display on the top-right of the dialog. Useful for things like pagination
   */
  extra?: ReactNode;
  /** The contents of the Dialog. */
  children: ReactNode;
  /** The size of the Dialog. Only applies to "modal" type Dialogs. */
  size?: 'S' | 'M' | 'L';
  /** Whether the Dialog is dismissable. See the [examples](#examples) for more details. */
  isDismissable?: boolean;
  /** Handler that is called when the 'x' button of a dismissable Dialog is clicked. */
  onDismiss?: () => void;
}
