import { css } from '@emotion/react';
import { transparentize, darken } from 'polished';
import theme from '../theme';

export const baseSeverityCSS = css`
  backdrop-filter: blur(10px);
`;

const generateSeverityCSS = (
  semanticColor: 'info' | 'warning' | 'success' | 'danger'
) => {
  const colorPrefix = `--ac-global-color-${semanticColor}`;
  return css(
    baseSeverityCSS,
    css`
      border: 1px solid var(${colorPrefix});
      /* FireFox Only style */
      background-color: var(${colorPrefix}-700);
      color: var(--ac-global-color-text-900);
    `
  );
};

export const warningCSS = generateSeverityCSS('warning');
export const infoCSS = generateSeverityCSS('info');
export const dangerCSS = generateSeverityCSS('danger');
export const successCSS = generateSeverityCSS('success');
