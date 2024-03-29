import React, { ReactNode, CSSProperties, ReactElement } from 'react';
import { css } from '@emotion/react';
import theme from '../theme';
import { DOMRef } from '../types';

interface DropdownMenuProps {
  children: ReactNode;
  /**
   * whether or not there is inner padding on the dropdown
   * @default false
   */
  isPadded?: boolean;
  style?: CSSProperties;
}

function DropdownMenu(
  { children, isPadded = false, style }: DropdownMenuProps,
  _ref: DOMRef<HTMLDivElement>
) {
  return (
    <div
      css={css`
        background-color: var(--ac-global-menu-background-color);
        border-radius: var(--ac-global-rounding-small);
        color: var(--ac-global-text-color-900);
        padding: ${isPadded ? theme.spacing.padding8 : 0}px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
        border: 1px solid var(--ac-global-menu-border-color);
        max-height: inherit;
      `}
      style={style}
    >
      {children}
    </div>
  );
}

/**
 * Menus display a list of actions or options that a user can choose.
 */
// forwardRef doesn't support generic parameters, so cast the result to the correct type
// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref
const _DropdownMenu = React.forwardRef(DropdownMenu) as (
  props: DropdownMenuProps & { ref?: DOMRef<HTMLUListElement> }
) => ReactElement;
export { _DropdownMenu as DropdownMenu };
