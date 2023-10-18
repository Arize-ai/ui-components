import { Global, css } from '@emotion/react';
import { useProvider } from './Provider';

/**
 * Medium size root CSS variables
 */
export const mediumRootCSS = css`
  :root {
    --ac-global-dimension-scale-factor: 1;
    --ac-global-dimension-size-0: 0px;
    --ac-global-dimension-size-10: 1px;
    --ac-global-dimension-size-25: 2px;
    --ac-global-dimension-size-30: 2px;
    --ac-global-dimension-size-40: 3px;
    --ac-global-dimension-size-50: 4px;
    --ac-global-dimension-size-65: 5px;
    --ac-global-dimension-size-75: 6px;
    --ac-global-dimension-size-85: 7px;
    --ac-global-dimension-size-100: 8px;
    --ac-global-dimension-size-115: 9px;
    --ac-global-dimension-size-125: 10px;
    --ac-global-dimension-size-130: 11px;
    --ac-global-dimension-size-150: 12px;
    --ac-global-dimension-size-160: 13px;
    --ac-global-dimension-size-175: 14px;
    --ac-global-dimension-size-185: 15px;
    --ac-global-dimension-size-200: 16px;
    --ac-global-dimension-size-225: 18px;
    --ac-global-dimension-size-250: 20px;
    --ac-global-dimension-size-275: 22px;
    --ac-global-dimension-size-300: 24px;
    --ac-global-dimension-size-325: 26px;
    --ac-global-dimension-size-350: 28px;
    --ac-global-dimension-size-400: 32px;
    --ac-global-dimension-size-450: 36px;
    --ac-global-dimension-size-500: 40px;
    --ac-global-dimension-size-550: 44px;
    --ac-global-dimension-size-600: 48px;
    --ac-global-dimension-size-650: 52px;
    --ac-global-dimension-size-675: 54px;
    --ac-global-dimension-size-700: 56px;
    --ac-global-dimension-size-750: 60px;
    --ac-global-dimension-size-800: 64px;
    --ac-global-dimension-size-900: 72px;
    --ac-global-dimension-size-1000: 80px;
    --ac-global-dimension-size-1125: 90px;
    --ac-global-dimension-size-1200: 96px;
    --ac-global-dimension-size-1250: 100px;
    --ac-global-dimension-size-1600: 128px;
    --ac-global-dimension-size-1700: 136px;
    --ac-global-dimension-size-1800: 144px;
    --ac-global-dimension-size-2000: 160px;
    --ac-global-dimension-size-2400: 192px;
    --ac-global-dimension-size-2500: 200px;
    --ac-global-dimension-size-3000: 240px;
    --ac-global-dimension-size-3400: 272px;
    --ac-global-dimension-size-3600: 288px;
    --ac-global-dimension-size-4600: 368px;
    --ac-global-dimension-size-5000: 400px;
    --ac-global-dimension-size-6000: 480px;
  }
`;

