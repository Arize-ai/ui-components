import { css } from '@emotion/core';

export const modalCSS = css`
  outline: none; /* Hide focus outline */
  visibility: hidden;
  opacity: 0;
  transition: transform 100ms ease-in-out, opacity 100ms ease-in-out,
    visibility 100ms linear 100ms;
  pointer-events: none;

  &.is-open {
    visibility: visible;
    opacity: 1;
    transition-delay: 0ms;
    pointer-events: auto;
  }
`;

export const modalWrapperCSS = css`
  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  width: 100%;
  height: 100%;

  visibility: hidden;

  /* Don't catch clicks */
  pointer-events: none;

  /* Appear above underlay */
  z-index: 2;

  /* Be invisible by default */
  transition: visibility 0ms linear 100s;
`;
