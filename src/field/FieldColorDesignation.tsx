import { css } from '@emotion/react';
import React, { ReactNode } from 'react';
import { DesignationColorValue } from '../types';
import { assertUnreachable } from '../utils/typeUtils';

/**
 * A decorative wrapper around a field to designate the field's color.
 * E.x. a field that corresponds to a color in a chart
 */
type FieldColorDesignationProps = {
  children: ReactNode;
  /**
   * The color to use for the field's border
   */
  color: DesignationColorValue;
};

export function FieldColorDesignation(props: FieldColorDesignationProps) {
  const { children, color } = props;
  let colorVariable = `--ac-global-color-designation-turquoise`;
  switch (color) {
    case 'designationTurquoise':
      colorVariable = `--ac-global-color-designation-turquoise`;
      break;
    case 'designationPurple':
      colorVariable = `--ac-global-color-designation-purple`;
      break;
    default:
      assertUnreachable(color);
  }
  return (
    <div
      css={css`
        --ac-field-border-color-override: var(${colorVariable});
      `}
    >
      {children}
    </div>
  );
}
