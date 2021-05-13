import React, { CSSProperties, ReactNode } from 'react';
import { css } from '@emotion/core';
import { Text } from '../content';
import theme from '../theme';
import { cardCSS, headerCSS } from './styles';

const headerTitleWrapCSS = css`
  display: flex;
  flex-direction: column;
  & > h3,
  & > h4 {
    padding: 0;
    margin: 0;
  }
`;

const bodyCSS = css`
  flex: 1 1 auto;
  padding: ${theme.spacing.padding16}px;
`;

export type CardProps = {
  title?: string;
  subTitle?: string;
  children: ReactNode;
  style?: CSSProperties;
  bodyStyle?: CSSProperties;
  extra?: ReactNode; // Extra controls on the header
  className?: string;
  titleExtra?: ReactNode;
};

export function Card({
  title,
  subTitle,
  children,
  style,
  bodyStyle,
  extra,
  className,
  titleExtra,
}: CardProps) {
  return (
    <section css={cardCSS} style={style} className={className}>
      <header css={headerCSS({ bordered: true })}>
        <div css={headerTitleWrapCSS}>
          <Text textSize="xlarge" elementType="h3" weight="heavy">
            {title}
            {titleExtra}
          </Text>
          {subTitle && (
            <Text textSize="medium" elementType="h4" color="white70">
              {subTitle}
            </Text>
          )}
        </div>
        {extra}
      </header>
      <div css={bodyCSS} style={bodyStyle}>
        {children}
      </div>
    </section>
  );
}
