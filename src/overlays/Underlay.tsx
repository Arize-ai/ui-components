import { classNames } from '../utils';
import React from 'react';
import { css } from '@emotion/core';

const underlayCSS = css`
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: none;

  // Exit animations
  transition: opacity 100ms cubic-bezier(0, 0, 0.4, 1) 100ms,
    visibility 0ms linear 100ms;
  &.is-open {
    /* Entry animations */
    transition: opacity 100ms cubic-bezier(0.5, 0, 1, 1) 0;

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
