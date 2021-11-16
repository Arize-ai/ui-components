import React, { CSSProperties, ReactNode, useState } from 'react';
import { css } from '@emotion/core';
import { Text } from '../content';
import { Icon, ArrowDownFill } from '../icon';

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
interface CardAccordionButtonProps {
  titleEl: ReactNode;
  /**
   * A unique id for the content of the accordion. Necessary for ally
   */
  contentId: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  /**
   * A unique id for the header of the accordion. Necessary for ally
   */
  headerId: string;
  bordered?: boolean;
  className?: string;
}
function CardAccordionButton(props: CardAccordionButtonProps) {
  const { setIsOpen, isOpen, titleEl, className, contentId, headerId } = props;
  return (
    <button
      id={headerId}
      className={classNames(className)}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      aria-controls={contentId}
      aria-expanded={isOpen}
    >
      <Icon
        svg={<ArrowDownFill />}
        className="ac-card-AccordionButtonIndicator"
        css={css`
          transition: transform ease var(--accordion-animation-duration);
          transform: rotate(180deg);
        `}
        aria-hidden={true}
      />
      {titleEl}
    </button>
  );
}

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
  const headerTitleEl = (
    <Text textSize="xlarge" elementType="h3" weight="heavy">
      {title}
    </Text>
  );
  const titleEl = collapsible ? (
    <CardAccordionButton
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      titleEl={headerTitleEl}
      contentId={contentId}
      headerId={headerId}
      bordered={false}
      className="ac-card-AccordionButton"
    />
  ) : (
    headerTitleEl
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
