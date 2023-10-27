import { css } from '@emotion/react';
import theme from '../theme';

export const menuItemCSS = css`
  /* show focus in other ways */
  outline: none;
  display: flex;
  align-items: center;
  color: var(--ac-global-text-color-900);
  padding: var(--ac-global-dimension-static-size-100)
    var(--ac-global-dimension-static-size-200);
  font-size: ${theme.typography.sizes.medium.fontSize}px;
  min-width: 80px;
  cursor: pointer;
  position: relative;
  & > .ac-icon-wrap.ac-menu-item__selected-checkmark {
    position: absolute;
    top: var(--ac-global-dimension-static-size-100);
    right: var(--ac-global-dimension-static-size-100);
  }

  & > .ac-icon-wrap:first-child,
  & > i:first-child {
    margin-right: var(--ac-global-dimension-static-size-50);
  }

  &.is-selected {
    i {
      color: var(--ac-global-color-primary);
    }
  }
  &.is-hovered,
  &.focus-ring {
    background-color: var(--ac-global-menu-item-background-color-hover);
  }
  &.is-selectable {
    cursor: pointer;
  }
  &.is-disabled {
    cursor: not-allowed;
    color: var(--ac-global-color-text-30);
  }
`;
