import React, {
  ReactNode,
  Children,
  cloneElement,
  isValidElement,
  SyntheticEvent,
  HTMLProps,
} from 'react';
import { css } from '@emotion/core';
import theme from '../theme';

export type ListSize = 'small' | 'default';
export interface ListProps extends HTMLProps<HTMLUListElement> {
  /**
   * The list size
   * @default 'default'
   */
  listSize?: ListSize;
  /**
   * Whether or not the list is interactive (e.g. provide hover color)
   * @default true
   */
  interactive?: boolean;
  /**
   * Whether or not to strip the inner padding.
   * Useful for when the contents uses a link
   * @default false
   */
  noPadding?: boolean;
  children: ReactNode;
}
export function List({
  children,
  listSize = 'default',
  interactive = true,
  noPadding = false,
}: ListProps) {
  return (
    <ul
      css={css`
        list-style: none;
        padding: 0;
        margin: 0;
        & > li:hover {
          background-color: ${interactive
            ? theme.colors.hoverBgColor
            : 'transparent'};
          cursor: ${interactive ? 'pointer' : 'default'};
        }
      `}
    >
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            listSize,
            noPadding,
          });
        }
        return null;
      })}
    </ul>
  );
}

export interface ListItemProps extends HTMLProps<HTMLLIElement> {
  /**
   * The list size
   * @default 'default'
   */
  listSize?: ListSize;
  /**
   * Whether or not to strip the inner padding.
   * Useful for when the contents uses a link
   * @default false
   */
  noPadding?: boolean;
  onClick?: (e: SyntheticEvent<HTMLLIElement>) => void;
  children: ReactNode;
}

const listItemCSS = (options: { noPadding: boolean; listSize?: ListSize }) => {
  const spacing =
    options.listSize === 'small'
      ? theme.spacing.padding8
      : theme.spacing.padding16;
  const innerPadding = options.noPadding ? 0 : spacing;
  return css`
    padding: ${innerPadding}px;
    position: relative;

    &:not(:first-of-type)::after {
      content: ' ';
      border-top: 1px solid ${theme.colors.dividerColor};
      position: absolute;
      left: ${spacing}px;
      right: 0;
      top: 0;
    }
  `;
};

export function ListItem({
  children,
  listSize = 'default',
  noPadding = false,
  onClick,
}: ListItemProps) {
  return (
    <li css={listItemCSS({ listSize, noPadding })} onClick={onClick}>
      {children}
    </li>
  );
}
