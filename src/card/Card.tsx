import React, { CSSProperties, ReactNode } from 'react';
import { css } from '@emotion/core';
import theme from '../theme';
import { Heading } from '../content';

const cardCSS = css`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.dark4};
  color: ${theme.colors.text1};
  border-radius: 5px;
  border: 1px solid ${theme.colors.dark5};
`;

const headerCSS = css`
  display: flex;
  flex-direction: row;
  flex: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 68px;
  border-bottom: 1px solid ${theme.colors.dark5};
`;

const bodyCSS = css`
  flex: 1 1 auto;
  padding: 24px;
`;

export type CardProps = {
  title: string;
  subTitle?: string;
  children: ReactNode;
  style?: CSSProperties;
  bodyStyle?: CSSProperties;
  extra?: ReactNode; // Extra controls on the header
  className?: string;
};

export const Card = ({
  title,
  subTitle,
  children,
  style,
  bodyStyle,
  extra,
  className,
}: CardProps) => {
  return (
    <section css={cardCSS} style={style} className={className}>
      <header css={headerCSS}>
        <div>
          <Heading level={3} weight="heavy">
            {title}
          </Heading>
          {subTitle && <Heading level={4}>{subTitle}</Heading>}
        </div>
        {extra}
      </header>
      <div css={bodyCSS} style={bodyStyle}>
        {children}
      </div>
    </section>
  );
};
