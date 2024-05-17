import {
  ReactNode,
  SyntheticEvent,
  ElementType,
  JSXElementConstructor,
} from 'react';
import { AriaLabelingProps, FocusableDOMProps, FocusableProps } from '.';

interface AriaBaseButtonProps extends FocusableDOMProps, AriaLabelingProps {
  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  'aria-expanded'?: boolean | 'true' | 'false';
  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  'aria-haspopup'?:
    | boolean
    | 'menu'
    | 'listbox'
    | 'tree'
    | 'grid'
    | 'dialog'
    | 'true'
    | 'false';
  /** Identifies the element (or elements) whose contents or presence are controlled by the current element. */
  'aria-controls'?: string;
  /** Indicates the current "pressed" state of toggle buttons. */
  'aria-pressed'?: boolean | 'true' | 'false' | 'mixed';
  /**
   * The behavior of the button when used in an HTML form.
   */
  type?: 'button' | 'submit' | 'reset';
}

export interface AriaButtonElementTypeProps<T extends ElementType = 'button'> {
  /**
   * The HTML element or React element used to render the button, e.g. 'div', 'a', or `RouterLink`.
   * @default 'button'
   */
  elementType?: T | JSXElementConstructor<any>;
}

export interface LinkButtonProps<T extends ElementType = 'button'>
  extends AriaButtonElementTypeProps<T> {
  /** A URL to link to if elementType="a". */
  href?: string;
  /** The target window for the link. */
  target?: string;
  /** The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel). */
  rel?: string;
}

export interface AriaButtonProps<T extends ElementType = 'button'>
  extends ButtonProps,
    LinkButtonProps<T>,
    AriaBaseButtonProps {}

export interface BaseButtonProps extends AriaBaseButtonProps {
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /** The content to display in the button. */
  children?: ReactNode;
}

export interface ButtonProps extends BaseButtonProps, FocusableProps {
  children?: ReactNode | string;
  variant: 'primary' | 'default' | 'danger' | 'quiet' | 'success';
  disabled?: boolean;
  className?: string;
  onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  icon?: ReactNode;
  /**
   * The title of the button. Required if only showing an icon
   */
  title?: string;
  /**
   * The size of the button
   * @default 'normal'
   */
  size?: 'normal' | 'compact';
}
