import { css } from '@emotion/react';
import React, { ReactNode } from 'react';
/**
 * A decorative wrapper around a field to designate the field's color.
 * E.x. a field that corresponds to a color in a chart
 */
type FieldColorDesignationProps = {
  children: ReactNode;
  /**
   * The color to use for the field's border
   */
  color: string;
};

export function FieldColorDesignation(props: FieldColorDesignationProps) {
  const { children, color } = props;
  return (
    <div
      css={css`
        --ac-field-border-color-override: ${color};
      `}
    >
      {children}
    </div>
  );
}
