import React, { ReactNode, forwardRef, useRef } from 'react';
import {
  AriaLabelingProps,
  FocusableDOMProps,
  FocusableProps,
  FocusableRef,
  InputBase,
} from '../types';
import { classNames, useFocusableRef } from '../utils';
import { useSwitch } from '@react-aria/switch';
import { useHover } from '@react-aria/interactions';
import { useToggleState } from '@react-stately/toggle';
import { FocusRing } from '@react-aria/focus';
import { switchCSS } from './styles';

interface SwitchBase extends InputBase, FocusableProps {
  /**
   * The content to render as the Switch's label.
   */
  children?: ReactNode;
  /**
   * Whether the Switch should be selected (uncontrolled).
   */
  defaultSelected?: boolean;
  /**
   * Whether the Switch should be selected (controlled).
   */
  isSelected?: boolean;
  /**
   * Handler that is called when the Switch's selection state changes.
   */
  onChange?: (isSelected: boolean) => void;
  /**
   * The value of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefvalue).
   */
  value?: string;
  /**
   * The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
   */
  name?: string;
}

export interface BaseSwitchProps extends SwitchBase {}
export interface AriaSwitchBase
  extends SwitchBase,
    FocusableDOMProps,
    AriaLabelingProps {
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current element.
   */
  'aria-controls'?: string;
}
export interface AriaSwitchProps extends BaseSwitchProps, AriaSwitchBase {}

export interface SwitchProps extends AriaSwitchProps {}
function Switch(props: SwitchProps, ref: FocusableRef<HTMLLabelElement>) {
  const { isDisabled, autoFocus, children } = props;
  const { hoverProps, isHovered } = useHover({ isDisabled: isDisabled });
  const domRef = useFocusableRef(ref);
  const inputRef = useRef<HTMLInputElement>(null);
  const state = useToggleState(props);

  const { inputProps } = useSwitch(props, state, inputRef);
  return (
    <label
      {...hoverProps}
      ref={domRef}
      className={classNames({
        'ac-switch': true,
        'is-disabled': isDisabled,
        'is-hovered': isHovered,
        'is-selected': state.isSelected,
      })}
      css={switchCSS}
    >
      <FocusRing focusRingClass={'focus-ring'} autoFocus={autoFocus}>
        <input
          {...inputProps}
          ref={inputRef}
          className={classNames('ac-switch-input')}
        />
      </FocusRing>
      <span className={'ac-switch-element'} />
      {children && <span className={'ac-switch-label'}>{children}</span>}
    </label>
  );
}

/**
 * Switches allow users to turn an individual option on or off.
 * They are usually used to activate or deactivate a specific setting.
 */
const _Switch = forwardRef(Switch);
export { _Switch as Switch };
