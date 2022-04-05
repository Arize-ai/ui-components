import { css } from '@emotion/core';
import { transparentize, darken } from 'polished';
import theme from '../theme';

export const baseSeverityCSS = css`
  backdrop-filter: blur(20px);
`;

const bgDarken = 0.5,
  bgTransparentize = 0.5;

const generateSeverityCSS = (severityColor: string) =>
  css(
    baseSeverityCSS,
    css`
      border: 1px solid ${severityColor};
      background-color: ${darken(bgDarken, severityColor)};
      color: ${severityColor};
      /* background-filter support */
      @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
        background-color: ${transparentize(
          bgTransparentize,
          darken(bgDarken, severityColor)
        )};
      }
    `
  );

export const warningCSS = generateSeverityCSS(theme.colors.statusWarning);
export const infoCSS = generateSeverityCSS(theme.colors.statusInfo);
export const dangerCSS = generateSeverityCSS(theme.colors.statusDanger);
export const successCSS = generateSeverityCSS(theme.colors.statusSuccess);
