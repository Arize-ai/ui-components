import React, { ReactNode } from 'react';
import { css } from '@emotion/core';

export type AlertProps = {
  type: 'warning';
  message: ReactNode;
};

const warningCSS = css`
  border: 1px solid #f1c64d;
  background-color: rgb(241, 198, 77, 0.8);
`;

const Alert = ({ type, message }: AlertProps) => {
  let typeStyle;
  switch (type) {
    case 'warning':
      typeStyle = warningCSS;
  }
  return (
    <div
      css={css`
        padding: 8px 15px;
        border-radius: 5px;
        color: white;
        ${typeStyle}
      `}
    >
      {message}
    </div>
  );
};

export default Alert;
