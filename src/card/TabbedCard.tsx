import React from 'react';
import { CardBaseProps, useStyleBorderColor } from './Card';
import { css } from '@emotion/react';
import { Text } from '../content';
import { cardCSS, headerCSS } from './styles';
import { classNames, useStyleProps, viewStyleProps } from '../utils';

const tabbedCardCSS = css`
  &[data-has-title='false'] {
    .ac-tabs {
      margin-top: 20px;
    }
  }
`;

export interface TabbedCardProps extends CardBaseProps {}

export function TabbedCard(props: TabbedCardProps) {
  const {
    title,
    children,
    extra,
    variant = 'default',
    className,
    style,
    ...restProps
  } = props;
  const { styleProps } = useStyleProps(props, viewStyleProps);
  const hasTitle = title != null;
  const borderColor = useStyleBorderColor(styleProps);
  return (
    <section
      css={css(cardCSS({ borderColor }), tabbedCardCSS)}
      className={classNames(
        `ac-card ac-card--${variant} ac-card--tabbed`,
        className
      )}
      data-has-title={hasTitle}
      {...restProps}
      {...styleProps}
      // TODO: deprecate style prop
      style={{ ...style, ...styleProps.style }}
    >
      {hasTitle ? (
        <header css={headerCSS({ bordered: false })}>
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
