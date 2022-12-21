import { css, keyframes } from '@emotion/react';
import {
  TRANSITION_ENTER_DURATION_MS,
  TRANSITION_EXIT_DURATION_MS,
} from './constants';

const slideInFromRight = keyframes`
    0% { transform: translateX(400px); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
`;

export const slideInFromRightCSS = css`
  /* CSS Transition group generated class */
  &.is-enter-active {
    animation: ${slideInFromRight} ${TRANSITION_ENTER_DURATION_MS / 1000}s
      forwards ease-in-out;
  }
`;

export const disappearCSS = css`
  opacity: 1;
  transition: opacity ${TRANSITION_EXIT_DURATION_MS / 1000}s ease-in-out;
  /* CSS Transition group generated class */
  &.is-exit {
    opacity: 0;
  }
`;
