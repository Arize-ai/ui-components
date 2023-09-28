import React from 'react';
import { css, keyframes } from '@emotion/react';

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

export const DuplicateIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 13V12C9 10.346 10.346 9 12 9H13V5.667C13 5.299 12.701 5 12.333 5H5.667C5.299 5 5 5.299 5 5.667V12.333C5 12.701 5.299 13 5.667 13H9ZM9 15H5.667C4.196 15 3 13.804 3 12.333V5.667C3 4.196 4.196 3 5.667 3H12.333C13.804 3 15 4.196 15 5.667V9H18C19.654 9 21 10.346 21 12V18C21 19.654 19.654 21 18 21H12C10.346 21 9 19.654 9 18V15ZM12 11C11.449 11 11 11.449 11 12V18C11 18.551 11.449 19 12 19H18C18.552 19 19 18.551 19 18V12C19 11.449 18.552 11 18 11H12Z"
            fill="white"
        />
        <mask
            id="mask0_725_12898"
            style={{
                maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="18"
            height="18"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 13V12C9 10.346 10.346 9 12 9H13V5.667C13 5.299 12.701 5 12.333 5H5.667C5.299 5 5 5.299 5 5.667V12.333C5 12.701 5.299 13 5.667 13H9ZM9 15H5.667C4.196 15 3 13.804 3 12.333V5.667C3 4.196 4.196 3 5.667 3H12.333C13.804 3 15 4.196 15 5.667V9H18C19.654 9 21 10.346 21 12V18C21 19.654 19.654 21 18 21H12C10.346 21 9 19.654 9 18V15ZM12 11C11.449 11 11 11.449 11 12V18C11 18.551 11.449 19 12 19H18C18.552 19 19 18.551 19 18V12C19 11.449 18.552 11 18 11H12Z"
                fill="white"
            />
        </mask>
        <g mask="url(#mask0_725_12898)"></g>
    </svg>
);

export const EditOutline = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
            <g data-name="edit">
                <rect width="24" height="24" opacity="0" />
                <path d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z" />
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

export const BellOutline = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
            <g data-name="bell">
                <rect width="24" height="24" opacity="0" />
                <path d="M20.52 15.21l-1.8-1.81V8.94a6.86 6.86 0 0 0-5.82-6.88 6.74 6.74 0 0 0-7.62 6.67v4.67l-1.8 1.81A1.64 1.64 0 0 0 4.64 18H8v.34A3.84 3.84 0 0 0 12 22a3.84 3.84 0 0 0 4-3.66V18h3.36a1.64 1.64 0 0 0 1.16-2.79zM14 18.34A1.88 1.88 0 0 1 12 20a1.88 1.88 0 0 1-2-1.66V18h4zM5.51 16l1.18-1.18a2 2 0 0 0 .59-1.42V8.73A4.73 4.73 0 0 1 8.9 5.17 4.67 4.67 0 0 1 12.64 4a4.86 4.86 0 0 1 4.08 4.9v4.5a2 2 0 0 0 .58 1.42L18.49 16z" />
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

export const VolumeOffOutline = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
            <g data-name="volume-off">
                <rect width="24" height="24" opacity="0" />
                <path d="M4.71 3.29a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
                <path d="M16.91 14.08l1.44 1.44a6 6 0 0 0-.07-7.15 1 1 0 1 0-1.56 1.26 4 4 0 0 1 .19 4.45z" />
                <path d="M21 12a6.51 6.51 0 0 1-1.78 4.39l1.42 1.42A8.53 8.53 0 0 0 23 12a8.75 8.75 0 0 0-3.36-6.77 1 1 0 1 0-1.28 1.54A6.8 6.8 0 0 1 21 12z" />
                <path d="M13.5 18.1l-5.1-3.5a1 1 0 0 0-.57-.17H3.5V9.57h3.24l-2-2H2.5a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4a1.06 1.06 0 0 0 .57.17 1 1 0 0 0 1-1v-1.67l-2-2z" />
                <path d="M13.5 5.9v4.77l2 2V4a1 1 0 0 0-1.57-.83L9.23 6.4l1.44 1.44z" />
            </g>
        </g>
    </svg>
);

export const MaximizeOutline = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
            <g data-name="maximize">
                <rect width="24" height="24" opacity="0" />
                <path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" />
                <path d="M13 10h-1V9a1 1 0 0 0-2 0v1H9a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2z" />
            </g>
        </g>
    </svg>
);

export const VolumeOnOutline = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
            <g data-name="volume-up">
                <rect width="24" height="24" opacity="0" />
                <path d="M18.28 8.37a1 1 0 1 0-1.56 1.26 4 4 0 0 1 0 4.74A1 1 0 0 0 17.5 16a1 1 0 0 0 .78-.37 6 6 0 0 0 0-7.26z" />
                <path d="M19.64 5.23a1 1 0 1 0-1.28 1.54A6.8 6.8 0 0 1 21 12a6.8 6.8 0 0 1-2.64 5.23 1 1 0 0 0-.13 1.41A1 1 0 0 0 19 19a1 1 0 0 0 .64-.23A8.75 8.75 0 0 0 23 12a8.75 8.75 0 0 0-3.36-6.77z" />
                <path d="M15 3.12a1 1 0 0 0-1 0L7.52 7.57h-5a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4a1.06 1.06 0 0 0 .57.17 1 1 0 0 0 1-1V4a1 1 0 0 0-.5-.88zm-1.47 15L8.4 14.6a1 1 0 0 0-.57-.17H3.5V9.57h4.33a1 1 0 0 0 .57-.17l5.1-3.5z" />
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

