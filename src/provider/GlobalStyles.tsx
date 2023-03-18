import { Global, css } from '@emotion/react';

export const globalCSS = css`
  :root {
    --ac-global-dimension-static-size-0: 0px;
    --ac-global-dimension-static-size-10: 1px;
    --ac-global-dimension-static-size-25: 2px;
    --ac-global-dimension-static-size-50: 4px;
    --ac-global-dimension-static-size-40: 3px;
    --ac-global-dimension-static-size-65: 5px;
    --ac-global-dimension-static-size-100: 8px;
    --ac-global-dimension-static-size-115: 9px;
    --ac-global-dimension-static-size-125: 10px;
    --ac-global-dimension-static-size-130: 11px;
    --ac-global-dimension-static-size-150: 12px;
    --ac-global-dimension-static-size-160: 13px;
    --ac-global-dimension-static-size-175: 14px;
    --ac-global-dimension-static-size-200: 16px;
    --ac-global-dimension-static-size-225: 18px;
    --ac-global-dimension-static-size-250: 20px;
    --ac-global-dimension-static-size-300: 24px;
    --ac-global-dimension-static-size-400: 32px;
    --ac-global-dimension-static-size-450: 36px;
    --ac-global-dimension-static-size-500: 40px;
    --ac-global-dimension-static-size-550: 44px;
    --ac-global-dimension-static-size-600: 48px;
    --ac-global-dimension-static-size-700: 56px;
    --ac-global-dimension-static-size-800: 64px;
    --ac-global-dimension-static-size-900: 72px;
    --ac-global-dimension-static-size-1000: 80px;
    --ac-global-dimension-static-size-1200: 96px;
    --ac-global-dimension-static-size-1700: 136px;
    --ac-global-dimension-static-size-2400: 192px;
    --ac-global-dimension-static-size-2600: 208px;
    --ac-global-dimension-static-size-3400: 272px;
    --ac-global-dimension-static-size-3600: 288px;
    --ac-global-dimension-static-size-4600: 368px;
    --ac-global-dimension-static-size-5000: 400px;
    --ac-global-dimension-static-size-6000: 480px;
    --ac-global-dimension-static-font-size-50: 11px;
    --ac-global-dimension-static-font-size-75: 12px;
    --ac-global-dimension-static-font-size-100: 14px;
    --ac-global-dimension-static-font-size-150: 15px;
    --ac-global-dimension-static-font-size-200: 16px;
    --ac-global-dimension-static-font-size-300: 18px;
    --ac-global-dimension-static-font-size-400: 20px;
    --ac-global-dimension-static-font-size-500: 22px;
    --ac-global-dimension-static-font-size-600: 25px;
    --ac-global-dimension-static-font-size-700: 28px;
    --ac-global-dimension-static-font-size-800: 32px;
    --ac-global-dimension-static-font-size-900: 36px;
    --ac-global-dimension-static-font-size-1000: 40px;
    --ac-global-dimension-static-percent-50: 50%;
    --ac-global-dimension-static-percent-100: 100%;
    --ac-global-dimension-static-breakpoint-xsmall: 304px;
    --ac-global-dimension-static-breakpoint-small: 768px;
    --ac-global-dimension-static-breakpoint-medium: 1280px;
    --ac-global-dimension-static-breakpoint-large: 1768px;
    --ac-global-dimension-static-breakpoint-xlarge: 2160px;
    --ac-global-dimension-static-grid-columns: 12;
    --ac-global-dimension-static-grid-fluid-width: 100%;
    --ac-global-dimension-static-grid-fixed-max-width: 1280px;
  }
`;

export function GlobalStyles() {
  return <Global styles={globalCSS} />;
}
