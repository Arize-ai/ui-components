import theme from '../theme';
import { css } from '@emotion/core';

export const radioGroupLabelCSS = css`
  margin-bottom: ${theme.spacing.padding8}px;
`;

export const radioLabelCSS = css`
  display: flex;
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
  isInline = false,
}: {
  isDisabled?: boolean;
  noPadding?: boolean;
  isInline?: boolean;
}) => css`
  display: flex;
  flex-direction: ${isInline ? 'row' : 'column'};
  cursor: ${isDisabled ? 'not-allowed' : 'pointer'};

  &:not(:first-of-type) {
    margin-top: ${noPadding ? '0' : theme.spacing.padding8}px;
  }
`;

export const customRadioCSS = ({
  isSelected = false,
  isDisabled = false,
}: {
  isSelected?: boolean;
  isDisabled?: boolean;
}) => css`
  height: 50px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid
    ${isSelected ? theme.textColors.white90 : theme.colors.dividerColor};
  color: ${isDisabled ? theme.textColors.white30 : theme.textColors.white90};
  margin-right: ${theme.spacing.padding4}px;
  padding: ${theme.spacing.padding16}px;
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

export const radioChildrenCSS = ({
  isInline = false,
}: {
  isInline?: boolean;
}) => css`
  display: flex;
  padding: 0;
  margin-top: ${isInline ? 0 : theme.spacing.padding4}px;
  flex-direction: column;
`;
