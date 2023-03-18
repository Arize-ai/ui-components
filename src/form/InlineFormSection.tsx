import { css } from '@emotion/react';
import React, { PropsWithChildren } from 'react';
import theme from '../theme';
import { transparentize } from 'polished';

/**
 * A wrapper component for a form section that renders the form elements in such a way that it is
 * clear which elements are interactive
 */
export function InlineFormSection(props: PropsWithChildren) {
  return (
    <div
      css={css`
        display: inline-flex;
        flex-direction: row;
        align-items: baseline;
        flex-wrap: wrap;
        gap: 0.5em;
        /* --ac-field-border-color-override: ${transparentize(
          0.3,
          theme.colors.arizeLightBlue
        )}; */
        --ac-field-text-color-override: ${theme.colors.arizeLightBlue};
      `}
    >
      {props.children}
    </div>
  );
}
