import { css } from '@emotion/react';
import theme from '../theme';

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
    background-color: var(--ac-global-button-primary-background-color);
    border-color: var(--ac-global-button-primary-border-color);
    color: var(--ac-global-static-color-white-900);
    &:hover:not([disabled]) {
      background-color: var(--ac-global-button-primary-background-color-hover);
    }
  }
  &[data-variant='danger'] {
    background-color: var(--ac-global-button-danger-background-color);
    border-color: var(--ac-global-button-danger-border-color);
    color: var(--ac-global-static-color-white-900);
    &:hover:not([disabled]) {
      background-color: var(--ac-global-button-danger-background-color-hover);
    }
  }
  &[data-variant='success'] {
    background-color: var(--ac-global-button-success-background-color);
    border-color: var(--ac-global-button-success-border-color);
    color: var(--ac-global-static-color-white-900);
    color: var(--ac-global-static-color-white-900);
    &:hover:not([disabled]) {
      background-color: var(--ac-global-button-success-background-color-hover);
    }
  }
  &[data-variant='default'] {
    background-color: var(--ac-global-input-field-background-color);
    border-color: var(--ac-global-input-field-border-color);
    &:hover:not([disabled]) {
      background-color: var(--ac-global-input-field-border-color-hover);
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

  &[data-childless='false'] > i,
  & > .ac-spinner {
    margin-right: ${theme.spacing.margin4}px;
  }
`;
