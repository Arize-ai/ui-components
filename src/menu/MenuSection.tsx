import React, { Fragment, Key } from 'react';
import { TreeState } from '@react-stately/tree';
import { useMenuSection } from '@react-aria/menu';
import { useSeparator } from '@react-aria/separator';
import { getChildNodes } from '@react-stately/collections';
import { css } from '@emotion/react';
import theme from '../theme';
import { Node } from '../types';
import { MenuItem } from './MenuItem';
interface MenuSectionProps<T> {
  item: Node<T>;
  state: TreeState<T>;
  onAction?: (key: Key) => void;
}

/** @private */
export function MenuSection<T>(props: MenuSectionProps<T>) {
  const { item, state, onAction } = props;
  const { itemProps, headingProps, groupProps } = useMenuSection({
    heading: item.rendered,
    'aria-label': item['aria-label'],
  });

  const { separatorProps } = useSeparator({
    elementType: 'li',
  });

  return (
    <Fragment>
      {item.key !== state.collection.getFirstKey() && (
        <li
          {...separatorProps}
          className={'ac-menu-divider'}
          css={css`
            border-bottom: 1px solid ${theme.components.dropdown.borderColor};
          `}
        />
      )}
      <li {...itemProps}>
        {item.rendered && (
          <span
            {...headingProps}
            className={'ac-menu__section-heading'}
            css={css`
              display: inline-block;
              margin: var(--ac-global-dimension-static-size-100)
                var(--ac-global-dimension-static-size-200);
              font-size: ${theme.typography.sizes.small.fontSize}px;
              color: var(--ac-global-color-text-700);
            `}
          >
            {item.rendered}
          </span>
        )}
        <ul
          {...groupProps}
          className={'ac-menu'}
          css={css`
            padding: 0;
          `}
        >
          {[...getChildNodes(item, state.collection)].map(node => {
            let item = (
              <MenuItem
                key={node.key}
                item={node}
                state={state}
                onAction={onAction}
              />
            );

            if (node.wrapper) {
              item = node.wrapper(item);
            }

            return item;
          })}
        </ul>
      </li>
    </Fragment>
  );
}
