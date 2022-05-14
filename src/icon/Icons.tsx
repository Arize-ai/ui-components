import React from 'react';
import { css, keyframes } from '@emotion/core';

const loadingCircleKeyframes = keyframes`
 100% {
    transform: rotate(360deg);
  }
`;
/**
 * Raw svg icons from eva. Easily stylizable via CSS
 * @src https://akveo.github.io/eva-icons/#/
 */

export const CheckmarkOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="checkmark">
        <rect width="24" height="24" opacity="0" />
        <path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z" />
      </g>
    </g>
  </svg>
);

export const ClipboardCopy = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="clipboard">
        <rect width="24" height="24" opacity="0" />
        <path d="M18 5V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zM8 4h8v4H8V4zm11 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7a1 1 0 0 1 1 1z" />
      </g>
    </g>
  </svg>
);

export const ExternalLinkOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="external-link">
        <rect width="24" height="24" opacity="0" />
        <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
        <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
      </g>
    </g>
  </svg>
);

export const Cube = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="cube">
        <rect width="24" height="24" opacity="0" />
        <path d="M11.25 11.83L3 8.36v7.73a1.69 1.69 0 0 0 1 1.52L11.19 21h.06z" />
        <path d="M12 10.5l8.51-3.57a1.62 1.62 0 0 0-.51-.38l-7.2-3.37a1.87 1.87 0 0 0-1.6 0L4 6.55a1.62 1.62 0 0 0-.51.38z" />
        <path d="M12.75 11.83V21h.05l7.2-3.39a1.69 1.69 0 0 0 1-1.51V8.36z" />
      </g>
    </g>
  </svg>
);

export const Home = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="home">
        <rect width="24" height="24" opacity="0" />
        <rect x="10" y="14" width="4" height="7" />
        <path d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2H8v-9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h3.11A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44z" />
      </g>
    </g>
  </svg>
);

export const Settings = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="settings">
        <rect width="24" height="24" opacity="0" />
        <circle cx="12" cy="12" r="1.5" />
        <path d="M21.89 10.32L21.1 7.8a2.26 2.26 0 0 0-2.88-1.51l-.34.11a1.74 1.74 0 0 1-1.59-.26l-.11-.08a1.76 1.76 0 0 1-.69-1.43v-.28a2.37 2.37 0 0 0-.68-1.68 2.26 2.26 0 0 0-1.6-.67h-2.55a2.32 2.32 0 0 0-2.29 2.33v.24a1.94 1.94 0 0 1-.73 1.51l-.13.1a1.93 1.93 0 0 1-1.78.29 2.14 2.14 0 0 0-1.68.12 2.18 2.18 0 0 0-1.12 1.33l-.82 2.6a2.34 2.34 0 0 0 1.48 2.94h.16a1.83 1.83 0 0 1 1.12 1.22l.06.16a2.06 2.06 0 0 1-.23 1.86 2.37 2.37 0 0 0 .49 3.3l2.07 1.57a2.25 2.25 0 0 0 1.35.43A2 2 0 0 0 9 22a2.25 2.25 0 0 0 1.47-1l.23-.33a1.8 1.8 0 0 1 1.43-.77 1.75 1.75 0 0 1 1.5.78l.12.17a2.24 2.24 0 0 0 3.22.53L19 19.86a2.38 2.38 0 0 0 .5-3.23l-.26-.38A2 2 0 0 1 19 14.6a1.89 1.89 0 0 1 1.21-1.28l.2-.07a2.36 2.36 0 0 0 1.48-2.93zM12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z" />
      </g>
    </g>
  </svg>
);

export const Bell = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="bell">
        <rect width="24" height="24" opacity="0" />
        <path d="M20.52 15.21l-1.8-1.81V8.94a6.86 6.86 0 0 0-5.82-6.88 6.74 6.74 0 0 0-7.62 6.67v4.67l-1.8 1.81A1.64 1.64 0 0 0 4.64 18H8v.34A3.84 3.84 0 0 0 12 22a3.84 3.84 0 0 0 4-3.66V18h3.36a1.64 1.64 0 0 0 1.16-2.79zM14 18.34A1.88 1.88 0 0 1 12 20a1.88 1.88 0 0 1-2-1.66V18h4z" />
      </g>
    </g>
  </svg>
);

