import { mergeProps } from '@react-aria/utils';
import React, { useRef, Ref, ReactNode, RefObject } from 'react';
import { useButton } from '@react-aria/button';
import { useHover } from '@react-aria/interactions';

interface ButtonProps {
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /** The content to display in the button. */
  children?: ReactNode;
}

function useButtonRef(
  ref: Ref<HTMLButtonElement>
): RefObject<HTMLButtonElement> {
  const fallbackRef = useRef<HTMLButtonElement>(null);
  return (ref || fallbackRef) as RefObject<HTMLButtonElement>;
}

function ActionButton(props: ButtonProps, ref: Ref<HTMLButtonElement>) {
  const buttonRef = useButtonRef(ref);
  const { isDisabled, children } = props;
  const { buttonProps, isPressed } = useButton(props, buttonRef);
  const { hoverProps, isHovered } = useHover({ isDisabled });

  return (
    <button
      {...mergeProps(buttonProps, hoverProps)}
      ref={buttonRef}
      className={`${isPressed ? 'is-active' : ''} ${
        isDisabled ? 'is-disabled' : ''
      } ${isHovered ? 'is-hovered' : ''}`}
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
