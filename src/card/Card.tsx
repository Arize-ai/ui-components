import React, { CSSProperties, ReactNode } from 'react';
import { css } from '@emotion/core';
import { Text } from '../content';
import theme from '../theme';
import { cardCSS, headerCSS } from './styles';
import { classNames } from '../utils';

const headerTitleWrapCSS = css`
  display: flex;
  flex-direction: column;
  & > h3,
  & > h4 {
    padding: 0;
    margin: 0;
  }
`;

const titleWithTitleExtraCSS = css`
  display: flex;
  flex-direction: row;
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
  const titleEl = (
    <Text textSize="xlarge" elementType="h3" weight="heavy">
      {title}
    </Text>
  );
  return (
    <section
      css={cardCSS}
      style={style}
      className={classNames('ac-card', className)}
    >
      <header css={headerCSS({ bordered: true })}>
        <div css={headerTitleWrapCSS}>
          {titleExtra != null ? (
            <div css={titleWithTitleExtraCSS}>
              {titleEl}
              {titleExtra}
            </div>
          ) : (
            titleEl
          )}
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
