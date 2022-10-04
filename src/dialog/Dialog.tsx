import { Button } from '../button';
import { classNames, useDOMRef } from '../utils';
import { CloseOutline, Icon } from '../icon';
import { DialogContext, DialogContextValue } from './context';
import { DOMRef } from '@react-types/shared';
import { FocusScope } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import React, { useContext } from 'react';
import { useDialog } from '@react-aria/dialog';
import { DialogProps } from '../types/dialog';
import { Heading } from '../content';
import { css } from '@emotion/core';
import theme from '../theme';

const dialogCSS = css`
  outline: none;
  &.ac-dialog--slideOver {
    &.ac-dialog--small {
      width: 400px;
      height: 100vh;
      display: flex;
      flex-direction: column;
    }
    &.ac-dialog--medium {
      width: 700px;
    }
    &.ac-dialog--large {
      width: 900px;
    }
  }
`;
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
    title,
    extra,
  } = props;
  let domRef = useDOMRef(ref);
  size = size || 'S';
  let sizeVariant = sizeMap[size];
  const { dialogProps, titleProps } = useDialog(
    mergeProps(contextProps, props),
    domRef
  );

  return (
    <FocusScope contain restoreFocus>
      <section
        {...dialogProps}
        className={classNames('ac-dialog', {
          [`ac-dialog--${sizeVariant}`]: sizeVariant,
          [`ac-dialog--${type}`]: type,
          'ac-dialog--dismissable': isDismissable,
        })}
        ref={domRef}
        css={dialogCSS}
      >
        <Heading
          level={2}
          {...titleProps}
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: ${theme.spacing.padding8}px ${theme.spacing.padding16}px;
            border-bottom: 1px solid ${theme.colors.gray500};
            flex: none;
          `}
        >
          {title}
          <div
            css={css`
              display: flex;
              flex-direction: row;
              .ac-dialog__dismiss-button {
                margin-left: ${theme.spacing.margin8}px;
              }
            `}
          >
            {extra}
            {isDismissable && (
              <Button
                variant="default"
                aria-label="dismiss"
                onClick={onDismiss}
                icon={<Icon svg={<CloseOutline />} />}
                size="compact"
                className="ac-dialog__dismiss-button"
              />
            )}
          </div>
        </Heading>
        {children}
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