export const FileAdd = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="file-add">
        <rect width="24" height="24" opacity="0" />
        <path d="M19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67zM14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2zm.71-7a.79.79 0 0 1-.71-.85V4l3.74 4z" />
      </g>
    </g>
  </svg>
);

export const CheckmarkCircleOutline = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.997 10.9741H21C21.551 10.9741 21.999 11.4201 22 11.9711C22.008 14.6421 20.975 17.1571 19.091 19.0511C17.208 20.9451 14.7 21.9921 12.029 22.0001H12C9.339 22.0001 6.836 20.9681 4.949 19.0911C3.055 17.2081 2.008 14.7001 2 12.0291C1.992 9.3571 3.025 6.8431 4.909 4.9491C6.792 3.0551 9.3 2.0081 11.971 2.0001C12.766 2.0121 13.576 2.0921 14.352 2.2781C14.888 2.4081 15.219 2.9481 15.089 3.4851C14.96 4.0211 14.417 4.3511 13.883 4.2231C13.262 4.0731 12.603 4.0101 11.977 4.0001C9.84 4.0061 7.833 4.8441 6.327 6.3591C4.82 7.8741 3.994 9.8861 4 12.0231C4.006 14.1601 4.844 16.1661 6.359 17.6731C7.869 19.1741 9.871 20.0001 12 20.0001H12.023C14.16 19.9941 16.167 19.1561 17.673 17.6411C19.18 16.1251 20.006 14.1141 20 11.9771C19.999 11.4251 20.445 10.9751 20.997 10.9741ZM8.293 11.293C8.684 10.902 9.316 10.902 9.707 11.293L11.951 13.537L18.248 6.341C18.612 5.928 19.243 5.884 19.659 6.248C20.074 6.611 20.116 7.243 19.752 7.659L12.752 15.659C12.57 15.867 12.31 15.99 12.033 16H12C11.735 16 11.481 15.895 11.293 15.707L8.293 12.707C7.902 12.316 7.902 11.684 8.293 11.293Z"
      />
      <mask
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="20"
        height="20"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.997 10.9741H21C21.551 10.9741 21.999 11.4201 22 11.9711C22.008 14.6421 20.975 17.1571 19.091 19.0511C17.208 20.9451 14.7 21.9921 12.029 22.0001H12C9.339 22.0001 6.836 20.9681 4.949 19.0911C3.055 17.2081 2.008 14.7001 2 12.0291C1.992 9.3571 3.025 6.8431 4.909 4.9491C6.792 3.0551 9.3 2.0081 11.971 2.0001C12.766 2.0121 13.576 2.0921 14.352 2.2781C14.888 2.4081 15.219 2.9481 15.089 3.4851C14.96 4.0211 14.417 4.3511 13.883 4.2231C13.262 4.0731 12.603 4.0101 11.977 4.0001C9.84 4.0061 7.833 4.8441 6.327 6.3591C4.82 7.8741 3.994 9.8861 4 12.0231C4.006 14.1601 4.844 16.1661 6.359 17.6731C7.869 19.1741 9.871 20.0001 12 20.0001H12.023C14.16 19.9941 16.167 19.1561 17.673 17.6411C19.18 16.1251 20.006 14.1141 20 11.9771C19.999 11.4251 20.445 10.9751 20.997 10.9741ZM8.293 11.293C8.684 10.902 9.316 10.902 9.707 11.293L11.951 13.537L18.248 6.341C18.612 5.928 19.243 5.884 19.659 6.248C20.074 6.611 20.116 7.243 19.752 7.659L12.752 15.659C12.57 15.867 12.31 15.99 12.033 16H12C11.735 16 11.481 15.895 11.293 15.707L8.293 12.707C7.902 12.316 7.902 11.684 8.293 11.293Z"
        />
      </mask>
      <g mask="url(#mask0)"></g>
    </g>
  </svg>
);

export const CheckmarkCircleFilled = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="checkmark-circle-2">
        <rect width="24" height="24" opacity="0" />
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" />
      </g>
    </g>
  </svg>
);

