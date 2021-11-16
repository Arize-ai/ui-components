import React, { CSSProperties, ReactNode, useState } from 'react';
import { css } from '@emotion/core';
import { Text } from '../content';
import { CardAccordionButton } from './CardAccordionButton';
import theme from '../theme';
import { cardCSS, headerCSS, collapsibleCardCSS } from './styles';
import { classNames } from '../utils';
import { useId } from '@react-aria/utils';

const cardHeaderHeight = 68;
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
  collapsible?: boolean;
  defaultOpen?: boolean;
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
  collapsible,
  defaultOpen = true,
}: CardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const id = useId();
  const contentId = `${id}-content`,
    headerId = `${id}-heading`;

  const defaultTitle = (
    <Text textSize="xlarge" elementType="h3" weight="heavy">
      {title}
    </Text>
  );

  const defaultTitleWithExtra =
    titleExtra != null ? (
      <div css={titleWithTitleExtraCSS}>
        {defaultTitle}
        {titleExtra}
      </div>
    ) : (
      defaultTitle
    );
  const titleComponent = collapsible ? (
    <CardAccordionButton
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      titleEl={defaultTitleWithExtra}
      contentId={contentId}
      headerId={headerId}
      bordered={false}
      className="ac-card-AccordionButton"
      extra={
        subTitle && (
          <Text textSize="medium" elementType="h4" color="white70">
            {subTitle}
          </Text>
        )
      }
    />
  ) : (
    defaultTitleWithExtra
  );
  return (
    <section
      css={
        collapsible
          ? collapsibleCardCSS({ cardHeight: cardHeaderHeight })
          : cardCSS
      }
      style={style}
      className={classNames('ac-card', className, {
        'is-open': isOpen,
      })}
    >
      <header css={headerCSS({ bordered: true, height: cardHeaderHeight })}>
        <div css={headerTitleWrapCSS}>
          {titleComponent}
          {subTitle && !collapsible && (
            <Text textSize="medium" elementType="h4" color="white70">
              {subTitle}
            </Text>
          )}
        </div>
        {extra}
      </header>
      <div
        css={bodyCSS}
        style={bodyStyle}
        id={contentId}
        aria-labelledby={headerId}
        aria-hidden={!isOpen}
      >
        {children}
      </div>
    </section>
  );
}
