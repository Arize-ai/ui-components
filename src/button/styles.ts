import { css } from '@emotion/core';
import theme from '../theme';

export const buttonCSS = css`
  border: 1px solid ${theme.colors.dark1};
  font-size: ${theme.typography.sizes.medium};
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  border-radius: 4px;
  color: ${theme.textColors.white90};
  cursor: pointer;
  &:not([disabled]) {
    transition: all 0.2s ease-in-out;
  }
  &[disabled] {
    color: ${theme.textColors.white70};
    cursor: not-allowed;
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
    background-color: ${theme.colors.arizeBlue};
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
  &[data-childless='false'] > i,
  & > .ac-spinner {
    margin-right: ${theme.spacing.margin4}px;
  }
`;
