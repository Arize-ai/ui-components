import { css } from '@emotion/react';
import theme from '../theme';
import { transparentize } from 'polished';

export const buttonCSS = css`
  border: 1px solid var(--ac-global-border-color-default);
  font-weight: 600;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: ${theme.borderRadius.medium}px;
  color: var(--ac-global-text-color-900);
  cursor: pointer;
  /* Disable outline since there are other mechanisms to show focus */
  outline: none;
  &:not([disabled]) {
    transition: all 0.2s ease-in-out;
  }
  &[disabled] {
    cursor: default;
    opacity: ${theme.opacity.disabled};
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
    color: var(--ac-global-color-white-900);
    &:hover:not([disabled]) {
      background-color: ${theme.components.button.primaryHoverBackgroundColor};
    }
  }
  &[data-variant='success'] {
    background-color: ${theme.components.button.successColor};
    border-color: ${theme.components.button.successBorderColor};
    &:hover:not([disabled]) {
      background-color: ${theme.components.button.successHoverBackgroundColor};
    }
  }
  &[data-variant='default'] {
    background-color: var(--ac-global-color-grey-200);
    border-color: ${theme.components.button.defaultBorderColor};
    &:hover:not([disabled]) {
      background-color: ${theme.components.button.defaultHoverBackgroundColor};
    }
  }
  &[data-variant='quiet'] {
    background-color: transparent;
    border-color: transparent;
    &:hover:not([disabled]) {
      border-color: transparent;
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