export const darkThemeCSS = css`
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

      /* Colors */

      // The primary color tint for  the apps
      --ac-global-primary-color: #72d9ff;

      --ac-global-color-gray-900: #181b1f;
      --ac-global-color-gray-800: #1d2126;
      --ac-global-color-gray-700: #23282e;
      --ac-global-color-gray-600: #282e35;
      --ac-global-color-gray-500: #2f353d;
      --ac-global-color-gray-400: #3d434a;
      --ac-global-color-gray-300: #4a5057;
      --ac-global-color-gray-200: #585d64;
      --ac-global-color-gray-100: #666b71;

      --ac-global-color-red-100: #570000;
      --ac-global-color-red-200: #6e0000;
      --ac-global-color-red-300: #8a0000;
      --ac-global-color-red-400: #a70000;
      --ac-global-color-red-500: #c40706;
      --ac-global-color-red-600: #dd2118;
      --ac-global-color-red-700: #ee4331;
      --ac-global-color-red-800: #f9634c;
      --ac-global-color-red-900: #ff816b;
      --ac-global-color-red-1000: #ff9e8c;
      --ac-global-color-red-1100: #ffb7a9;
      --ac-global-color-red-1200: #ffcdc3;
      --ac-global-color-red-1300: #ffdfd9;
      --ac-global-color-red-1400: #ffedea;
      --ac-global-color-orange-100: #481801;
      --ac-global-color-orange-200: #5c2000;
      --ac-global-color-orange-300: #732b00;
      --ac-global-color-orange-400: #8a3700;
      --ac-global-color-orange-500: #a24400;
      --ac-global-color-orange-600: #ba5200;
      --ac-global-color-orange-700: #d26200;
      --ac-global-color-orange-800: #e87400;
      --ac-global-color-orange-900: #f98917;
      --ac-global-color-orange-1000: #ffa23b;
      --ac-global-color-orange-1100: #ffbc66;
      --ac-global-color-orange-1200: #fdd291;
      --ac-global-color-orange-1300: #ffe2b5;
      --ac-global-color-orange-1400: #ffefd5;
      --ac-global-color-yellow-100: #352400;
      --ac-global-color-yellow-200: #442f00;
      --ac-global-color-yellow-300: #563e00;
      --ac-global-color-yellow-400: #674d00;
      --ac-global-color-yellow-500: #7a5c00;
      --ac-global-color-yellow-600: #8d6c00;
      --ac-global-color-yellow-700: #a17e00;
      --ac-global-color-yellow-800: #b49000;
      --ac-global-color-yellow-900: #c7a200;
      --ac-global-color-yellow-1000: #d8b500;
      --ac-global-color-yellow-1100: #e9c700;
      --ac-global-color-yellow-1200: #f7d804;
      --ac-global-color-yellow-1300: #f9e961;
      --ac-global-color-yellow-1400: #fcf3aa;
      --ac-global-color-chartreuse-100: #202b00;
      --ac-global-color-chartreuse-200: #2a3800;
      --ac-global-color-chartreuse-300: #364800;
      --ac-global-color-chartreuse-400: #425800;
      --ac-global-color-chartreuse-500: #4f6900;
      --ac-global-color-chartreuse-600: #5d7b00;
      --ac-global-color-chartreuse-700: #6b8e00;
      --ac-global-color-chartreuse-800: #7aa100;
      --ac-global-color-chartreuse-900: #8ab403;
      --ac-global-color-chartreuse-1000: #9ac60b;
      --ac-global-color-chartreuse-1100: #aad816;
      --ac-global-color-chartreuse-1200: #bbe829;
      --ac-global-color-chartreuse-1300: #cdf648;
      --ac-global-color-chartreuse-1400: #e1fd84;
      --ac-global-color-celery-100: #002f07;
      --ac-global-color-celery-200: #003d09;
      --ac-global-color-celery-300: #004d0c;
      --ac-global-color-celery-400: #005f0f;
      --ac-global-color-celery-500: #00710f;
      --ac-global-color-celery-600: #00840f;
      --ac-global-color-celery-700: #009714;
      --ac-global-color-celery-800: #0dab25;
      --ac-global-color-celery-900: #2dbf3a;
      --ac-global-color-celery-1000: #50d052;
      --ac-global-color-celery-1100: #73e06b;
      --ac-global-color-celery-1200: #93ed83;
      --ac-global-color-celery-1300: #b4f7a2;
      --ac-global-color-celery-1400: #d5fcca;
      --ac-global-color-green-100: #0a2c1c;
      --ac-global-color-green-200: #073b24;
      --ac-global-color-green-300: #004c2e;
      --ac-global-color-green-400: #005d39;
      --ac-global-color-green-500: #006f45;
      --ac-global-color-green-600: #008252;
      --ac-global-color-green-700: #009562;
      --ac-global-color-green-800: #1ca872;
      --ac-global-color-green-900: #34bb84;
      --ac-global-color-green-1000: #4bcd95;
      --ac-global-color-green-1100: #67dea8;
      --ac-global-color-green-1200: #89ecbc;
      --ac-global-color-green-1300: #b1f4d1;
      --ac-global-color-green-1400: #d6f9e4;
      --ac-global-color-seafoam-100: #122b2a;
      --ac-global-color-seafoam-200: #133937;
      --ac-global-color-seafoam-300: #104946;
      --ac-global-color-seafoam-400: #035b58;
      --ac-global-color-seafoam-500: #006c68;
      --ac-global-color-seafoam-600: #007f79;
      --ac-global-color-seafoam-700: #00928c;
      --ac-global-color-seafoam-800: #00a59f;
      --ac-global-color-seafoam-900: #1ab9b2;
      --ac-global-color-seafoam-1000: #42cac3;
      --ac-global-color-seafoam-1100: #66dad3;
      --ac-global-color-seafoam-1200: #8be8e1;
      --ac-global-color-seafoam-1300: #b3f2ed;
      --ac-global-color-seafoam-1400: #d7f8f4;
      --ac-global-color-cyan-100: #002944;
      --ac-global-color-cyan-200: #003658;
      --ac-global-color-cyan-300: #00456c;
      --ac-global-color-cyan-400: #005680;
      --ac-global-color-cyan-500: #006793;
      --ac-global-color-cyan-600: #0079a7;
      --ac-global-color-cyan-700: #008cba;
      --ac-global-color-cyan-800: #04a0cd;
      --ac-global-color-cyan-900: #17b4dd;
      --ac-global-color-cyan-1000: #39c7ea;
      --ac-global-color-cyan-1100: #60d8f3;
      --ac-global-color-cyan-1200: #86e6fa;
      --ac-global-color-cyan-1300: #aaf2ff;
      --ac-global-color-cyan-1400: #cef9ff;
      --ac-global-color-blue-100: #002651;
      --ac-global-color-blue-200: #00326a;
      --ac-global-color-blue-300: #004087;
      --ac-global-color-blue-400: #004ea6;
      --ac-global-color-blue-500: #005cc8;
      --ac-global-color-blue-600: #066ce7;
      --ac-global-color-blue-700: #1d80f5;
      --ac-global-color-blue-800: #4096f3;
      --ac-global-color-blue-900: #5eaaf7;
      --ac-global-color-blue-1000: #7cbdfa;
      --ac-global-color-blue-1100: #98cefd;
      --ac-global-color-blue-1200: #b3defe;
      --ac-global-color-blue-1300: #ceeaff;
      --ac-global-color-blue-1400: #e3f3ff;
      --ac-global-color-indigo-100: #1a1d61;
      --ac-global-color-indigo-200: #23277d;
      --ac-global-color-indigo-300: #2e329e;
      --ac-global-color-indigo-400: #3a3fbd;
      --ac-global-color-indigo-500: #494ed8;
      --ac-global-color-indigo-600: #5a60eb;
      --ac-global-color-indigo-700: #6e73f6;
      --ac-global-color-indigo-800: #8488fd;
      --ac-global-color-indigo-900: #999dff;
      --ac-global-color-indigo-1000: #aeb1ff;
      --ac-global-color-indigo-1100: #c2c4ff;
      --ac-global-color-indigo-1200: #d4d5ff;
      --ac-global-color-indigo-1300: #e3e4ff;
      --ac-global-color-indigo-1400: #f0f0ff;
      --ac-global-color-purple-100: #321068;
      --ac-global-color-purple-200: #430d8c;
      --ac-global-color-purple-300: #5610ad;
      --ac-global-color-purple-400: #6a1dc8;
      --ac-global-color-purple-500: #7e31de;
      --ac-global-color-purple-600: #9146ec;
      --ac-global-color-purple-700: #a25ef6;
      --ac-global-color-purple-800: #b277fa;
      --ac-global-color-purple-900: #c08ffc;
      --ac-global-color-purple-1000: #cea6fd;
      --ac-global-color-purple-1100: #dbbcfe;
      --ac-global-color-purple-1200: #e6cfff;
      --ac-global-color-purple-1300: #f0e0ff;
      --ac-global-color-purple-1400: #f8edff;
      --ac-global-color-fuchsia-100: #460e44;
      --ac-global-color-fuchsia-200: #5d095c;
      --ac-global-color-fuchsia-300: #780078;
      --ac-global-color-fuchsia-400: #920093;
      --ac-global-color-fuchsia-500: #a913aa;
      --ac-global-color-fuchsia-600: #bf2bbf;
      --ac-global-color-fuchsia-700: #d341d5;
      --ac-global-color-fuchsia-800: #e45be5;
      --ac-global-color-fuchsia-900: #ef78ee;
      --ac-global-color-fuchsia-1000: #f695f3;
      --ac-global-color-fuchsia-1100: #fbaff6;
      --ac-global-color-fuchsia-1200: #fec7f8;
      --ac-global-color-fuchsia-1300: #ffdcfa;
      --ac-global-color-fuchsia-1400: #ffebfc;
      --ac-global-color-magenta-100: #530329;
      --ac-global-color-magenta-200: #6a0034;
      --ac-global-color-magenta-300: #850041;
      --ac-global-color-magenta-400: #a1004e;
      --ac-global-color-magenta-500: #ba165d;
      --ac-global-color-magenta-600: #d12b72;
      --ac-global-color-magenta-700: #e34589;
      --ac-global-color-magenta-800: #f1619c;
      --ac-global-color-magenta-900: #fc7cad;
      --ac-global-color-magenta-1000: #ff98bf;
      --ac-global-color-magenta-1100: #ffb3cf;
      --ac-global-color-magenta-1200: #ffcadd;
      --ac-global-color-magenta-1300: #ffdde9;
      --ac-global-color-magenta-1400: #ffecf3;
      --ac-global-color-danger: #f85149;
      --ac-global-color-success: #7ee787;
      --ac-global-color-warning: #e69958;

      --ac-global-text-color-900: rgba(255, 255, 255, 0.9);
      --ac-global-text-color-700: rgba(255, 255, 255, 0.7);
      --ac-global-text-color-500: rgba(255, 255, 255, 0.5);
      --ac-global-text-color-300: rgba(255, 255, 255, 0.3);

      --ac-global-background-color-default: var(--ac-global-color-gray-900);
      --ac-global-background-color-light: var(--ac-global-color-gray-700);
      --ac-global-background-color-dark: var(--ac-global-color-gray-900);
      --ac-global-background-color-danger: var(--ac-global-color-danger);

      --ac-global-border-color-default: var(--ac-global-color-gray-400);
      --ac-global-border-color-light: var(--ac-global-color-gray-400);
      --ac-global-border-color-dark: var(--ac-global-color-gray-400);

      // Styles for text fields etc
      --ac-global-input-field-border-color: var(--ac-global-color-gray-100);
      --ac-global-input-field-border-color-hover: var(
        --ac-global-color-gray-300
      );
      --ac-global-input-field-border-color-active: var(
        --ac-global-primary-color
      );
      --ac-global-input-field-background-color: var(--ac-global-color-gray-600);
      --ac-global-input-field-background-color-active: var(
        --ac-global-color-gray-400
      );

      --ac-global-rounding-small: var(--ac-global-dimension-static-size-50);
      --ac-global-rounding-medium: var(--ac-global-dimension-static-size-100);

      --ac-global-border-size-thin: var(--ac-global-dimension-static-size-10);
      --ac-global-border-size-thick: var(--ac-global-dimension-static-size-25);
      --ac-global-border-size-thicker: var(
        --ac-global-dimension-static-size-50
      );
      --ac-global-border-size-thickest: var(
        --ac-global-dimension-static-size-100
      );
      --ac-global-border-offset-thin: var(--ac-global-dimension-static-size-25);
      --ac-global-border-offset-thick: var(
        --ac-global-dimension-static-size-50
      );
      --ac-global-border-offset-thicker: var(
        --ac-global-dimension-static-size-100
      );
      --ac-global-border-offset-thickest: var(
        --ac-global-dimension-static-size-200
      );
      --ac-global-grid-baseline: var(--ac-global-dimension-static-size-100);
      --ac-global-grid-gutter-xsmall: var(
        --ac-global-dimension-static-size-200
      );
      --ac-global-grid-gutter-small: var(--ac-global-dimension-static-size-300);
      --ac-global-grid-gutter-medium: var(
        --ac-global-dimension-static-size-400
      );
      --ac-global-grid-gutter-large: var(--ac-global-dimension-static-size-500);
      --ac-global-grid-gutter-xlarge: var(
        --ac-global-dimension-static-size-600
      );
      --ac-global-grid-margin-xsmall: var(
        --ac-global-dimension-static-size-200
      );
      --ac-global-grid-margin-small: var(--ac-global-dimension-static-size-300);
      --ac-global-grid-margin-medium: var(
        --ac-global-dimension-static-size-400
      );
      --ac-global-grid-margin-large: var(--ac-global-dimension-static-size-500);
      --ac-global-grid-margin-xlarge: var(
        --ac-global-dimension-static-size-600
      );

      /* Aliases */
      --ac-alias-single-line-height: var(--ac-global-dimension-size-400);
      --ac-alias-single-line-width: var(--ac-global-dimension-size-2400);
    }
  }
`;

