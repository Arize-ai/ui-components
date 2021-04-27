import theme from '../theme';
import { css } from '@emotion/core';

export const radioGroupLabelCSS = css`
  font-size: ${theme.typography.sizes.large.fontSize}px;
  line-height: ${theme.typography.sizes.large.lineHeight}px;
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
  align-items: center;
  cursor: ${isDisabled ? 'not-allowed' : 'pointer'};

  &:not(:first-of-type) {
    margin-top: ${noPadding ? '0' : theme.spacing.padding8}px;
  }
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
