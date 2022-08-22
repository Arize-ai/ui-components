import { classNames } from '../utils';
import React from 'react';
import { css } from '@emotion/core';

interface UnderlayProps {
  isOpen?: boolean;
}

export function Underlay({ isOpen }: UnderlayProps) {
  return (
    <div
      css={css`
        background: rgba(0, 0, 0, 0.6);
        &.is-open {
          visibility: visible;
          opacity: 1;
          pointer-events: auto;
          position: fixed;
          inset: 0;
          z-index: 1;
        }
      `}
      className={classNames('ac-underlay', {
        'is-open': isOpen,
      })}
    />
  );
}
