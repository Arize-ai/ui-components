import { FocusScope } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import React, { useContext } from 'react';
import { useDialog } from '@react-aria/dialog';
import { css } from '@emotion/react';
import { DialogProps } from '../types/dialog';
import { Heading } from '../content';
import { CloseOutline, Icon } from '../icon';
import { classNames, useDOMRef } from '../utils';
import { Button } from '../button';
import { DOMRef } from '../types';
import { DialogContext, DialogContextValue } from './context';

const dialogCSS = css`
  outline: none;
  &.ac-dialog--slideOver {
    height: 100vh;
    display: flex;
    flex-direction: column;
    &.ac-dialog--small {
      width: 400px;
    }
    &.ac-dialog--medium {
      width: 700px;
    }
    &.ac-dialog--large {
      width: 900px;
    }
    &.ac-dialog--extraLarge {
      width: 1600px;
      max-width: calc(100vw - var(--ac-global-dimension-static-size-1700));
    }
    &.ac-dialog--fullscreen {
      width: calc(100vw - var(--ac-global-dimension-static-size-1700));
      @media (min-width: var(--ac-global-dimension-static-breakpoint-medium)) {
        width: calc(100vw - var(--ac-global-dimension-static-size-3400));
      }
    }
  }

  &.ac-dialog--modal {
    display: flex;
    flex-direction: column;

    &.ac-dialog--small {
      width: 500px;
    }
    &.ac-dialog--medium {
      width: 700px;
    }
    &.ac-dialog--large {
      width: 900px;
    }
    &.ac-dialog--extraLarge {
      width: 1600px;
      max-width: calc(100vw - var(--ac-global-dimension-static-size-1700));
    }
    &.ac-dialog--fullscreen {
      width: calc(100vw - var(--ac-global-dimension-static-size-1700));
      @media (min-width: var(--ac-global-dimension-static-breakpoint-medium)) {
        width: calc(100vw - var(--ac-global-dimension-static-size-3400));
      }
    }
  }
`;
const sizeMap: Record<NonNullable<DialogProps['size']>, string> = {
  S: 'small',
  M: 'medium',
  L: 'large',
  XL: 'extraLarge',
  fullscreen: 'fullscreen',
  // fullscreenTakeover: 'fullscreenTakeover',
};

function Dialog(props: DialogProps, ref: DOMRef) {
  const { type = 'modal', ...contextProps } =
    useContext(DialogContext) || ({} as DialogContextValue);
  let {
    children,
    isDismissable = contextProps.isDismissable,
    onDismiss = contextProps.onClose,
    size,
    title,
    extra,
  } = props;
  const domRef = useDOMRef(ref);
  size = size || 'S';
  const sizeVariant = sizeMap[size];
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
            padding: var(--ac-global-dimension-static-size-100)
              var(--ac-global-dimension-static-size-200);
            border-bottom: 1px solid var(--ac-global-border-color-dark);
            flex: none;
          `}
        >
          {title}
          <div
            css={css`
              display: flex;
              flex-direction: row;
              .ac-dialog__dismiss-button {
                margin-left: var(--ac-global-dimension-static-size-100);
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
const _Dialog = React.forwardRef(Dialog);
export { _Dialog as Dialog };
