import { LabelableProps, Alignment, AddonableProps } from './labelable';
import { CollectionBase } from './collection';
import { InputBase, TextInputBase } from './input';
import { AriaLabelingProps, DOMProps, FocusableDOMProps } from './dom';
import { SingleSelection } from './selection';
import { FocusableProps } from './events';

export interface SelectProps<T>
  extends CollectionBase<T>,
    Omit<InputBase, 'isReadOnly'>,
    LabelableProps,
    TextInputBase,
    SingleSelection,
    FocusableProps {
  /** Sets the open state of the menu. */
  isOpen?: boolean;
  /** Sets the default open state of the menu. */
  defaultOpen?: boolean;
  /** Method that is called when the open state of the menu changes. */
  onOpenChange?: (isOpen: boolean) => void;
  /**
   * Whether the menu should automatically flip direction when space is limited.
   * @default true
   */
  shouldFlip?: boolean;
}

export interface AriaSelectProps<T>
  extends SelectProps<T>,
    DOMProps,
    AriaLabelingProps,
    FocusableDOMProps {
  /**
   * Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).
   */
  autoComplete?: string;
  /**
   * The name of the input, used when submitting an HTML form.
   */
  name?: string;
}

export interface PickerProps<T> extends AriaSelectProps<T>, AddonableProps {
  /** Alignment of the menu relative to the input target.
   * @default 'start'
   */
  align?: Alignment;
  /**
   * Direction the menu will render relative to the Picker.
   * @default 'bottom'
   */
  direction?: 'bottom' | 'top';
  /** Whether the element should receive focus on render. */
  autoFocus?: boolean;
  /** Whether or not the picker is loading */
  isLoading?: boolean;
  /**
   * When you reach the bottom of a loading list
   */
  onLoadMore?: () => void;
}