export const lightThemeCSS = css`
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

      /* Colors */

      // The primary color tint for  the apps
      --ac-global-primary-color: #72d9ff;

      --ac-global-color-gray-900: #ffffff;
      --ac-global-color-gray-800: #ececec;
      --ac-global-color-gray-700: #d8d8d8;
      --ac-global-color-gray-600: #d0d0d0;
      --ac-global-color-gray-500: #dadada;
      --ac-global-color-gray-400: #c2c2c2;
      --ac-global-color-gray-300: #a8a8a8;
      --ac-global-color-gray-200: #7b7b7b;
      --ac-global-color-gray-100: #adadad;

      --ac-global-color-red-100: #570000;
      --ac-global-color-red-200: #6e0000;
      --ac-global-color-red-300: #8a0000;
      --ac-global-color-red-400: #a70000;
      --ac-global-color-red-500: #c40706;
      --ac-global-color-red-600: #dd2118;
      --ac-global-color-red-700: #ee4331;
      --ac-global-color-red-800: #f9634c;
      --ac-global-color-red-900: #ff816b;
      --ac-global-color-red-1000: #ff9e8c;
      --ac-global-color-red-1100: #ffb7a9;
      --ac-global-color-red-1200: #ffcdc3;
      --ac-global-color-red-1300: #ffdfd9;
      --ac-global-color-red-1400: #ffedea;
      --ac-global-color-orange-100: #481801;
      --ac-global-color-orange-200: #5c2000;
      --ac-global-color-orange-300: #732b00;
      --ac-global-color-orange-400: #8a3700;
      --ac-global-color-orange-500: #a24400;
      --ac-global-color-orange-600: #ba5200;
      --ac-global-color-orange-700: #d26200;
      --ac-global-color-orange-800: #e87400;
      --ac-global-color-orange-900: #f98917;
      --ac-global-color-orange-1000: #ffa23b;
      --ac-global-color-orange-1100: #ffbc66;
      --ac-global-color-orange-1200: #fdd291;
      --ac-global-color-orange-1300: #ffe2b5;
      --ac-global-color-orange-1400: #ffefd5;
      --ac-global-color-yellow-100: #352400;
      --ac-global-color-yellow-200: #442f00;
      --ac-global-color-yellow-300: #563e00;
      --ac-global-color-yellow-400: #674d00;
      --ac-global-color-yellow-500: #7a5c00;
      --ac-global-color-yellow-600: #8d6c00;
      --ac-global-color-yellow-700: #a17e00;
      --ac-global-color-yellow-800: #b49000;
      --ac-global-color-yellow-900: #c7a200;
      --ac-global-color-yellow-1000: #d8b500;
      --ac-global-color-yellow-1100: #e9c700;
      --ac-global-color-yellow-1200: #f7d804;
      --ac-global-color-yellow-1300: #f9e961;
      --ac-global-color-yellow-1400: #fcf3aa;
      --ac-global-color-chartreuse-100: #202b00;
      --ac-global-color-chartreuse-200: #2a3800;
      --ac-global-color-chartreuse-300: #364800;
      --ac-global-color-chartreuse-400: #425800;
      --ac-global-color-chartreuse-500: #4f6900;
      --ac-global-color-chartreuse-600: #5d7b00;
      --ac-global-color-chartreuse-700: #6b8e00;
      --ac-global-color-chartreuse-800: #7aa100;
      --ac-global-color-chartreuse-900: #8ab403;
      --ac-global-color-chartreuse-1000: #9ac60b;
      --ac-global-color-chartreuse-1100: #aad816;
      --ac-global-color-chartreuse-1200: #bbe829;
      --ac-global-color-chartreuse-1300: #cdf648;
      --ac-global-color-chartreuse-1400: #e1fd84;
      --ac-global-color-celery-100: #002f07;
      --ac-global-color-celery-200: #003d09;
      --ac-global-color-celery-300: #004d0c;
      --ac-global-color-celery-400: #005f0f;
      --ac-global-color-celery-500: #00710f;
      --ac-global-color-celery-600: #00840f;
      --ac-global-color-celery-700: #009714;
      --ac-global-color-celery-800: #0dab25;
      --ac-global-color-celery-900: #2dbf3a;
      --ac-global-color-celery-1000: #50d052;
      --ac-global-color-celery-1100: #73e06b;
      --ac-global-color-celery-1200: #93ed83;
      --ac-global-color-celery-1300: #b4f7a2;
      --ac-global-color-celery-1400: #d5fcca;
      --ac-global-color-green-100: #0a2c1c;
      --ac-global-color-green-200: #073b24;
      --ac-global-color-green-300: #004c2e;
      --ac-global-color-green-400: #005d39;
      --ac-global-color-green-500: #006f45;
      --ac-global-color-green-600: #008252;
      --ac-global-color-green-700: #009562;
      --ac-global-color-green-800: #1ca872;
      --ac-global-color-green-900: #34bb84;
      --ac-global-color-green-1000: #4bcd95;
      --ac-global-color-green-1100: #67dea8;
      --ac-global-color-green-1200: #89ecbc;
      --ac-global-color-green-1300: #b1f4d1;
      --ac-global-color-green-1400: #d6f9e4;
      --ac-global-color-seafoam-100: #122b2a;
      --ac-global-color-seafoam-200: #133937;
      --ac-global-color-seafoam-300: #104946;
      --ac-global-color-seafoam-400: #035b58;
      --ac-global-color-seafoam-500: #006c68;
      --ac-global-color-seafoam-600: #007f79;
      --ac-global-color-seafoam-700: #00928c;
      --ac-global-color-seafoam-800: #00a59f;
      --ac-global-color-seafoam-900: #1ab9b2;
      --ac-global-color-seafoam-1000: #42cac3;
      --ac-global-color-seafoam-1100: #66dad3;
      --ac-global-color-seafoam-1200: #8be8e1;
      --ac-global-color-seafoam-1300: #b3f2ed;
      --ac-global-color-seafoam-1400: #d7f8f4;
      --ac-global-color-cyan-100: #002944;
      --ac-global-color-cyan-200: #003658;
      --ac-global-color-cyan-300: #00456c;
      --ac-global-color-cyan-400: #005680;
      --ac-global-color-cyan-500: #006793;
      --ac-global-color-cyan-600: #0079a7;
      --ac-global-color-cyan-700: #008cba;
      --ac-global-color-cyan-800: #04a0cd;
      --ac-global-color-cyan-900: #17b4dd;
      --ac-global-color-cyan-1000: #39c7ea;
      --ac-global-color-cyan-1100: #60d8f3;
      --ac-global-color-cyan-1200: #86e6fa;
      --ac-global-color-cyan-1300: #aaf2ff;
      --ac-global-color-cyan-1400: #cef9ff;
      --ac-global-color-blue-100: #002651;
      --ac-global-color-blue-200: #00326a;
      --ac-global-color-blue-300: #004087;
      --ac-global-color-blue-400: #004ea6;
      --ac-global-color-blue-500: #005cc8;
      --ac-global-color-blue-600: #066ce7;
      --ac-global-color-blue-700: #1d80f5;
      --ac-global-color-blue-800: #4096f3;
      --ac-global-color-blue-900: #5eaaf7;
      --ac-global-color-blue-1000: #7cbdfa;
      --ac-global-color-blue-1100: #98cefd;
      --ac-global-color-blue-1200: #b3defe;
      --ac-global-color-blue-1300: #ceeaff;
      --ac-global-color-blue-1400: #e3f3ff;
      --ac-global-color-indigo-100: #1a1d61;
      --ac-global-color-indigo-200: #23277d;
      --ac-global-color-indigo-300: #2e329e;
      --ac-global-color-indigo-400: #3a3fbd;
      --ac-global-color-indigo-500: #494ed8;
      --ac-global-color-indigo-600: #5a60eb;
      --ac-global-color-indigo-700: #6e73f6;
      --ac-global-color-indigo-800: #8488fd;
      --ac-global-color-indigo-900: #999dff;
      --ac-global-color-indigo-1000: #aeb1ff;
      --ac-global-color-indigo-1100: #c2c4ff;
      --ac-global-color-indigo-1200: #d4d5ff;
      --ac-global-color-indigo-1300: #e3e4ff;
      --ac-global-color-indigo-1400: #f0f0ff;
      --ac-global-color-purple-100: #321068;
      --ac-global-color-purple-200: #430d8c;
      --ac-global-color-purple-300: #5610ad;
      --ac-global-color-purple-400: #6a1dc8;
      --ac-global-color-purple-500: #7e31de;
      --ac-global-color-purple-600: #9146ec;
      --ac-global-color-purple-700: #a25ef6;
      --ac-global-color-purple-800: #b277fa;
      --ac-global-color-purple-900: #c08ffc;
      --ac-global-color-purple-1000: #cea6fd;
      --ac-global-color-purple-1100: #dbbcfe;
      --ac-global-color-purple-1200: #e6cfff;
      --ac-global-color-purple-1300: #f0e0ff;
      --ac-global-color-purple-1400: #f8edff;
      --ac-global-color-fuchsia-100: #460e44;
      --ac-global-color-fuchsia-200: #5d095c;
      --ac-global-color-fuchsia-300: #780078;
      --ac-global-color-fuchsia-400: #920093;
      --ac-global-color-fuchsia-500: #a913aa;
      --ac-global-color-fuchsia-600: #bf2bbf;
      --ac-global-color-fuchsia-700: #d341d5;
      --ac-global-color-fuchsia-800: #e45be5;
      --ac-global-color-fuchsia-900: #ef78ee;
      --ac-global-color-fuchsia-1000: #f695f3;
      --ac-global-color-fuchsia-1100: #fbaff6;
      --ac-global-color-fuchsia-1200: #fec7f8;
      --ac-global-color-fuchsia-1300: #ffdcfa;
      --ac-global-color-fuchsia-1400: #ffebfc;
      --ac-global-color-magenta-100: #530329;
      --ac-global-color-magenta-200: #6a0034;
      --ac-global-color-magenta-300: #850041;
      --ac-global-color-magenta-400: #a1004e;
      --ac-global-color-magenta-500: #ba165d;
      --ac-global-color-magenta-600: #d12b72;
      --ac-global-color-magenta-700: #e34589;
      --ac-global-color-magenta-800: #f1619c;
      --ac-global-color-magenta-900: #fc7cad;
      --ac-global-color-magenta-1000: #ff98bf;
      --ac-global-color-magenta-1100: #ffb3cf;
      --ac-global-color-magenta-1200: #ffcadd;
      --ac-global-color-magenta-1300: #ffdde9;
      --ac-global-color-magenta-1400: #ffecf3;
      --ac-global-color-danger: #f85149;
      --ac-global-color-success: #7ee787;
      --ac-global-color-warning: #e69958;

      --ac-global-text-color-900: rgba(0, 0, 0, 0.9);
      --ac-global-text-color-700: rgba(0, 0, 0, 0.7);
      --ac-global-text-color-500: rgba(0, 0, 0, 0.5);
      --ac-global-text-color-300: rgba(0, 0, 0, 0.3);

      --ac-global-background-color-default: var(--ac-global-color-gray-900);
      --ac-global-background-color-light: var(--ac-global-color-gray-700);
      --ac-global-background-color-dark: var(--ac-global-color-gray-900);
      --ac-global-background-color-danger: var(--ac-global-color-danger);

      --ac-global-border-color-default: var(--ac-global-color-gray-400);
      --ac-global-border-color-light: var(--ac-global-color-gray-400);
      --ac-global-border-color-dark: var(--ac-global-color-gray-400);

      // Styles for text fields etc
      --ac-global-input-field-border-color: var(--ac-global-color-gray-100);
      --ac-global-input-field-border-color-hover: var(
        --ac-global-color-gray-300
      );
      --ac-global-input-field-border-color-active: var(
        --ac-global-primary-color
      );
      --ac-global-input-field-background-color: var(--ac-global-color-gray-600);
      --ac-global-input-field-background-color-active: var(
        --ac-global-color-gray-400
      );

      --ac-global-rounding-small: var(--ac-global-dimension-static-size-50);
      --ac-global-rounding-medium: var(--ac-global-dimension-static-size-100);

      --ac-global-border-size-thin: var(--ac-global-dimension-static-size-10);
      --ac-global-border-size-thick: var(--ac-global-dimension-static-size-25);
      --ac-global-border-size-thicker: var(
        --ac-global-dimension-static-size-50
      );
      --ac-global-border-size-thickest: var(
        --ac-global-dimension-static-size-100
      );
      --ac-global-border-offset-thin: var(--ac-global-dimension-static-size-25);
      --ac-global-border-offset-thick: var(
        --ac-global-dimension-static-size-50
      );
      --ac-global-border-offset-thicker: var(
        --ac-global-dimension-static-size-100
      );
      --ac-global-border-offset-thickest: var(
        --ac-global-dimension-static-size-200
      );
      --ac-global-grid-baseline: var(--ac-global-dimension-static-size-100);
      --ac-global-grid-gutter-xsmall: var(
        --ac-global-dimension-static-size-200
      );
      --ac-global-grid-gutter-small: var(--ac-global-dimension-static-size-300);
      --ac-global-grid-gutter-medium: var(
        --ac-global-dimension-static-size-400
      );
      --ac-global-grid-gutter-large: var(--ac-global-dimension-static-size-500);
      --ac-global-grid-gutter-xlarge: var(
        --ac-global-dimension-static-size-600
      );
      --ac-global-grid-margin-xsmall: var(
        --ac-global-dimension-static-size-200
      );
      --ac-global-grid-margin-small: var(--ac-global-dimension-static-size-300);
      --ac-global-grid-margin-medium: var(
        --ac-global-dimension-static-size-400
      );
      --ac-global-grid-margin-large: var(--ac-global-dimension-static-size-500);
      --ac-global-grid-margin-xlarge: var(
        --ac-global-dimension-static-size-600
      );

      /* Aliases */
      --ac-alias-single-line-height: var(--ac-global-dimension-size-400);
      --ac-alias-single-line-width: var(--ac-global-dimension-size-2400);
    }
  }
`;

export function GlobalStyles() {
  const { theme } = useProvider();
  const themeCSS = theme === 'dark' ? darkThemeCSS : lightThemeCSS;
  return <Global styles={css(themeCSS, mediumRootCSS)} />;
}
