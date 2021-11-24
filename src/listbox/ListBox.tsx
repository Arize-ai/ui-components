import { DOMRef } from '@react-types/shared';
import { ListBoxBase, useListBoxLayout } from './ListBoxBase';
import React, { ReactElement, CSSProperties } from 'react';
import { useDOMRef } from '../utils';
import { useListState } from '@react-stately/list';
import { CollectionBase, MultipleSelection } from '../types';

export interface ListBoxProps<T> extends CollectionBase<T>, MultipleSelection {
  /** Whether to auto focus the listbox. */
  autoFocus?: boolean;
  /** Whether focus should wrap around when the end/start is reached. */
  shouldFocusWrap?: boolean;
  style?: CSSProperties;
}

function ListBox<T extends object>(
  props: ListBoxProps<T>,
  ref: DOMRef<HTMLDivElement>
) {
  let state = useListState(props);
  let layout = useListBoxLayout(state);
  let domRef = useDOMRef(ref);

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