export const PlusOutline = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
            <g data-name="plus">
                <rect
                    width="24"
                    height="24"
                    transform="rotate(180 12 12)"
                    opacity="0"
                />
                <path d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z" />
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

export const DownloadOutline = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
            <g data-name="download">
                <rect width="24" height="24" opacity="0" />
                <rect x="4" y="18" width="16" height="2" rx="1" ry="1" />
                <rect
                    x="3"
                    y="17"
                    width="4"
                    height="2"
                    rx="1"
                    ry="1"
                    transform="rotate(-90 5 18)"
                />
                <rect
                    x="17"
                    y="17"
                    width="4"
                    height="2"
                    rx="1"
                    ry="1"
                    transform="rotate(-90 19 18)"
                />
                <path d="M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39 1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2z" />
                <path d="M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z" />
            </g>
        </g>
    </svg>
);

export const Info = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
            <g data-name="info">
                <rect
                    width="24"
                    height="24"
                    transform="rotate(180 12 12)"
                    opacity="0"
                ></rect>
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0zm-1-7a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path>
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

export const MinusCircleOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="minus-circle">
        <rect width="24" height="24" opacity="0" />
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M15 11H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z" />
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

export const ArrowIosBackOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="arrow-ios-back">
        <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0" />
        <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z" />
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

export const QuestionMarkCircle = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
            <g data-name="menu-arrow-circle">
                <rect
                    width="24"
                    height="24"
                    transform="rotate(180 12 12)"
                    opacity="0"
                />
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-5.16V14a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.5-1.5 1 1 0 0 1-2 0 3.5 3.5 0 1 1 4.5 3.34z" />
            </g>
        </g>
    </svg>
);

export const QuestionMarkCircleOutline = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.33337 7.99992C1.33337 4.32392 4.32404 1.33325 8.00004 1.33325C11.676 1.33325 14.6667 4.32392 14.6667 7.99992C14.6667 11.6759 11.676 14.6666 8.00004 14.6666C4.32404 14.6666 1.33337 11.6759 1.33337 7.99992ZM8.00004 13.3333C5.05937 13.3333 2.66671 10.9406 2.66671 7.99992C2.66671 5.05925 5.05937 2.66659 8.00004 2.66659C10.9407 2.66659 13.3334 5.05925 13.3334 7.99992C13.3334 10.9406 10.9407 13.3333 8.00004 13.3333ZM5.66671 6.33325C5.66671 5.04659 6.71337 3.99992 8.00004 3.99992C9.28671 3.99992 10.3334 5.04659 10.3334 6.33325C10.3334 7.38659 9.62671 8.26859 8.66671 8.55792V9.33325C8.66671 9.70192 8.36871 9.99992 8.00004 9.99992C7.63137 9.99992 7.33337 9.70192 7.33337 9.33325V7.99992C7.33337 7.63125 7.63137 7.33325 8.00004 7.33325C8.55137 7.33325 9.00004 6.88459 9.00004 6.33325C9.00004 5.78192 8.55137 5.33325 8.00004 5.33325C7.44871 5.33325 7.00004 5.78192 7.00004 6.33325C7.00004 6.70192 6.70204 6.99992 6.33337 6.99992C5.96471 6.99992 5.66671 6.70192 5.66671 6.33325ZM7.33337 11.3333C7.33337 10.9646 7.63137 10.6666 8.00004 10.6666C8.36871 10.6666 8.66671 10.9646 8.66671 11.3333C8.66671 11.7019 8.36871 11.9999 8.00004 11.9999C7.63137 11.9999 7.33337 11.7019 7.33337 11.3333Z"
            fill="#72D9FF"
        />
        <mask
            id="mask0_561_7017"
            maskUnits="userSpaceOnUse"
            x="1"
            y="1"
            width="14"
            height="14"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.33337 7.99992C1.33337 4.32392 4.32404 1.33325 8.00004 1.33325C11.676 1.33325 14.6667 4.32392 14.6667 7.99992C14.6667 11.6759 11.676 14.6666 8.00004 14.6666C4.32404 14.6666 1.33337 11.6759 1.33337 7.99992ZM8.00004 13.3333C5.05937 13.3333 2.66671 10.9406 2.66671 7.99992C2.66671 5.05925 5.05937 2.66659 8.00004 2.66659C10.9407 2.66659 13.3334 5.05925 13.3334 7.99992C13.3334 10.9406 10.9407 13.3333 8.00004 13.3333ZM5.66671 6.33325C5.66671 5.04659 6.71337 3.99992 8.00004 3.99992C9.28671 3.99992 10.3334 5.04659 10.3334 6.33325C10.3334 7.38659 9.62671 8.26859 8.66671 8.55792V9.33325C8.66671 9.70192 8.36871 9.99992 8.00004 9.99992C7.63137 9.99992 7.33337 9.70192 7.33337 9.33325V7.99992C7.33337 7.63125 7.63137 7.33325 8.00004 7.33325C8.55137 7.33325 9.00004 6.88459 9.00004 6.33325C9.00004 5.78192 8.55137 5.33325 8.00004 5.33325C7.44871 5.33325 7.00004 5.78192 7.00004 6.33325C7.00004 6.70192 6.70204 6.99992 6.33337 6.99992C5.96471 6.99992 5.66671 6.70192 5.66671 6.33325ZM7.33337 11.3333C7.33337 10.9646 7.63137 10.6666 8.00004 10.6666C8.36871 10.6666 8.66671 10.9646 8.66671 11.3333C8.66671 11.7019 8.36871 11.9999 8.00004 11.9999C7.63137 11.9999 7.33337 11.7019 7.33337 11.3333Z"
                fill="white"
            />
        </mask>
        <g mask="url(#mask0_561_7017)"></g>
    </svg>
);

