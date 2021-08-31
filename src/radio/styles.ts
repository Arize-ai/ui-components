import theme from '../theme';
import { css } from '@emotion/core';

export const radioGroupLabelCSS = css`
  margin-bottom: ${theme.spacing.padding8}px;
`;

export const radioGroupCSS = ({
  isDisabled = false,
}: {
  isDisabled: boolean;
}) => css`
  color: ${isDisabled ? theme.textColors.white30 : theme.textColors.white90};
`;

export const radioCSS = ({
  isDisabled = false,
  noPadding = false,
}: {
  isDisabled?: boolean;
  noPadding?: boolean;
}) => css`
  display: flex;
  flex-direction: column;
  cursor: ${isDisabled ? 'not-allowed' : 'pointer'};

  &:not(:first-of-type) {
    margin-top: ${noPadding ? '0' : theme.spacing.padding8}px;
  }
`;

export const defaultRadioCSS = css`
  display: flex;
`;

export const selectorRadioCSS = ({
  isSelected = false,
  isDisabled = false,
}: {
  isSelected?: boolean;
  isDisabled?: boolean;
}) => css`
  height: 50px;
  border-radius: 8px;
  border: 2px solid
    ${isSelected ? theme.textColors.white90 : theme.colors.dividerColor};
  color: ${isDisabled ? theme.textColors.white30 : theme.textColors.white90};
  margin-right: ${theme.spacing.padding4}px;
  padding: ${theme.spacing.padding16}px;
  ${!isDisabled &&
    `&:hover {
    border-color: ${theme.components.button.defaultHoverBackgroundColor};
    transition: border-color 0.2s ease-in-out;
  }`};
`;

export const radioButtonIconCSS = ({
  isFocusVisible = false,
  isDisabled = false,
}: {
  isFocusVisible?: boolean;
  isDisabled?: boolean;
}) => css`
  color: ${isDisabled ? theme.textColors.white30 : theme.textColors.white90};
  margin-right: ${theme.spacing.padding4}px;
  ${isFocusVisible &&
    `outline: ${theme.spacing.outline.thin}px solid -webkit-focus-ring-color;`}
`;

export const radioChildrenCSS = css`
  display: flex;
  padding: 0;
  margin-top: ${theme.spacing.padding4}px;
  flex-direction: column;
`;
