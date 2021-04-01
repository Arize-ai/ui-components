import React, {
  ReactNode,
  Children,
  cloneElement,
  isValidElement,
  SyntheticEvent,
} from 'react';
import { css } from '@emotion/core';
import theme from '../theme';

export type ListSize = 'small' | 'default';
export interface ListProps {
  /**
   * The list size
   * @default 'default'
   */
  size?: ListSize;
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
  size = 'default',
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
        }
      `}
    >
      {Children.map(children, child => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            size,
            noPadding,
          });
        }
        return null;
      })}
    </ul>
  );
}

export interface ListItemProps {
  /**
   * The list size
   * @default 'default'
   */
  size?: ListSize;
  /**
   * Whether or not to strip the inner padding.
   * Useful for when the contents uses a link
   * @default false
   */
  noPadding?: boolean;
  onClick?: (e: SyntheticEvent<HTMLLIElement>) => void;
  children: ReactNode;
}

const listItemCSS = (options: { noPadding: boolean; size?: ListSize }) => {
  const spacing =
    options.size === 'small' ? theme.spacing.padding8 : theme.spacing.padding16;
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
  size = 'default',
  noPadding = false,
  onClick,
}: ListItemProps) {
  return (
    <li css={listItemCSS({ size, noPadding })} onClick={onClick}>
      {children}
    </li>
  );
}