export const CheckmarkCircle = () => (
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

export const CloseCircle = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
            <g data-name="close-circle">
                <rect width="24" height="24" opacity="0" />
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm2.71 11.29a1 1 0 0 1 0 1.42 1 1 0 0 1-1.42 0L12 13.41l-1.29 1.3a1 1 0 0 1-1.42 0 1 1 0 0 1 0-1.42l1.3-1.29-1.3-1.29a1 1 0 0 1 1.42-1.42l1.29 1.3 1.29-1.3a1 1 0 0 1 1.42 1.42L13.41 12z" />
            </g>
        </g>
    </svg>
);

export const TrashOutline = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
            <g data-name="trash">
                <rect width="24" height="24" opacity="0" />
                <path d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z" />
            </g>
        </g>
    </svg>
);

export const MinusCircle = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM9 11C8.45 11 8 11.45 8 12C8 12.55 8.45 13 9 13H15C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11H9Z"
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
                d="M2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM9 11C8.45 11 8 11.45 8 12C8 12.55 8.45 13 9 13H15C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11H9Z"
            />
        </mask>
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

export const QuestionOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="menu-arrow-circle">
        <rect
          width="24"
          height="24"
          transform="rotate(180 12 12)"
          opacity="0"
        />
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M12 6a3.5 3.5 0 0 0-3.5 3.5 1 1 0 0 0 2 0A1.5 1.5 0 1 1 12 11a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.16A3.49 3.49 0 0 0 12 6z" />
        <circle cx="12" cy="17" r="1" />
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

export const ChevronRightOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="chevron-right">
        <rect
          width="24"
          height="24"
          transform="rotate(-90 12 12)"
          opacity="0"
        />
        <path d="M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z" />
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

export const ChevronLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
            <g data-name="chevron-left">
                <rect
                    width="24"
                    height="24"
                    transform="rotate(90 12 12)"
                    opacity="0"
                />
                <path d="M13.36 17a1 1 0 0 1-.72-.31l-3.86-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.42L10.9 12l3.18 3.3a1 1 0 0 1 0 1.41 1 1 0 0 1-.72.29z" />
            </g>
        </g>
    </svg>
);

export const ChevronRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
            <g data-name="chevron-right">
                <rect
                    width="24"
                    height="24"
                    transform="rotate(-90 12 12)"
                    opacity="0"
                />
                <path d="M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z" />
            </g>
        </g>
    </svg>
);

export const ChevronUp = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
            <g data-name="chevron-up">
                <rect
                    width="24"
                    height="24"
                    transform="rotate(180 12 12)"
                    opacity="0"
                />
                <path d="M16 14.5a1 1 0 0 1-.71-.29L12 10.9l-3.3 3.18a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.42l4-3.86a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.42 1 1 0 0 1-.69.28z" />
            </g>
        </g>
    </svg>
);

export const ChevronDown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
            <g data-name="chevron-down">
                <rect width="24" height="24" opacity="0" />
                <path d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z" />
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

export const MoreHorizontalOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="more-horizotnal">
        <rect width="24" height="24" opacity="0" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="19" cy="12" r="2" />
        <circle cx="5" cy="12" r="2" />
      </g>
    </g>
  </svg>
);

export const MoveFilled = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="move">
        <rect
          width="24"
          height="24"
          transform="rotate(180 12 12)"
          opacity="0"
        />
        <path d="M21.71 11.31l-3-3a1 1 0 0 0-1.42 1.42L18.58 11H13V5.41l1.29 1.3A1 1 0 0 0 15 7a1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42l-3-3A1 1 0 0 0 12 2a1 1 0 0 0-.7.29l-3 3a1 1 0 0 0 1.41 1.42L11 5.42V11H5.41l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3A1 1 0 0 0 2 12a1 1 0 0 0 .29.71l3 3A1 1 0 0 0 6 16a1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42L5.42 13H11v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 22a1 1 0 0 0 .7-.29l3-3a1 1 0 0 0-1.42-1.42L13 18.58V13h5.59l-1.3 1.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 16a1 1 0 0 0 .71-.29l3-3A1 1 0 0 0 22 12a1 1 0 0 0-.29-.69z" />
      </g>
    </g>
  </svg>
);

export const FolderOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="folder">
        <rect width="24" height="24" opacity="0" />
        <path d="M19.5 20.5h-15A2.47 2.47 0 0 1 2 18.07V5.93A2.47 2.47 0 0 1 4.5 3.5h4.6a1 1 0 0 1 .77.37l2.6 3.18h7A2.47 2.47 0 0 1 22 9.48v8.59a2.47 2.47 0 0 1-2.5 2.43zM4 13.76v4.31a.46.46 0 0 0 .5.43h15a.46.46 0 0 0 .5-.43V9.48a.46.46 0 0 0-.5-.43H12a1 1 0 0 1-.77-.37L8.63 5.5H4.5a.46.46 0 0 0-.5.43z" />
      </g>
    </g>
  </svg>
);

