import { css } from '@emotion/core';
import { transparentize } from 'polished';
import theme from '../theme';

export const warningCSS = css`
  border: 1px solid ${theme.colors.statusWarning};
  background-color: ${transparentize(0.85, theme.colors.statusWarning)};
  color: ${theme.colors.statusWarning};
`;

export const infoCSS = css`
  border: 1px solid ${theme.colors.statusInfo};
  background-color: ${transparentize(0.85, theme.colors.statusInfo)};
  color: ${theme.colors.statusInfo};
`;

export const dangerCSS = css`
  border: 1px solid ${theme.colors.statusDanger};
  background-color: ${transparentize(0.85, theme.colors.statusDanger)};
  color: ${theme.colors.statusDanger};
`;

export const successCSS = css`
  border: 1px solid ${theme.colors.statusSuccess};
  background-color: ${transparentize(0.85, theme.colors.statusSuccess)};
  color: ${theme.colors.statusSuccess};
`;
