import React from 'react';
import { classNames } from './utils/classNames';
import { mergeProps } from '@react-aria/utils';
import { useButton } from '@react-aria/button';
import { useHover } from '@react-aria/interactions';
import { FocusableRef } from './types';
import { useFocusableRef } from './utils/useDOMRef';
import { AriaButtonProps } from '@react-types/button';
import { StyleProps } from '@react-types/shared';

interface ActionButtonProps extends AriaButtonProps<'button'>, StyleProps {
  /** Whether the button is disabled. */
  isDisabled?: boolean;
}

/**
 * A button that performs an action (e.g. open a popover)
 * @param props
 * @param ref
 * @returns
 */
function ActionButton(
  props: ActionButtonProps,
  ref: FocusableRef<HTMLButtonElement>
) {
  let domRef = useFocusableRef(ref);
  const { isDisabled, children, ...otherProps } = props;
  const { buttonProps, isPressed } = useButton(props, domRef);
  const { hoverProps, isHovered } = useHover({ isDisabled });

  return (
    <button
      {...mergeProps(buttonProps, hoverProps, otherProps)}
      ref={domRef}
      className={classNames('action-button', {
        'is-active': isPressed,
        'is-disabled': isDisabled,
        'is-hovered': isHovered,
      })}
    >
      {children}
    </button>
  );
}

/**
 * ActionButtons allow users to perform an action.
 * They’re used for similar, task-based options within a workflow, and are ideal for interfaces where buttons aren’t meant to draw a lot of attention.
 */
let _ActionButton = React.forwardRef(ActionButton);
export { _ActionButton as ActionButton };
