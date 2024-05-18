import React, { ReactElement, CSSProperties, ReactNode, Key } from 'react';
import { useListState } from '@react-stately/list';
import { useDOMRef } from '../utils';
import {
  AriaLabelingProps,
  CollectionBase,
  DOMProps,
  DOMRef,
  MultipleSelection,
  SelectionBehavior,
} from '../types';
import { ListBoxBase, useListBoxLayout } from './ListBoxBase';

export interface ListBoxPropsBase<T>
  extends CollectionBase<T>,
    MultipleSelection {
  /** Whether to auto focus the listbox. */
  autoFocus?: boolean;
  /** Whether focus should wrap around when the end/start is reached. */
  shouldFocusWrap?: boolean;
  style?: CSSProperties;
}

interface AriaListBoxPropsBase<T>
  extends ListBoxPropsBase<T>,
    DOMProps,
    AriaLabelingProps {}
export interface ListBoxProps<T> extends AriaListBoxPropsBase<T> {
  /**
   * An optional visual label for the listbox.
   */
  label?: ReactNode;
  /** How multiple selection should behave in the collection. */
  selectionBehavior?: SelectionBehavior;
  /**
   * Handler that is called when a user performs an action on an item. The exact user event depends on
   * the collection's `selectionBehavior` prop and the interaction modality.
   */
  onAction?: (key: Key) => void;
}

function ListBox<T extends object>(
  props: ListBoxProps<T>,
  ref: DOMRef<HTMLDivElement>
) {
  const state = useListState(props);
  const layout = useListBoxLayout(state);
  const domRef = useDOMRef(ref);

  return <ListBoxBase {...props} ref={domRef} state={state} layout={layout} />;
}

// forwardRef doesn't support generic parameters, so cast the result to the correct type
// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref

/**
 * A list of options that can allow selection of one or more.
 */
const _ListBox = React.forwardRef(ListBox) as <T>(
  props: ListBoxProps<T> & { ref?: DOMRef<HTMLDivElement> }
) => ReactElement;
export { _ListBox as ListBox };
