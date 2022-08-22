import { ActionButton } from '../button';
import { classNames, unwrapDOMRef, useDOMRef } from '../utils';
import { CloseOutline, Icon } from '../icon';
import { DialogContext, DialogContextValue } from './context';
import { DismissButton } from '@react-aria/overlays';
import { DOMRef } from '@react-types/shared';
import { FocusScope } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import React, { useContext, useMemo, useRef } from 'react';
import { useDialog } from '@react-aria/dialog';
import { DialogProps } from '../types/dialog';

let sizeMap = {
  S: 'small',
  M: 'medium',
  L: 'large',
  fullscreen: 'fullscreen',
  fullscreenTakeover: 'fullscreenTakeover',
};

function Dialog(props: DialogProps, ref: DOMRef) {
  let { type = 'modal', ...contextProps } =
    useContext(DialogContext) || ({} as DialogContextValue);
  let {
    children,
    isDismissable = contextProps.isDismissable,
    onDismiss = contextProps.onClose,
    size,
    ...otherProps
  } = props;
  let domRef = useDOMRef(ref);
  size = size || 'S';
  let sizeVariant = sizeMap[size];
  let { dialogProps, titleProps } = useDialog(
    mergeProps(contextProps, props),
    domRef
  );

  return (
    <FocusScope contain restoreFocus>
      <section
        {...dialogProps}
        className={classNames('ac-dialog', {
          [`ac-dialog--${sizeVariant}`]: sizeVariant,
          'ac-dialog--dismissable': isDismissable,
        })}
        ref={domRef}
      >
        {children}
        {isDismissable && (
          <ActionButton aria-label="dismiss" onPress={onDismiss}>
            <Icon svg={CloseOutline} />
          </ActionButton>
        )}
      </section>
    </FocusScope>
  );
}

/**
 * Dialogs are windows containing contextual information, tasks, or workflows that appear over the user interface.
 * Depending on the kind of Dialog, further interactions may be blocked until the Dialog is acknowledged.
 */
let _Dialog = React.forwardRef(Dialog);
export { _Dialog as Dialog };