export const LassoOutline = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.2257 11.8L11.7393 8.41153C11.7109 8.22144 11.7902 8.03189 11.9431 7.9217C12.0956 7.81142 12.2951 7.79984 12.4586 7.89091L16.2173 9.99324C17.4623 8.99204 18.1154 7.77352 18.1154 6.53971C18.1154 5.16011 17.2989 3.79965 15.7513 2.74073C14.2085 1.6851 12.0218 1 9.55769 1C7.09362 1 4.90688 1.6851 3.36408 2.74073C1.81649 3.79965 1 5.16011 1 6.53971C1 7.9193 1.81649 9.27976 3.36408 10.3387C3.42007 10.377 3.4769 10.4148 3.53457 10.4521C3.57721 10.4488 3.6203 10.447 3.66378 10.447C4.25644 10.447 4.7771 10.7654 5.0742 11.2456C6.36894 11.7696 7.9006 12.0794 9.55769 12.0794C10.4938 12.0794 11.3898 11.9805 12.2257 11.8ZM12.3681 12.7921C11.4796 12.9789 10.5358 13.0794 9.55769 13.0794C8.03657 13.0794 6.59844 12.8363 5.32179 12.4037C5.2538 12.9334 4.95341 13.3874 4.5299 13.6526C4.61517 13.7612 4.70537 13.8853 4.79522 14.0242C5.16436 14.5947 5.54041 15.4345 5.51764 16.4699C5.49439 17.5267 5.00709 18.3616 4.55343 18.915C4.32482 19.1938 4.0981 19.4095 3.92766 19.5564C3.84217 19.63 3.77007 19.687 3.71793 19.7265C3.69184 19.7463 3.67068 19.7618 3.65525 19.7728L3.6365 19.7861L3.63052 19.7902L3.62841 19.7917L3.62759 19.7922L3.62723 19.7925C3.62707 19.7926 3.62691 19.7927 3.34519 19.379L3.62691 19.7927C3.39879 19.9479 3.08774 19.8884 2.93215 19.66C2.7767 19.4317 2.83526 19.1211 3.06288 18.9658L3.06295 18.9658L3.06304 18.9657L3.06326 18.9655L3.07183 18.9595C3.08034 18.9534 3.0943 18.9432 3.11293 18.9291C3.15023 18.9008 3.20601 18.8569 3.27421 18.7981C3.41116 18.6801 3.59512 18.5051 3.77969 18.28C4.15237 17.8254 4.50136 17.1997 4.51794 16.4459C4.53499 15.6707 4.25394 15.0268 3.95603 14.5663C3.80773 14.3371 3.65843 14.1585 3.54764 14.0386C3.49243 13.9788 3.44732 13.9342 3.41742 13.9058C3.40487 13.8938 3.39504 13.8848 3.38831 13.8787C2.59563 13.743 1.99119 13.0317 1.99119 12.1745C1.99119 11.6923 2.18248 11.2563 2.49096 10.9429C0.943505 9.78084 0 8.23567 0 6.53971C0 2.92793 4.27912 0 9.55769 0C14.8363 0 19.1154 2.92793 19.1154 6.53971C19.1154 8.03471 18.3822 9.41255 17.1485 10.5141L19.7425 11.965C19.9297 12.0691 20.029 12.285 19.9925 12.4988C19.9907 12.5093 19.9885 12.5192 19.9863 12.5291C19.9347 12.7525 19.7439 12.912 19.5215 12.9178L15.7303 13.0197C15.5329 13.0249 15.3583 13.1512 15.286 13.341L13.8962 16.9857C13.8153 17.1997 13.6049 17.3304 13.384 17.304C13.1626 17.2776 12.9862 17.1018 12.9542 16.8745L12.3681 12.7921ZM3.36757 11.5227C3.15331 11.6367 2.99119 11.872 2.99119 12.1745C2.99119 12.607 3.3225 12.902 3.66378 12.902C4.00506 12.902 4.33638 12.607 4.33638 12.1745C4.33638 12.1174 4.3306 12.0627 4.31979 12.0108C3.98738 11.8615 3.66939 11.6984 3.36757 11.5227Z"
    />
  </svg>
);

export const ListOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="list">
        <rect
          width="24"
          height="24"
          transform="rotate(180 12 12)"
          opacity="0"
        />
        <circle cx="4" cy="7" r="1" />
        <circle cx="4" cy="12" r="1" />
        <circle cx="4" cy="17" r="1" />
        <rect x="7" y="11" width="14" height="2" rx=".94" ry=".94" />
        <rect x="7" y="16" width="14" height="2" rx=".94" ry=".94" />
        <rect x="7" y="6" width="14" height="2" rx=".94" ry=".94" />
      </g>
    </g>
  </svg>
);

export const BookOpenFilled = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="book-open">
        <rect
          width="24"
          height="24"
          transform="rotate(180 12 12)"
          opacity="0"
        />
        <path d="M21 4.34a1.24 1.24 0 0 0-1.08-.23L13 5.89v14.27l7.56-1.94A1.25 1.25 0 0 0 21.5 17V5.32a1.25 1.25 0 0 0-.5-.98z" />
        <path d="M11 5.89L4.06 4.11A1.27 1.27 0 0 0 3 4.34a1.25 1.25 0 0 0-.48 1V17a1.25 1.25 0 0 0 .94 1.21L11 20.16z" />
      </g>
    </g>
  </svg>
);

