import { Key } from 'react';

export interface SingleSelection {
  /** Whether the collection allows empty selection. */
  disallowEmptySelection?: boolean;
  /** The currently selected key in the collection (controlled). */
  selectedKey?: Key;
  /** The initial selected key in the collection (uncontrolled). */
  defaultSelectedKey?: Key;
  /** Handler that is called when the selection changes. */
  onSelectionChange?: (key: Key) => any;
}

export type SelectionMode = 'none' | 'single' | 'multiple';
export type SelectionBehavior = 'toggle' | 'replace';
export type Selection = 'all' | Set<Key>;
export interface MultipleSelection {
  /** The type of selection that is allowed in the collection. */
  selectionMode?: SelectionMode;
  /** Whether the collection allows empty selection. */
  disallowEmptySelection?: boolean;
  /** The currently selected keys in the collection (controlled). */
  selectedKeys?: 'all' | Iterable<Key>;
  /** The initial selected keys in the collection (uncontrolled). */
  defaultSelectedKeys?: 'all' | Iterable<Key>;
  /** Handler that is called when the selection changes. */
  onSelectionChange?: (keys: Selection) => any;
  /** The currently disabled keys in the collection (controlled). */
  disabledKeys?: Iterable<Key>;
}

export interface SpectrumSelectionProps {
  /** How selection should be displayed. */
  selectionStyle?: 'checkbox' | 'highlight';
}

export type FocusStrategy = 'first' | 'last';
