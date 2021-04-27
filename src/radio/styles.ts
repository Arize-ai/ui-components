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
  color: ${isDisabled ? theme.colors.gray200 : theme.colors.text1};
`;

export const radioCSS = ({
  isDisabled = false,
  noPadding = false,
}: {
  isDisabled?: boolean;
  noPadding?: boolean;
}) => css`
  display: flex;
  color: ${isDisabled ? theme.colors.gray200 : theme.colors.text1};
  font-size: ${theme.typography.sizes.medium.fontSize}px;
  line-height: ${theme.typography.sizes.medium.lineHeight}px;
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
  fill: ${isDisabled ? theme.colors.gray200 : theme.colors.text1};
  margin-right: ${theme.spacing.padding4}px;
  ${isFocusVisible &&
    `outline: ${theme.spacing.outline.thin}px solid -webkit-focus-ring-color;`}
`;

export const radioChildrenCSS = css`
  display: flex;
  padding: 0;
  margin-top: ${theme.spacing.padding4}px;
`;
