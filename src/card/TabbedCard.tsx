import React from 'react';
import { CardBaseProps } from './Card';
import { css } from '@emotion/core';
import { Text } from '../content';
import { cardCSS, headerCSS } from './styles';

const tabbedCardCSS = css`
  &[data-has-title='false'] {
    .ac-tabs {
      margin-top: 20px;
    }
  }
`;

export interface TabbedCardProps extends CardBaseProps {}

export function TabbedCard(props: TabbedCardProps) {
  const { title, children, extra, variant = 'default', ...restProps } = props;
  const hasTitle = title != null;
  return (
    <section
      css={css(cardCSS, tabbedCardCSS)}
      className={`ac-card ac-card--${variant} ac-card--tabbed`}
      data-has-title={hasTitle}
      {...restProps}
    >
      {hasTitle ? (
        <header css={headerCSS({ bordered: false, collapsible: false })}>
          <Text textSize="xlarge" elementType="h3" weight="heavy">
            {title}
          </Text>
          {extra}
        </header>
      ) : null}
      {children}
    </section>
  );
}
