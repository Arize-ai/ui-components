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

export type ListSize = 'small' | 'default';

const interactiveListCSS = css`
  & > li:hover {
    background-color: var(--ac-global-background-color-light-hover);
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
  className?: string;
}
export function List({
  children,
  listSize = 'default',
  interactive = false,
  noPadding = false,
  className,
}: ListProps) {
  return (
    <ul
      className={`ac-list${className ? ` ${className}` : ''}`}
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
  className?: string;
}

const listItemCSS = (options: {
  noPadding: boolean;
  listSize?: ListSize;
  interactive: boolean;
}) => {
  const spacing =
    options.listSize === 'small'
      ? 'var(--ac-global-dimension-static-size-100)'
      : 'var(--ac-global-dimension-static-size-200)';
  const innerPadding = options.noPadding ? 0 : spacing;
  return css`
    padding: ${innerPadding};
    position: relative;
    &:hover {
      background-color: ${options.interactive
        ? 'var(--ac-global-background-color-light-hover)'
        : 'transparent'};
      cursor: ${options.interactive ? 'pointer' : 'default'};
    }

    &:not(:first-of-type)::after {
      content: ' ';
      border-top: 1px solid var(--ac-global-border-color-default);
      position: absolute;
      left: ${spacing};
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
  className,
  onClick,
}: ListItemProps) {
  return (
    <li
      className={`ac-list-item${
        className !== undefined ? ` ${className}` : ''
      }`}
      css={listItemCSS({ listSize, noPadding, interactive })}
      onClick={onClick}
    >
      {children}
    </li>
  );
}
