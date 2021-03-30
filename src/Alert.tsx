import React, { ReactNode } from 'react';
import { css } from '@emotion/core';
import { transparentize } from 'polished';
import theme from './theme';

export type AlertProps = {
  type: 'warning' | 'info';
  message: ReactNode;
};

const warningCSS = css`
  border: 1px solid ${theme.colors.statusWarning};
  background-color: ${transparentize(0.6, theme.colors.statusWarning)};
`;

const infoCSS = css`
  border: 1px solid ${theme.colors.statusInfo};
  background-color: ${transparentize(0.6, theme.colors.statusInfo)};
`;

const Alert = ({ type, message }: AlertProps) => {
  let typeStyle;
  switch (type) {
    case 'warning':
      typeStyle = warningCSS;
      break;
    case 'info':
      typeStyle = infoCSS;
      break;
  }
  return (
    <div
      css={css`
        padding: 8px 15px;
        border-radius: 5px;
        color: ${theme.colors.text1};
        ${typeStyle}
      `}
    >
      {message}
    </div>
  );
};

export default Alert;
