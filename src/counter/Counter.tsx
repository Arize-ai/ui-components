import React, { PropsWithChildren } from 'react';
import { css } from '@emotion/react';
import theme from '../theme';

type CounterProps = PropsWithChildren<{
  /**
   * The color of the counter
   * @default 'default'
   **/
  variant?: 'default' | 'danger';
}>;

const counterCSS = css`
  display: inline-block;
  padding: var(--ac-global-dimension-static-size-25)
    var(--ac-global-dimension-static-size-100);
  border-radius: calc(
    (
      ${theme.typography.sizes.small.lineHeight}px + 2 *
        var(--ac-global-dimension-static-size-25) / 2
    )
  );
  background-color: var(--ac-global-background-color-light);
  font-size: ${theme.typography.sizes.small.fontSize}px;
  line-height: ${theme.typography.sizes.small.lineHeight}px;
  color: var(--ac-global-text-color-900);
  &[data-variant='danger'] {
    background-color: var(--ac-global-background-color-danger);
  }
`;

export function Counter(props: CounterProps) {
  const { children, variant = 'default' } = props;
  return (
    <span css={counterCSS} data-variant={variant}>
      {children}
    </span>
  );
}
