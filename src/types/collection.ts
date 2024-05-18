import { Key, ReactElement, ReactNode } from 'react';

export interface ItemProps<T> {
  /** Rendered contents of the item or child items. */
  children: ReactNode;
  /** Rendered contents of the item if `children` contains child items. */
  title?: ReactNode; // label?? contents?
  /** A string representation of the item's contents, used for features like typeahead. */
  textValue?: string;
  /** An accessibility label for this item. */
  'aria-label'?: string;
  /** A list of child item objects. Used for dynamic collections. */
  childItems?: Iterable<T>;
  /** Whether this item has children, even if not loaded yet. */
  hasChildItems?: boolean;
}

export type ItemElement<T> = ReactElement<ItemProps<T>>;
export type ItemRenderer<T> = (item: T) => ItemElement<T>;
export type LoadingState =
  | 'loading'
  | 'sorting'
  | 'loadingMore'
  | 'error'
  | 'idle'
  | 'filtering';

export interface SectionProps<T> {
  /** Rendered contents of the section, e.g. a header. */
  title?: ReactNode;
  /** An accessibility label for the section. */
  'aria-label'?: string;
  /** Static child items or a function to render children. */
  children: ItemElement<T> | ItemElement<T>[] | ItemRenderer<T>;
  /** Item objects in the section. */
  items?: Iterable<T>;
}

export type SectionElement<T> = ReactElement<SectionProps<T>>;
export type CollectionElement<T> = SectionElement<T> | ItemElement<T>;

export type CollectionChildren<T> =
  | CollectionElement<T>
  | CollectionElement<T>[]
  | ((item: T) => CollectionElement<T>);
export interface CollectionBase<T> {
  /** The contents of the collection. */
  children: CollectionChildren<T>;
  /** Item objects in the collection. */
  items?: Iterable<T>;
  /** The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with. */
  disabledKeys?: Iterable<Key>;
}

export interface Node<T> {
  /** The type of item this node represents. */
  type: string;
  /** A unique key for the node. */
  key: Key;
  /** The object value the node was created from. */
  value: T | null;
  /** The level of depth this node is at in the heirarchy. */
  level: number;
  /** Whether this item has children, even if not loaded yet. */
  hasChildNodes: boolean;
  /**
   * The loaded children of this node.
   * @deprecated Use `collection.getChildren(node.key)` instead.
   */
  childNodes: Iterable<Node<T>>;
  /** The rendered contents of this node (e.g. JSX). */
  rendered: ReactNode;
  /** A string value for this node, used for features like typeahead. */
  textValue: string;
  /** An accessibility label for this node. */
  'aria-label'?: string;
  /** The index of this node within its parent. */
  index?: number;
  /** A function that should be called to wrap the rendered node. */
  wrapper?: (element: ReactElement) => ReactElement;
  /** The key of the parent node. */
  parentKey?: Key | null;
  /** The key of the node before this node. */
  prevKey?: Key | null;
  /** The key of the node after this node. */
  nextKey?: Key | null;
  /** Additional properties specific to a particular node type. */
  props?: any;
  /** @private */
  shouldInvalidate?: (context: unknown) => boolean;
}
