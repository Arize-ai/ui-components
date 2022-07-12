import { css } from '@emotion/core';
import React, {
  Children,
  isValidElement,
  cloneElement,
  ReactNode,
  HTMLAttributes,
} from 'react';
import theme from '../theme';
import { ButtonProps } from './Button';

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: ButtonProps['size'];
  /**
   * Must provide an aria label for the group
   */
  ['aria-label']: string;
}

const buttonGroupCSS = css`
  display: inline-flex;
  border-radius: ${theme.borderRadius.medium}px;
  border: 1px solid ${theme.components.button.defaultBorderColor};
  overflow: hidden;
  & > .ac-button {
    border-radius: 0;
    border: none;
  }
  & > .ac-button + .ac-button {
    border-left: 1px solid ${theme.components.button.defaultBorderColor};
  }
`;

export function ButtonGroup({ children, size, ...divProps }: ButtonGroupProps) {
  return (
    <div
      className="ac-button-group"
      role="group"
      css={buttonGroupCSS}
      {...divProps}
    >
      {Children.map(children, child => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            size,
          });
        }
        return null;
      })}
    </div>
  );
}
