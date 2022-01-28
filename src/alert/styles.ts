import { css } from '@emotion/core';
import { transparentize } from 'polished';
import theme from '../theme';

export const baseSeverityCSS = css`
  backdrop-filter: blur(4px);
`;
export const warningCSS = css(
  baseSeverityCSS,
  css`
    border: 1px solid ${theme.colors.statusWarning};
    background-color: ${transparentize(0.85, theme.colors.statusWarning)};
    color: ${theme.colors.statusWarning};
  `
);

export const infoCSS = css(
  baseSeverityCSS,
  css`
    border: 1px solid ${theme.colors.statusInfo};
    background-color: ${transparentize(0.85, theme.colors.statusInfo)};
    color: ${theme.colors.statusInfo};
  `
);

export const dangerCSS = css(
  baseSeverityCSS,
  css`
    border: 1px solid ${theme.colors.statusDanger};
    background-color: ${transparentize(0.85, theme.colors.statusDanger)};
    color: ${theme.colors.statusDanger};
  `
);

export const successCSS = css(
  baseSeverityCSS,
  css`
    border: 1px solid ${theme.colors.statusSuccess};
    background-color: ${transparentize(0.85, theme.colors.statusSuccess)};
    color: ${theme.colors.statusSuccess};
  `
);
