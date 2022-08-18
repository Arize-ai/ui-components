import { css } from '@emotion/core';
import theme from '../theme';
import { transparentize } from 'polished';

export const buttonCSS = css`
  border: 1px solid ${theme.components.button.defaultBorderColor};
  font-weight: 600;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  border-radius: ${theme.borderRadius.medium}px;
  color: ${theme.textColors.white90};
  cursor: pointer;
  /* Disable outline since there are other mechanisms to show focus */
  outline: none;
  &:not([disabled]) {
    transition: all 0.2s ease-in-out;
  }
  &[disabled] {
    cursor: default;
    opacity: 0.4;
  }
  &[data-size='normal'][data-childless='false'] {
    padding: ${theme.spacing.padding8}px ${theme.spacing.padding16}px;
  }
  &[data-size='compact'][data-childless='false'] {
    padding: ${theme.spacing.padding4}px ${theme.spacing.padding8}px;
  }
  &[data-size='normal'][data-childless='true'] {
    padding: ${theme.spacing.padding8}px ${theme.spacing.padding8}px;
  }
  &[data-size='compact'][data-childless='true'] {
    padding: ${theme.spacing.padding4}px ${theme.spacing.padding4}px;
  }
  &[data-variant='primary'] {
    background-color: ${transparentize(0.1, theme.colors.arizeBlue)};
    border-color: ${theme.components.button.primaryBorderColor};
    &:hover:not([disabled]) {
      background-color: ${theme.components.button.primaryHoverBackgroundColor};
    }
  }
  &[data-variant='default'] {
    background-color: ${theme.colors.gray500};
    border-color: ${theme.components.button.defaultBorderColor};
    &:hover:not([disabled]) {
      background-color: ${theme.components.button.defaultHoverBackgroundColor};
    }
  }
  &[data-variant='quiet'] {
    background-color: ${transparentize(0.1, theme.colors.gray500)};
    &:hover:not([disabled]) {
      background-color: ${theme.components.button.defaultHoverBackgroundColor};
    }
  }
  &[data-variant='danger'] {
    background-color: ${transparentize(0.3, theme.colors.statusDanger)};
    border-color: ${theme.components.button.dangerBorderColor};
    &:hover:not([disabled]) {
      background-color: ${theme.components.button.dangerHoverBackgroundColor};
    }
  }
  &[data-childless='false'] > i,
  & > .ac-spinner {
    margin-right: ${theme.spacing.margin4}px;
  }
`;
