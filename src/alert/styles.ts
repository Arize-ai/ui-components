import { css } from '@emotion/react';
import { transparentize, darken } from 'polished';
import theme from '../theme';

export const baseSeverityCSS = css`
  backdrop-filter: blur(10px);
`;

const bgDarken = 0.4,
  bgTransparentize = 0.5,
  // FireFox does not support backdrop-filter so needs to be less transparent and darker
  bgDarkenFallback = 0.45,
  bgTransparentizeFallback = 0.1;

const generateSeverityCSS = (severityColor: string) =>
  css(
    baseSeverityCSS,
    css`
      border: 1px solid ${severityColor};
      /* FireFox Only style */
      background-color: ${transparentize(
        bgTransparentizeFallback,
        darken(bgDarkenFallback, severityColor)
      )};
      color: ${severityColor};
      /* background-filter support (Chrome / Safari) */
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