export const BookFilled = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="book">
        <rect width="24" height="24" opacity="0" />
        <path d="M19 3H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM7 19a1 1 0 0 1 0-2h11v2z" />
      </g>
    </g>
  </svg>
);

export const BookOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="book">
        <rect width="24" height="24" opacity="0" />
        <path d="M19 3H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM7 5h11v10H7a3 3 0 0 0-1 .18V6a1 1 0 0 1 1-1zm0 14a1 1 0 0 1 0-2h11v2z" />
      </g>
    </g>
  </svg>
);

export const BookOpen = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
            <g data-name="book-open">
                <rect
                    width="24"
                    height="24"
                    transform="rotate(180 12 12)"
                    opacity="0"
                />
                <path d="M20.62 4.22a1 1 0 0 0-.84-.2L12 5.77 4.22 4A1 1 0 0 0 3 5v12.2a1 1 0 0 0 .78 1l8 1.8h.44l8-1.8a1 1 0 0 0 .78-1V5a1 1 0 0 0-.38-.78zM5 6.25l6 1.35v10.15L5 16.4zM19 16.4l-6 1.35V7.6l6-1.35z" />
            </g>
        </g>
    </svg>
);

export const CalendarOutline = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
            <g data-name="calendar">
                <rect width="24" height="24" opacity="0" />
                <path d="M18 4h-1V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM6 6h1v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1v4H5V7a1 1 0 0 1 1-1zm12 14H6a1 1 0 0 1-1-1v-6h14v6a1 1 0 0 1-1 1z" />
                <circle cx="8" cy="16" r="1" />
                <path d="M16 15h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z" />
            </g>
        </g>
    </svg>
);

export const Download = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="download">
        <rect width="24" height="24" opacity="0" />
        <rect x="4" y="18" width="16" height="2" rx="1" ry="1" />
        <rect
          x="3"
          y="17"
          width="4"
          height="2"
          rx="1"
          ry="1"
          transform="rotate(-90 5 18)"
        />
        <rect
          x="17"
          y="17"
          width="4"
          height="2"
          rx="1"
          ry="1"
          transform="rotate(-90 19 18)"
        />
        <path d="M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39 1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2z" />
        <path d="M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z" />
      </g>
    </g>
  </svg>
);

export const MoonOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="moon">
        <rect width="24" height="24" opacity="0" />
        <path d="M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15 10.46 10.46 0 0 1-.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3zM7.46 4.92a7.93 7.93 0 0 0-1.37 1.22 8.44 8.44 0 0 0 .2 11.32A8.29 8.29 0 0 0 12.22 20h.08a8.34 8.34 0 0 0 6.78-3.49A10.37 10.37 0 0 1 7.46 4.92z" />
      </g>
    </g>
  </svg>
);

export const SunOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="sun">
        <rect
          width="24"
          height="24"
          transform="rotate(180 12 12)"
          opacity="0"
        />
        <path d="M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z" />
        <path d="M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z" />
        <path d="M6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z" />
        <path d="M6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z" />
        <path d="M17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z" />
        <path d="M12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z" />
        <path d="M17.73 16.14a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z" />
        <path d="M6.27 16.14l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44z" />
        <path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z" />
      </g>
    </g>
  </svg>
);

export const ArrowDownFilled = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="arrow-downward">
        <rect
          width="24"
          height="24"
          transform="rotate(-90 12 12)"
          opacity="0"
        />
        <path d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17z" />
      </g>
    </g>
  </svg>
);

export const ArrowUpFilled = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="arrow-up">
        <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0" />
        <path d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1 2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1z" />
      </g>
    </g>
  </svg>
);

export const FileOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="file">
        <rect width="24" height="24" opacity="0" />
        <path d="M19.74 8.33l-5.44-6a1 1 0 0 0-.74-.33h-7A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V9a1 1 0 0 0-.26-.67zM17.65 9h-3.94a.79.79 0 0 1-.71-.85V4h.11zm-.21 11H6.56a.53.53 0 0 1-.56-.5v-15a.53.53 0 0 1 .56-.5H11v4.15A2.79 2.79 0 0 0 13.71 11H18v8.5a.53.53 0 0 1-.56.5z" />
      </g>
    </g>
  </svg>
);

export const OptionsOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="options">
        <rect width="24" height="24" opacity="0" />
        <path d="M7 14.18V3a1 1 0 0 0-2 0v11.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-1.18a3 3 0 0 0 0-5.64zM6 18a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
        <path d="M21 13a3 3 0 0 0-2-2.82V3a1 1 0 0 0-2 0v7.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-5.18A3 3 0 0 0 21 13zm-3 1a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
        <path d="M15 5a3 3 0 1 0-4 2.82V21a1 1 0 0 0 2 0V7.82A3 3 0 0 0 15 5zm-3 1a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
      </g>
    </g>
  </svg>
);

export const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="arrow-right">
        <rect
          width="24"
          height="24"
          transform="rotate(180 12 12)"
          opacity="0"
        />
        <path d="M10.46 18a2.23 2.23 0 0 1-.91-.2 1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46z" />
      </g>
    </g>
  </svg>
);

export const ArrowBack = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
            <g data-name="arrow-back">
                <rect
                    width="24"
                    height="24"
                    transform="rotate(90 12 12)"
                    opacity="0"
                />
                <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z" />
            </g>
        </g>
    </svg>
);

