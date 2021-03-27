import React, { CSSProperties, ReactNode } from 'react';
import { css } from '@emotion/core';
import theme from './theme';
import { Heading } from './content';

const card = css`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.dark4};
  color: ${theme.colors.text1};
  border-radius: 5px;
  border: 1px solid ${theme.colors.dark5};
`;

const header = css`
  display: flex;
  flex-direction: row;
  flex: fixed;
  justify-content: space-between;
  align-items: center;
  padding-left: 36px;
  padding: 16px 24px;
  border-bottom: 1px solid ${theme.colors.dark5};
`;

const body = css`
  flex: 1 1 auto;
  padding: 24px;
`;

export type CardProps = {
  title: string;
  children: ReactNode;
  style?: CSSProperties;
  bodyStyle?: CSSProperties;
  extra?: ReactNode; // Extra controls on the header
  className?: string;
};

const Card = ({
  title,
  children,
  style,
  bodyStyle,
  extra,
  className,
}: CardProps) => {
  return (
    <section css={card} style={style} className={className}>
      <header css={header}>
        <Heading level={3}>{title}</Heading>
        {extra}
      </header>
      <div css={body} style={bodyStyle}>
        {children}
      </div>
    </section>
  );
};

export default Card;