export const FileAddOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="file-add">
        <rect width="24" height="24" opacity="0" />
        <path d="M19.74 8.33l-5.44-6a1 1 0 0 0-.74-.33h-7A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V9a1 1 0 0 0-.26-.67zM14 5l2.74 3h-2a.79.79 0 0 1-.74-.85zm3.44 15H6.56a.53.53 0 0 1-.56-.5v-15a.53.53 0 0 1 .56-.5H12v3.15A2.79 2.79 0 0 0 14.71 10H18v9.5a.53.53 0 0 1-.56.5z" />
        <path d="M14 13h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2z" />
      </g>
    </g>
  </svg>
);

export const LogOut = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="log-out">
        <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0" />
        <path d="M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6z" />
        <path d="M20.82 11.42l-2.82-4a1 1 0 0 0-1.39-.24 1 1 0 0 0-.24 1.4L18.09 11H10a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 .2 1.4 1 1 0 0 0 .6.2 1 1 0 0 0 .8-.4l3-4a1 1 0 0 0 .02-1.18z" />
      </g>
    </g>
  </svg>
);

export const Grid = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="grid">
        <rect width="24" height="24" opacity="0" />
        <path d="M9 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
        <path d="M19 3h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
        <path d="M9 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z" />
        <path d="M19 13h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z" />
      </g>
    </g>
  </svg>
);

export const ExpandOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="expand">
        <rect
          width="24"
          height="24"
          transform="rotate(180 12 12)"
          opacity="0"
        />
        <path d="M20 5a1 1 0 0 0-1-1h-5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L18 7.42V10a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" />
        <path d="M10.71 13.29a1 1 0 0 0-1.42 0L6 16.57V14a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H7.42l3.29-3.29a1 1 0 0 0 0-1.42z" />
      </g>
    </g>
  </svg>
);

export const CollapseOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="collapse">
        <rect
          width="24"
          height="24"
          transform="rotate(180 12 12)"
          opacity="0"
        />
        <path d="M19 9h-2.58l3.29-3.29a1 1 0 1 0-1.42-1.42L15 7.57V5a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2z" />
        <path d="M10 13H5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L9 16.42V19a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z" />
      </g>
    </g>
  </svg>
);

export const PlusCircleOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="plus-circle">
        <rect width="24" height="24" opacity="0" />
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M15 11h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2z" />
      </g>
    </g>
  </svg>
);

export const ArrowIosUpwardOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="arrow-ios-upward">
        <rect
          width="24"
          height="24"
          transform="rotate(180 12 12)"
          opacity="0"
        />
        <path d="M18 15a1 1 0 0 1-.64-.23L12 10.29l-5.37 4.32a1 1 0 0 1-1.41-.15 1 1 0 0 1 .15-1.41l6-4.83a1 1 0 0 1 1.27 0l6 5a1 1 0 0 1 .13 1.41A1 1 0 0 1 18 15z" />
      </g>
    </g>
  </svg>
);

export const ArrowIosDownwardOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="arrow-ios-downward">
        <rect width="24" height="24" opacity="0" />
        <path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z" />
      </g>
    </g>
  </svg>
);

export const ArrowIosForwardOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="arrow-ios-forward">
        <rect
          width="24"
          height="24"
          transform="rotate(-90 12 12)"
          opacity="0"
        />
        <path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z" />
      </g>
    </g>
  </svg>
);

export const AlertTriangleOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="alert-triangle">
        <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0" />
        <path d="M22.56 16.3L14.89 3.58a3.43 3.43 0 0 0-5.78 0L1.44 16.3a3 3 0 0 0-.05 3A3.37 3.37 0 0 0 4.33 21h15.34a3.37 3.37 0 0 0 2.94-1.66 3 3 0 0 0-.05-3.04zm-1.7 2.05a1.31 1.31 0 0 1-1.19.65H4.33a1.31 1.31 0 0 1-1.19-.65 1 1 0 0 1 0-1l7.68-12.73a1.48 1.48 0 0 1 2.36 0l7.67 12.72a1 1 0 0 1 .01 1.01z" />
        <circle cx="12" cy="16" r="1" />
        <path d="M12 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z" />
      </g>
    </g>
  </svg>
);

