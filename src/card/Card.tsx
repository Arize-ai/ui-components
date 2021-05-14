import React, { CSSProperties, ReactNode } from 'react';
import { Text } from '../content';
import theme from '../theme';
import {
  cardCSS,
  headerCSS,
  bodyWithAsideCSS,
  bodyCSS,
  headerTitleWrapCSS,
  asideCSS,
  footerCSS,
  bodyCSSWithScroll,
} from './styles';

export type CardSize = 'small' | 'large' | 'medium';

export interface CardProps {
  title?: string;
  subTitle?: string;
  children: ReactNode;
  style?: CSSProperties;
  bodyStyle?: CSSProperties;
  asideStyle?: CSSProperties;
  className?: string;
  aside?: ReactNode;
  footer?: ReactNode;
  size?: CardSize;
  /** Extra controls on the header */
  extra?: ReactNode;
}

export function Card({
  title,
  subTitle,
  children,
  style,
  bodyStyle,
  asideStyle,
  extra,
  aside,
  footer,
  className,
  size = 'medium',
}: CardProps) {
  return (
    <section
      css={cardCSS}
      // Allow existing card widths to override size until quick audit is done to check
      style={{ width: `${theme.spacing.card[size]}px`, ...style }}
      className={className}
    >
      <header css={headerCSS({ bordered: true })}>
        <div css={headerTitleWrapCSS}>
          <Text textSize="xlarge" elementType="h3" weight="heavy">
            {title}
          </Text>
          {subTitle && (
            <Text textSize="medium" elementType="h4" color="white70">
              {subTitle}
            </Text>
          )}
        </div>
        {extra}
      </header>
      {aside ? (
        <div css={bodyWithAsideCSS}>
          <aside css={asideCSS} style={asideStyle}>
            {aside}
          </aside>
          <div css={bodyCSSWithScroll} style={bodyStyle}>
            {children}
          </div>
        </div>
      ) : (
        <div css={bodyCSS} style={bodyStyle}>
          {children}
        </div>
      )}
      {footer ? (
        <footer css={footerCSS({ bordered: true })}>{footer}</footer>
      ) : null}
    </section>
  );
}