export const ArrowDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="arrow-downward">
        <rect
          width="24"
          height="24"
          transform="rotate(-90 12 12)"
          opacity="0"
        />
        <path d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17z" />
      </g>
    </g>
  </svg>
);

export const ArrowUp = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
            <g data-name="arrow-up">
                <rect
                    width="24"
                    height="24"
                    transform="rotate(90 12 12)"
                    opacity="0"
                />
                <path d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1 2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1z" />
            </g>
        </g>
    </svg>
);

export const FunnelOutline = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
            <g data-name="funnel">
                <rect width="24" height="24" opacity="0" />
                <path d="M13.9 22a1 1 0 0 1-.6-.2l-4-3.05a1 1 0 0 1-.39-.8v-3.27l-4.8-9.22A1 1 0 0 1 5 4h14a1 1 0 0 1 .86.49 1 1 0 0 1 0 1l-5 9.21V21a1 1 0 0 1-.55.9 1 1 0 0 1-.41.1zm-3-4.54l2 1.53v-4.55A1 1 0 0 1 13 14l4.3-8H6.64l4.13 8a1 1 0 0 1 .11.46z" />
            </g>
        </g>
    </svg>
);

export const FilterRemove = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="15"
        viewBox="0 0 14 15"
        fill="none"
    >
        <path
            d="M12.828 5.31581L11.8123 6.40596L12.828 7.49611V7.49626C12.9265 7.59831 12.9826 7.73855 12.9837 7.88536C12.9848 8.03217 12.931 8.17348 12.8342 8.27723C12.7376 8.38111 12.6059 8.43886 12.4691 8.43764C12.3323 8.43641 12.2016 8.37607 12.1065 8.27051L11.0909 7.18036L10.0753 8.27051C9.87516 8.47797 9.557 8.47507 9.36016 8.26379C9.16344 8.05266 9.16059 7.71107 9.35389 7.49628L10.3695 6.40613L9.35389 5.31599V5.31583C9.15902 5.10135 9.16101 4.75838 9.35845 4.54649C9.55588 4.3346 9.87546 4.33231 10.0753 4.5416L11.0909 5.63175L12.1066 4.5416C12.2018 4.4368 12.3322 4.37723 12.4687 4.37631C12.605 4.37539 12.7361 4.43314 12.8327 4.53671C12.929 4.64029 12.9828 4.78099 12.982 4.92734C12.9811 5.07369 12.9256 5.21363 12.828 5.31583L12.828 5.31581ZM13.381 0.900856C13.254 0.629846 13.0593 0.402067 12.8187 0.243052C12.578 0.0840208 12.3009 -0.000156216 12.0183 2.1764e-07H1.52935C1.15128 0.00152791 0.787027 0.152766 0.506328 0.424679C0.225767 0.696604 0.0484198 1.07013 0.00855423 1.47357C-0.0313041 1.87717 0.0690522 2.28233 0.290255 2.61139L4.713 9.12491V12.9543C4.71229 13.2929 4.80951 13.6234 4.99114 13.9003C5.17278 14.1771 5.42999 14.3867 5.7272 14.5002L6.79734 14.9053C7.26509 15.0838 7.78436 15.0071 8.18976 14.6996C8.59501 14.3922 8.83573 13.8923 8.835 13.3596V10.0745C8.835 9.77219 8.60668 9.52699 8.32484 9.52699C8.04314 9.52699 7.81468 9.77219 7.81468 10.0745V13.3596C7.8151 13.5368 7.73511 13.703 7.60017 13.8051C7.46537 13.9072 7.29256 13.9322 7.13727 13.8723L6.066 13.4672H6.06585C5.86501 13.3893 5.73177 13.1837 5.73362 12.9544V8.94654V8.94669C5.73362 8.83074 5.69932 8.718 5.63597 8.6242L1.11593 1.96754C1.0049 1.80011 0.989813 1.58028 1.07664 1.39711C1.16347 1.21394 1.33799 1.09753 1.52945 1.09524H12.0184C12.2094 1.09753 12.3838 1.21333 12.4708 1.39588C12.5579 1.57859 12.5435 1.79796 12.4333 1.96569L12.1273 2.41466C12.0443 2.53153 12.0086 2.6794 12.0282 2.82483C12.0479 2.97042 12.1212 3.10119 12.2316 3.18811C12.3422 3.27504 12.4806 3.31048 12.6157 3.28665C12.7509 3.26297 12.8715 3.18185 12.9503 3.06162L13.2578 2.6114L13.2576 2.61125C13.424 2.36652 13.5237 2.07703 13.5455 1.77499C13.5672 1.47296 13.5103 1.17034 13.3811 0.900997L13.381 0.900856Z"
            fill="white"
            fillOpacity="0.9"
        />
    </svg>
);

