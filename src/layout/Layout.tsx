import React from 'react';

// import { css } from '@emotion/core';
// import theme from '../theme';
import { ReactNode } from 'react';
import { baseLayoutCSS, bodyCSS, asideCSS, bodyCSSWithScroll } from './styles';

export const Layout = ({ children }: { children: ReactNode }) => (
  <div css={baseLayoutCSS}>{children}</div>
);

export const Aside = ({ children }: { children: ReactNode }) => (
  <div css={asideCSS}>{children}</div>
);

export const Body = ({
  children,
  scrollable,
}: {
  children: ReactNode;
  scrollable: boolean;
}) => <div css={scrollable ? bodyCSSWithScroll : bodyCSS}>{children}</div>;
