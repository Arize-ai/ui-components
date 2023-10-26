import React, { ReactNode } from 'react';
import { css } from '@emotion/react';

export const LabelGroup = ({ children }: { children: ReactNode }) => {
  return (
    <span
      className="ac-label-group"
      css={css`
        .ac-label + .ac-label {
          margin: var(--ac-global-dimension-static-size-50);
        }
      `}
    >
      {children}
    </span>
  );
};
