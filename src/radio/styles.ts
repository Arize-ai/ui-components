import theme from '../theme';
import { css } from '@emotion/core';

export const radioGroupCSS = ({ isDisabled = false }: { isDisabled: boolean }) => css`
  color: ${isDisabled ? theme.colors.disabled : theme.colors.text1};
`;

export const radioCSS = ({
	isFocusVisible = false,
	isDisabled = false,
  }: {
	isFocusVisible?: boolean;
	isDisabled?: boolean;
  }) => css`
	display: flex;
	color: ${isDisabled ? theme.colors.disabled : theme.colors.text1};
	font-size: ${theme.typography.sizes.small.fontSize}px;
	line-height: ${theme.typography.sizes.small.lineHeight}px;
	svg {
	  fill: ${isDisabled ? theme.colors.disabled : theme.colors.text1};
	  margin-right: ${theme.spacing.padding8}px;
	  height: 16px;
	  width: 16px;
	  ${isFocusVisible && `outline: 2px solid -webkit-focus-ring-color;`}
	}
	align-items: center;
	cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
  `;
