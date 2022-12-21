import { classNames } from '../utils';
import React from 'react';
import { css } from '@emotion/react';

const underlayCSS = css`
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: none;

  // Exit animations
  transition: opacity 0.2s ease-out 0.2s;
  &.is-open {
    /* Entry animations */
    transition: opacity 0.2s ease-in 0.1s;
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
    position: fixed;
    inset: 0;
    z-index: 1;
  }
`;
interface UnderlayProps {
  isOpen?: boolean;
}

export function Underlay({ isOpen }: UnderlayProps) {
  return (
    <div
      css={underlayCSS}
      className={classNames('ac-underlay', {
        'is-open': isOpen,
      })}
    />
  );
}
