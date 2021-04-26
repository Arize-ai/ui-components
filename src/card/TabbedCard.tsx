import React, { ReactNode, HTMLProps } from 'react';
import { css } from '@emotion/core';
import { Text } from '..';
import { cardCSS, headerCSS } from './styles';

const tabbedCardCSS = css`
  &[data-has-title='false'] {
    .ac-tabs {
      margin-top: 20px;
    }
  }
`;

export interface TabbedCardProps extends HTMLProps<HTMLElement> {
  title?: string;
  children: ReactNode;
  extra?: ReactNode; // Extra controls on the header
}

export function TabbedCard(props: TabbedCardProps) {
  const { title, children, extra, ...restProps } = props;
  const hasTitle = title != null;
  return (
    <section
      css={css(cardCSS, tabbedCardCSS)}
      className="ac-card ac-card--tabbed"
      data-has-title={hasTitle}
      {...restProps}
    >
      {hasTitle ? (
        <header css={headerCSS({ bordered: false, height: 60 })}>
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
