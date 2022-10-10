import { css } from '@emotion/core';
import theme from '../theme';

export const menuItemCSS = css`
  /* show focus in other ways */
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: ${theme.textColors.white90};
  padding: ${theme.spacing.padding8}px ${theme.spacing.padding16}px;
  min-width: 80px;
  cursor: pointer;
  position: relative;
  & > .ac-icon-wrap {
    position: absolute;
    top: ${theme.spacing.padding8}px;
    right: ${theme.spacing.padding8}px;
  }

  &.is-selected {
    i {
      color: ${theme.colors.arizeLightBlue};
    }
  }
  &.is-hovered,
  &.focus-ring {
    background-color: ${theme.colors.hoverBgColor};
  }
  &.is-selectable {
    cursor: pointer;
  }
`;
