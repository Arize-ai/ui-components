import React, { Key, ReactElement } from 'react';
import { css } from '@emotion/react';
import { ListBox, ListBoxProps } from '../listbox';
import { DOMRef } from '../types';
import { useDOMRef } from '../utils';
import theme from '../theme';

export interface NavListProps<T>
  extends Omit<
    ListBoxProps<T>,
    | 'selectionMode'
    | 'defaultSelectedKeys'
    | 'onSelectionChange'
    | 'disallowEmptySelection'
  > {
  defaultSelectedKey?: Key;
  onSelectionChange?: (key: Key) => void;
}

const navCSS = css`
  .ac-menu-item__selected-checkmark {
    visibility: hidden;
  }
  .ac-menu-item {
    margin-left: var(--ac-global-dimension-static-size-100);
    border-radius: ${theme.rounding.rounding4}px;
    position: relative;
    overflow: visible;
    &.is-selected {
      background-color: var(--ac-global-color-grey-200);
      &::before {
        position: absolute;
        display: block;
        content: '';
        background-color: var(--ac-global-color-primary);
        width: 4px;
        height: calc(100% - 4px);
        left: -8px;
        border-radius: ${theme.rounding.rounding4}px;
      }
    }
    &:hover {
      background-color: var(--ac-global-color-grey-300);
    }
  }
`;
function NavList<T>(props: NavListProps<T>, ref: DOMRef<HTMLElement>) {
  const { defaultSelectedKey, onSelectionChange, ...listBoxProps } = props;
  const domRef = useDOMRef<HTMLElement>(ref);
  return (
    <nav ref={domRef} css={navCSS} className="ac-nav-list">
      <ListBox
        {...listBoxProps}
        selectionMode="single"
        defaultSelectedKeys={
          defaultSelectedKey ? [defaultSelectedKey] : undefined
        }
        onSelectionChange={keys => {
          if (keys !== 'all' && onSelectionChange) {
            onSelectionChange(keys.values().next().value);
          }
        }}
        disallowEmptySelection
      ></ListBox>
    </nav>
  );
}

/**
 * A list of navigational items
 */
const _NavList = React.forwardRef(NavList) as <T>(
  props: NavListProps<T> & { ref?: DOMRef<HTMLElement> }
) => ReactElement;
export { _NavList as NavList };
