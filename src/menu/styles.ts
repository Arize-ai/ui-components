import { css } from '@emotion/react';
import theme from '../theme';

export const menuItemCSS = css`
  /* show focus in other ways */
  outline: none;
  display: flex;
  align-items: center;
  color: ${theme.textColors.white90};
  padding: ${theme.spacing.padding8}px ${theme.spacing.padding16}px;
  font-size: ${theme.typography.sizes.medium.fontSize}px;
  min-width: 80px;
  cursor: pointer;
  position: relative;
  & > .ac-icon-wrap.ac-menu-item__selected-checkmark {
    position: absolute;
    top: ${theme.spacing.padding8}px;
    right: ${theme.spacing.padding8}px;
  }

  & > .ac-icon-wrap:first-child,
  & > i:first-child {
    margin-right: ${theme.spacing.margin4}px;
  }

  &.is-selected {
    i {
      color: ${theme.colors.arizeLightBlue};
    }
  }
  &:hover,
  &.focus-ring {
    background-color: ${theme.colors.gray500};
  }
  &.is-selectable {
    cursor: pointer;
  }
  &.is-disabled {
    cursor: not-allowed;
    color: ${theme.textColors.white50};
  }
`;
