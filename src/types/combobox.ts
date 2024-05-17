import { StyleProps } from './style';
import { Validation, TextInputBase, InputBase, HelpTextProps } from './input';
import { AsyncLoadable, CollectionBase, LoadingState } from './collection';
import { LabelableProps } from './labelable';
import { AriaLabelingProps, DOMProps, InputDOMProps } from './dom';
import { SingleSelection } from './selection';
import { Key } from './key';
import { FocusableProps } from './events';
import { DimensionValue } from './core';

export type MenuTriggerAction = 'focus' | 'input' | 'manual';

export interface ComboBoxValidationValue {
  /** The selected key in the ComboBox. */
  selectedKey: Key;
  /** The value of the ComboBox input. */
  inputValue: string;
}

export interface ComboBoxProps<T>
  extends CollectionBase<T>,
    Omit<SingleSelection, 'disallowEmptySelection' | 'onSelectionChange'>,
    InputBase,
    TextInputBase,
    Validation<ComboBoxValidationValue>,
    FocusableProps<HTMLInputElement>,
    LabelableProps,
    HelpTextProps {
  /** The list of ComboBox items (uncontrolled). */
  defaultItems?: Iterable<T>;
  /** The list of ComboBox items (controlled). */
  items?: Iterable<T>;
  /** Method that is called when the open state of the menu changes. Returns the new open state and the action that caused the opening of the menu. */
  onOpenChange?: (isOpen: boolean, menuTrigger?: MenuTriggerAction) => void;
  /** Handler that is called when the selection changes. */
  onSelectionChange?: (key: Key | null) => void;
  /** The value of the ComboBox input (controlled). */
  inputValue?: string;
  /** The default value of the ComboBox input (uncontrolled). */
  defaultInputValue?: string;
  /** Handler that is called when the ComboBox input value changes. */
  onInputChange?: (value: string) => void;
  /** Whether the ComboBox allows a non-item matching input value to be set. */
  allowsCustomValue?: boolean;
  // /**
  //  * Whether the Combobox should only suggest matching options or autocomplete the field with the nearest matching option.
  //  * @default 'suggest'
  //  */
  // completionMode?: 'suggest' | 'complete',
  /**
   * The interaction required to display the ComboBox menu.
   * @default 'input'
   */
  menuTrigger?: MenuTriggerAction;
}

export interface AriaComboBoxProps<T>
  extends ComboBoxProps<T>,
    DOMProps,
    InputDOMProps,
    AriaLabelingProps {
  /** Whether keyboard navigation is circular. */
  shouldFocusWrap?: boolean;
}

export interface ACComboBoxProps<T>
  extends TextInputBase,
    Omit<AriaComboBoxProps<T>, 'menuTrigger' | 'isInvalid' | 'validationState'>,
    Validation<ComboBoxValidationValue>,
    LabelableProps,
    StyleProps,
    Omit<AsyncLoadable, 'isLoading'> {
  /**
   * The interaction required to display the ComboBox menu. Note that this prop has no effect on the mobile ComboBox experience.
   * @default 'input'
   */
  menuTrigger?: MenuTriggerAction;
  /** Whether the ComboBox should be displayed with a quiet style. */
  isQuiet?: boolean;
  /** Alignment of the menu relative to the input target.
   * @default 'end'
   */
  align?: 'start' | 'end';
  /**
   * Direction the menu will render relative to the ComboBox.
   * @default 'bottom'
   */
  direction?: 'bottom' | 'top';
  /** The current loading state of the ComboBox. Determines whether or not the progress circle should be shown. */
  loadingState?: LoadingState;
  /**
   * Whether the menu should automatically flip direction when space is limited.
   * @default true
   */
  shouldFlip?: boolean;
  /** Width of the menu. By default, matches width of the combobox. Note that the minimum width of the dropdown is always equal to the combobox's width. */
  menuWidth?: DimensionValue;
  /**
   * Whether the text or key of the selected item is submitted as part of an HTML form.
   * When `allowsCustomValue` is `true`, this option does not apply and the text is always submitted.
   * @default 'text'
   */
  formValue?: 'text' | 'key';
}
