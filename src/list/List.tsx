import React, {
  ReactNode,
  Children,
  cloneElement,
  isValidElement,
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
  children: ReactNode;
}
export function List({
  children,
  size = 'default',
  interactive = true,
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
  children: ReactNode;
}

const listItemCSS = (size: ListSize) => {
  const spacing =
    size === 'small' ? theme.spacing.padding8 : theme.spacing.padding16;
  return css`
    padding: ${spacing}px;
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

export function ListItem({ children, size = 'default' }: ListItemProps) {
  return <li css={listItemCSS(size)}>{children}</li>;
}