export const EyeOutline = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.77475 4.16985C14.7548 4.01401 17.6914 8.65901 18.2231 9.58568C18.3698 9.84235 18.3698 10.1582 18.2231 10.4148C17.5114 11.6557 14.8314 15.7132 10.2256 15.8307C10.1573 15.8323 10.0889 15.8332 10.0206 15.8332C5.13475 15.8332 2.30142 11.329 1.77725 10.4148C1.62975 10.1582 1.62975 9.84235 1.77725 9.58568C2.48892 8.34485 5.16808 4.28651 9.77475 4.16985ZM10.1831 14.1648C6.59475 14.2482 4.25392 11.179 3.47725 9.99651C4.33225 8.65901 6.48558 5.92068 9.81725 5.83568C13.3914 5.74485 15.7456 8.82151 16.5223 10.004C15.6681 11.3415 13.5139 14.0798 10.1831 14.1648ZM7.08333 10.0002C7.08333 8.39185 8.39167 7.08351 10 7.08351C11.6083 7.08351 12.9167 8.39185 12.9167 10.0002C12.9167 11.6085 11.6083 12.9168 10 12.9168C8.39167 12.9168 7.08333 11.6085 7.08333 10.0002ZM8.75 10.0002C8.75 10.6893 9.31083 11.2502 10 11.2502C10.6892 11.2502 11.25 10.6893 11.25 10.0002C11.25 9.31101 10.6892 8.75018 10 8.75018C9.31083 8.75018 8.75 9.31101 8.75 10.0002Z"
            fill="white"
            fillOpacity="0.9"
        />
        <mask
            id="mask0_935_15127"
            style={{
                maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x="1"
            y="4"
            width="18"
            height="12"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.77475 4.16985C14.7548 4.01401 17.6914 8.65901 18.2231 9.58568C18.3698 9.84235 18.3698 10.1582 18.2231 10.4148C17.5114 11.6557 14.8314 15.7132 10.2256 15.8307C10.1573 15.8323 10.0889 15.8332 10.0206 15.8332C5.13475 15.8332 2.30142 11.329 1.77725 10.4148C1.62975 10.1582 1.62975 9.84235 1.77725 9.58568C2.48892 8.34485 5.16808 4.28651 9.77475 4.16985ZM10.1831 14.1648C6.59475 14.2482 4.25392 11.179 3.47725 9.99651C4.33225 8.65901 6.48558 5.92068 9.81725 5.83568C13.3914 5.74485 15.7456 8.82151 16.5223 10.004C15.6681 11.3415 13.5139 14.0798 10.1831 14.1648ZM7.08333 10.0002C7.08333 8.39185 8.39167 7.08351 10 7.08351C11.6083 7.08351 12.9167 8.39185 12.9167 10.0002C12.9167 11.6085 11.6083 12.9168 10 12.9168C8.39167 12.9168 7.08333 11.6085 7.08333 10.0002ZM8.75 10.0002C8.75 10.6893 9.31083 11.2502 10 11.2502C10.6892 11.2502 11.25 10.6893 11.25 10.0002C11.25 9.31101 10.6892 8.75018 10 8.75018C9.31083 8.75018 8.75 9.31101 8.75 10.0002Z"
                fill="white"
            />
        </mask>
        <g mask="url(#mask0_935_15127)"></g>
    </svg>
);

export const FilterAdd = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="15"
        viewBox="0 0 14 15"
        fill="none"
    >
        <path
            d="M13.55 6.40544C13.55 6.55054 13.4962 6.68984 13.4005 6.79249C13.3048 6.89513 13.1749 6.95287 13.0397 6.95287H11.6028V8.49404C11.6028 8.79632 11.3742 9.04147 11.0924 9.04147C10.8105 9.04147 10.5821 8.79632 10.5821 8.49404V6.95287H9.14517C8.86337 6.95287 8.63483 6.70772 8.63483 6.40544C8.63483 6.103 8.86337 5.85801 9.14517 5.85801H10.5821V4.31667C10.5821 4.01439 10.8105 3.76924 11.0924 3.76924C11.3742 3.76924 11.6028 4.01439 11.6028 4.31667V5.85801H13.0397C13.1749 5.85801 13.3048 5.91559 13.4005 6.01823C13.4962 6.12088 13.55 6.26018 13.55 6.40544ZM8.32848 8.39613C8.04654 8.39613 7.81814 8.64128 7.81814 8.94356V13.3574C7.81785 13.5352 7.73711 13.7019 7.6017 13.8045C7.46614 13.907 7.2927 13.9327 7.13634 13.8733L6.06783 13.4644C5.86492 13.3862 5.72936 13.1798 5.72893 12.9486V8.94371C5.72879 8.82809 5.69462 8.71552 5.63125 8.62188L1.11765 1.96394C1.00487 1.79745 0.988777 1.5772 1.07578 1.39391C1.16279 1.21046 1.33836 1.09499 1.53031 1.09484H12.0171C12.2089 1.09499 12.3845 1.21046 12.4716 1.39391C12.5586 1.57735 12.5425 1.7976 12.4298 1.9641L12.1756 2.33939C12.0921 2.45654 12.0564 2.60486 12.0763 2.75074C12.0961 2.89662 12.17 3.02767 12.2811 3.11427C12.3923 3.20103 12.5313 3.23586 12.6667 3.21127C12.8023 3.18652 12.9227 3.10435 13.0009 2.98307L13.2551 2.60824C13.4776 2.27984 13.579 1.87491 13.5396 1.47122C13.5001 1.06753 13.3227 0.693752 13.0416 0.422187C12.7604 0.150458 12.3954 0.000156409 12.0171 0H1.53034C1.152 0.000305467 0.787032 0.150759 0.506089 0.422343C0.225004 0.694073 0.0477303 1.06784 0.00828818 1.47138C-0.0310117 1.87507 0.0703713 2.28001 0.292793 2.60824L4.70907 9.12189V12.9487C4.70949 13.2875 4.80746 13.6176 4.98944 13.8944C5.17128 14.1711 5.42844 14.381 5.72561 14.4952L6.79412 14.9048C7.26301 15.0839 7.78374 15.0074 8.19059 14.6996C8.59726 14.3919 8.83905 13.8913 8.83905 13.3575V8.94362C8.83905 8.79852 8.78523 8.65922 8.68954 8.55657C8.59385 8.45393 8.46375 8.39613 8.32848 8.39613Z"
            fill="white"
        />
    </svg>
);

