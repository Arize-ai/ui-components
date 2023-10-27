import { css } from '@emotion/react';
import React, {
  Children,
  isValidElement,
  cloneElement,
  ReactNode,
  HTMLAttributes,
  ReactElement,
} from 'react';
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
  border-radius: var(--ac-global-rounding-small);
  border: 1px solid var(--ac-global-input-field-border-color);
  overflow: hidden;
  & > .ac-button {
    border-radius: 0;
    border: none;
  }
  & > .ac-button + .ac-button {
    border-left: 1px solid var(--ac-global-input-field-border-color);
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
          return cloneElement(child as ReactElement<ButtonProps>, {
            size,
          });
        }
        return null;
      })}
    </div>
  );
}
