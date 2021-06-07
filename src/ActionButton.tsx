import React, { ReactNode, CSSProperties } from 'react';
import { classNames } from './utils/classNames';
import { mergeProps } from '@react-aria/utils';
import { useButton } from '@react-aria/button';
import { useHover } from '@react-aria/interactions';
import { FocusableRef } from './types';
import { useFocusableRef } from './utils/useDOMRef';

interface ButtonProps {
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /** The content to display in the button. */
  children?: ReactNode;
  style?: CSSProperties;
}

/**
 * A button that performs an action (e.g. open a popover)
 * @param props
 * @param ref
 * @returns
 */
function ActionButton(
  props: ButtonProps,
  ref: FocusableRef<HTMLButtonElement>
) {
  let domRef = useFocusableRef(ref);
  const { isDisabled, children, style, ...otherProps } = props;
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
      style={style}
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
