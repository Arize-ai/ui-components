import React, {
  ReactNode,
  Children,
  cloneElement,
  isValidElement,
  SyntheticEvent,
  HTMLProps,
  ReactElement,
} from 'react';
import { css } from '@emotion/react';
import theme from '../theme';

export type ListSize = 'small' | 'default';

const interactiveListCSS = css`
  & > li:hover {
    background-color: ${theme.colors.hoverBgColor};
    cursor: pointer;
  }
`;
export interface ListProps extends HTMLProps<HTMLUListElement> {
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
  children: ReactNode;
  /**
   * Whether or not the list is interactive (e.g. provide hover color)
   * Note: child ListItem styles may clash if both interactive properties are provided
   * @default false
   */
  interactive?: boolean;
}
export function List({
  children,
  listSize = 'default',
  interactive = false,
  noPadding = false,
}: ListProps) {
  return (
    <ul
      className="ac-list"
      css={css(
        css`
          list-style: none;
          padding: 0;
          margin: 0;
        `,
        interactive ? interactiveListCSS : null
      )}
    >
      {Children.map(children, child => {
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement<ListItemProps>, {
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
  /**
   * Whether or not the list item is interactive (e.g. provide hover color)
   * Note that parent List styles may clash if both interactive properties are provided
   * @default true
   */
  interactive?: boolean;
}

const listItemCSS = (options: {
  noPadding: boolean;
  listSize?: ListSize;
  interactive: boolean;
}) => {
  const spacing =
    options.listSize === 'small'
      ? theme.spacing.padding8
      : theme.spacing.padding16;
  const innerPadding = options.noPadding ? 0 : spacing;
  return css`
    padding: ${innerPadding}px;
    position: relative;
    &:hover {
      background-color: ${options.interactive
        ? theme.colors.hoverBgColor
        : 'transparent'};
      cursor: ${options.interactive ? 'pointer' : 'default'};
    }

    &:not(:first-of-type)::after {
      content: ' ';
      border-top: 1px solid var(--ac-global-border-color-default);
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
  interactive = false,
  onClick,
}: ListItemProps) {
  return (
    <li
      className="ac-list-item"
      css={listItemCSS({ listSize, noPadding, interactive })}
      onClick={onClick}
    >
      {children}
    </li>
  );
}
