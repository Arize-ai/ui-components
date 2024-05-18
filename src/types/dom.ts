import {
  ClipboardEventHandler,
  CompositionEventHandler,
  DOMFactory,
  FormEventHandler,
  HTMLAttributeAnchorTarget,
  HTMLAttributeReferrerPolicy,
  HTMLAttributes,
  ReactDOM,
  ReactEventHandler,
} from 'react';

export interface AriaLabelingProps {
  /**
   * Defines a string value that labels the current element.
   */
  'aria-label'?: string;

  /**
   * Identifies the element (or elements) that labels the current element.
   */
  'aria-labelledby'?: string;

  /**
   * Identifies the element (or elements) that describes the object.
   */
  'aria-describedby'?: string;

  /**
   * Identifies the element (or elements) that provide a detailed, extended description for the object.
   */
  'aria-details'?: string;
}

// Make sure to update filterDOMProps.ts when updating this.
export interface LinkDOMProps {
  /** A URL to link to. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href). */
  href?: string;
  /** The target window for the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target). */
  target?: HTMLAttributeAnchorTarget;
  /** The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel). */
  rel?: string;
  /** Causes the browser to download the linked URL. A string may be provided to suggest a file name. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download). */
  download?: boolean | string;
  /** A space-separated list of URLs to ping when the link is followed. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#ping). */
  ping?: string;
  /** How much of the referrer to send when following the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#referrerpolicy). */
  referrerPolicy?: HTMLAttributeReferrerPolicy;
}

export interface AriaValidationProps {
  // https://www.w3.org/TR/wai-aria-1.2/#aria-errormessage
  /**
   * Identifies the element that provides an error message for the object.
   */
  'aria-errormessage'?: string;
}

// A set of common DOM props that are allowed on any component
// Ensure this is synced with DOMPropNames in filterDOMProps
export interface DOMProps {
  /**
   * The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).
   */
  id?: string;
}

export interface FocusableDOMProps extends DOMProps {
  /**
   * Whether to exclude the element from the sequential tab order. If true,
   * the element will not be focusable via the keyboard by tabbing. This should
   * be avoided except in rare scenarios where an alternative means of accessing
   * the element or its functionality via the keyboard is available.
   */
  excludeFromTabOrder?: boolean;
}

export interface InputDOMProps {
  /**
   * The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
   */
  name?: string;
}

// DOM props that apply to all text inputs
// Ensure this is synced with useTextField
export interface TextInputDOMProps extends DOMProps {
  /**
   * Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).
   */
  autoComplete?: string;

  /**
   * The maximum number of characters supported by the input. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength).
   */
  maxLength?: number;

  /**
   * The minimum number of characters required by the input. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefminlength).
   */
  minLength?: number;

  /**
   * The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
   */
  name?: string;

  /**
   * Regex pattern that the value of the input must match to be valid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern).
   */
  pattern?: string;

  /**
   * Content that appears in the input when it is empty. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefplaceholder).
   */
  placeholder?: string;

  /**
   * The type of input to render. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdeftype).
   */
  type?: 'text' | 'search' | 'url' | 'tel' | 'email' | 'password' | string;

  /**
   * Hints at the type of data that might be entered by the user while editing the element or its contents. See [MDN](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute).
   */
  inputMode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search';

  // Clipboard events
  /**
   * Handler that is called when the user copies text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncopy).
   */
  onCopy?: ClipboardEventHandler<HTMLInputElement>;

  /**
   * Handler that is called when the user cuts text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncut).
   */
  onCut?: ClipboardEventHandler<HTMLInputElement>;

  /**
   * Handler that is called when the user pastes text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/onpaste).
   */
  onPaste?: ClipboardEventHandler<HTMLInputElement>;

  // Composition events
  /**
   * Handler that is called when a text composition system starts a new text composition session. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionstart_event).
   */
  onCompositionStart?: CompositionEventHandler<HTMLInputElement>;

  /**
   * Handler that is called when a text composition system completes or cancels the current text composition session. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionend_event).
   */
  onCompositionEnd?: CompositionEventHandler<HTMLInputElement>;

  /**
   * Handler that is called when a new character is received in the current text composition session. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionupdate_event).
   */
  onCompositionUpdate?: CompositionEventHandler<HTMLInputElement>;

  // Selection events
  /**
   * Handler that is called when text in the input is selected. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/select_event).
   */
  onSelect?: ReactEventHandler<HTMLInputElement>;

  // Input events
  /**
   * Handler that is called when the input value is about to be modified. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event).
   */
  onBeforeInput?: FormEventHandler<HTMLInputElement>;
  /**
   * Handler that is called when the input value is modified. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event).
   */
  onInput?: FormEventHandler<HTMLInputElement>;
}

/**
 * A map of HTML element names and their interface types.
 * For example `'a'` -> `HTMLAnchorElement`.
 */
export type IntrinsicHTMLElements = {
  [K in keyof IntrinsicHTMLAttributes]: IntrinsicHTMLAttributes[K] extends HTMLAttributes<
    infer T
  >
    ? T
    : never;
};

/**
 * A map of HTML element names and their attribute interface types.
 * For example `'a'` -> `AnchorHTMLAttributes<HTMLAnchorElement>`.
 */
export type IntrinsicHTMLAttributes = {
  [K in keyof ReactDOM]: ReactDOM[K] extends DOMFactory<infer T, any>
    ? T
    : never;
};
