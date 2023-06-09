import React, { CSSProperties } from 'react';
import { classNames } from '../utils/classNames';
import { mergeProps } from '@react-aria/utils';
import { useButton } from '@react-aria/button';
import { useHover } from '@react-aria/interactions';
import { FocusableRef, PressEvents } from '../types';
import { useFocusableRef } from '../utils/useDOMRef';
import { BaseButtonProps } from '../types/button';
import { css } from '@emotion/react';
import { theme } from '../theme';

interface ActionButtonProps extends BaseButtonProps, PressEvents {
  style?: CSSProperties;
  /**
   * Whether the button gets button styles removed or not
   * @default false
   */
  isQuiet?: boolean;
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
  const { isDisabled, children, style, isQuiet = false, ...otherProps } = props;
  const { buttonProps, isPressed } = useButton(props, domRef);
  const { hoverProps, isHovered } = useHover({ isDisabled });

  return (
    <button
      {...mergeProps(buttonProps, hoverProps, otherProps)}
      ref={domRef}
      className={classNames('ac-action-button', {
        'is-active': isPressed,
        'is-disabled': isDisabled,
        'is-hovered': isHovered,
      })}
      style={style}
      css={isQuiet ? quietButtonCSS : null}
    >
      {children}
    </button>
  );
}

const quietButtonCSS = css`
  border: none;
  margin: 0;
  padding: 0 0;
  color: inherit;
  background: none;
  cursor: pointer;
  border-radius: ${theme.rounding.rounding4}px;
  opacity: 0.8;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
  svg {
    padding: var(--ac-dimension-size-85);
  }
`;

/**
 * ActionButtons allow users to perform an action.
 * They’re used for similar, task-based options within a workflow, and are ideal for interfaces where buttons aren’t meant to draw a lot of attention.
 */
let _ActionButton = React.forwardRef(ActionButton);
export { _ActionButton as ActionButton };