export const Filter = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="15"
        viewBox="0 0 14 15"
        fill="none"
    >
        <path
            d="M13.381 0.900856C13.254 0.629846 13.0593 0.402067 12.8187 0.243052C12.578 0.0840208 12.3009 -0.000156216 12.0183 2.1764e-07H1.52935C1.15128 0.00152791 0.787027 0.152766 0.506328 0.424679C0.225767 0.696604 0.0484198 1.07013 0.00855423 1.47357C-0.0313041 1.87717 0.0690522 2.28233 0.290255 2.61139L4.713 9.12491V12.9543C4.71229 13.2929 4.80951 13.6234 4.99114 13.9003C5.17278 14.1771 5.42999 14.3867 5.7272 14.5002L6.79734 14.9053C7.26509 15.0838 7.78436 15.0071 8.18976 14.6996C8.59501 14.3922 8.83573 13.8923 8.835 13.3596V10.0745C8.835 9.77219 8.60668 9.52699 8.32484 9.52699C8.04314 9.52699 7.81468 9.77219 7.81468 10.0745V13.3596C7.8151 13.5368 7.73511 13.703 7.60017 13.8051C7.46537 13.9072 7.29256 13.9322 7.13727 13.8723L6.066 13.4672C5.86515 13.3893 5.73177 13.1837 5.73362 12.9544V8.94654C5.73362 8.83059 5.69932 8.718 5.63597 8.6242L1.11593 1.96754C1.0049 1.80011 0.989813 1.58028 1.07664 1.39711C1.16347 1.21394 1.33799 1.09753 1.52945 1.09524H12.0184C12.2094 1.09753 12.3838 1.21333 12.4708 1.39588C12.5579 1.57859 12.5435 1.79796 12.4333 1.96569L12.1273 2.41466C8.04431 9.53153 7.79972 9.85458 7.81937 10C7.83901 10.1456 8.12117 10.1012 8.23163 10.1881C8.34223 10.275 8.48059 10.3105 8.61567 10.2866C8.7509 10.263 8.75614 10.1947 8.835 10.0745L9.5 9C9.6664 8.75527 13.5455 2.27502 13.5455 1.77499C13.5672 1.47296 13.5102 1.1702 13.381 0.900856Z"
            fill="white"
            fillOpacity="0.9"
        />
    </svg>
);

export const TokensOutline = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.32264 7.73275L6.26721 6.67733C5.93552 6.34564 5.39776 6.34564 5.06607 6.67733L4.01064 7.73275C3.67895 8.06445 3.67895 8.60221 4.01064 8.9339L5.06607 9.98933C5.39776 10.321 5.93552 10.321 6.26721 9.98933L7.32264 8.9339C7.65433 8.60221 7.65433 8.06445 7.32264 7.73275ZM4.75695 8.33333L5.66664 7.42364L6.57633 8.33333L5.66664 9.24302L4.75695 8.33333Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.66672 13.3333C6.43362 13.3333 7.16019 13.1607 7.80972 12.8521C8.4596 13.1608 9.18643 13.3333 9.95243 13.3333C12.7139 13.3333 14.9524 11.0948 14.9524 8.33334C14.9524 5.57192 12.7139 3.33334 9.95243 3.33334C9.18643 3.33334 8.4596 3.50591 7.80969 3.81458C7.16019 3.50601 6.43362 3.33334 5.66672 3.33334C2.90529 3.33334 0.666718 5.57192 0.666718 8.33334C0.666718 11.0948 2.90529 13.3333 5.66672 13.3333ZM5.66672 4.28572C3.43129 4.28572 1.6191 6.09791 1.6191 8.33334C1.6191 10.5688 3.43129 12.381 5.66672 12.381C7.72319 12.381 9.42146 10.8473 9.68019 8.86141C9.70272 8.68858 9.71434 8.51232 9.71434 8.33334C9.71434 8.19363 9.70727 8.05556 9.69343 7.91949C9.48617 5.87846 7.76243 4.28572 5.66672 4.28572ZM9.95243 12.381C9.55679 12.381 9.17481 12.3243 8.81393 12.2188C9.81991 11.4029 10.5028 10.2043 10.6409 8.84456C10.658 8.67649 10.6667 8.50594 10.6667 8.33334C10.6667 8.10822 10.6518 7.88658 10.623 7.66934C10.451 6.37275 9.78208 5.23306 8.81393 4.44791C9.17481 4.34237 9.55679 4.28572 9.95243 4.28572C12.1879 4.28572 14.0001 6.09791 14.0001 8.33334C14.0001 10.5688 12.1879 12.381 9.95243 12.381Z"
      />
    </g>
  </svg>
);

export const ClockOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="clock">
        <rect
          width="24"
          height="24"
          transform="rotate(180 12 12)"
          opacity="0"
        />
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M16 11h-3V8a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2z" />
      </g>
    </g>
  </svg>
);