export const AlertTriangleFilled = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="alert-triangle">
        <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0" />
        <path d="M22.56 16.3L14.89 3.58a3.43 3.43 0 0 0-5.78 0L1.44 16.3a3 3 0 0 0-.05 3A3.37 3.37 0 0 0 4.33 21h15.34a3.37 3.37 0 0 0 2.94-1.66 3 3 0 0 0-.05-3.04zM12 17a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-4a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0z" />
      </g>
    </g>
  </svg>
);

export const AlertCircleOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="alert-circle">
        <rect width="24" height="24" opacity="0" />
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <circle cx="12" cy="16" r="1" />
        <path d="M12 7a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z" />
      </g>
    </g>
  </svg>
);

export const AlertCircleFilled = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="alert-circle">
        <rect width="24" height="24" opacity="0" />
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 15a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-4a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0z" />
      </g>
    </g>
  </svg>
);

export const InfoOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="info">
        <rect
          width="24"
          height="24"
          transform="rotate(180 12 12)"
          opacity="0"
        />
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <circle cx="12" cy="8" r="1" />
        <path d="M12 10a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1z" />
      </g>
    </g>
  </svg>
);

export const InfoFilled = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="info">
        <rect
          width="24"
          height="24"
          transform="rotate(180 12 12)"
          opacity="0"
        />
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0zm-1-7a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
      </g>
    </g>
  </svg>
);

export const CloseOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="close">
        <rect
          width="24"
          height="24"
          transform="rotate(180 12 12)"
          opacity="0"
        />
        <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
      </g>
    </g>
  </svg>
);

export const ArrowDownFill = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17C11.494 17 11.01 16.767 10.674 16.358L6.46103 11.26C5.95703 10.649 5.85603 9.782 6.20203 9.049C6.50703 8.402 7.11403 8 7.78703 8H16.213C16.886 8 17.493 8.402 17.798 9.049C18.144 9.782 18.043 10.649 17.54 11.259L13.326 16.358C12.99 16.767 12.506 17 12 17" />
    <mask
      id="mask0_0_2149"
      maskUnits="userSpaceOnUse"
      x="5"
      y="8"
      width="14"
      height="9"
    >
      <path d="M12 17C11.494 17 11.01 16.767 10.674 16.358L6.46103 11.26C5.95703 10.649 5.85603 9.782 6.20203 9.049C6.50703 8.402 7.11403 8 7.78703 8H16.213C16.886 8 17.493 8.402 17.798 9.049C18.144 9.782 18.043 10.649 17.54 11.259L13.326 16.358C12.99 16.767 12.506 17 12 17Z" />
    </mask>
    <g mask="url(#mask0_0_2149)"></g>
  </svg>
);

export const ChevronDownOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="chevron-down">
        <rect width="24" height="24" opacity="0" />
        <path d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z" />
      </g>
    </g>
  </svg>
);

export const SearchOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="search">
        <rect width="24" height="24" opacity="0" />
        <path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" />
      </g>
    </g>
  </svg>
);

export const LoadingOutline = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    css={css`
      animation: ${loadingCircleKeyframes} 1s infinite linear;
    `}
  >
    <g id="loading">
      <mask
        id="mask0_804_24"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="20"
        height="20"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12ZM4 12C4 16.411 7.589 20 12 20C16.411 20 20 16.411 20 12C20 7.589 16.411 4 12 4C7.589 4 4 7.589 4 12Z"
          fill="inherit"
        />
      </mask>
      <g mask="url(#mask0_804_24)">
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2C11.4477 2 11 2.44772 11 3C11 3.55228 11.4477 4 12 4V12H20C20 12.5523 20.4477 13 21 13C21.5523 13 22 12.5523 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612Z"
          fill="inherit"
        />
      </g>
    </g>
  </svg>
);

export const CloseCircleOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="close-circle">
        <rect width="24" height="24" opacity="0" />
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M14.71 9.29a1 1 0 0 0-1.42 0L12 10.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.29-1.3 1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 12l1.3-1.29a1 1 0 0 0 0-1.42z" />
      </g>
    </g>
  </svg>
);
