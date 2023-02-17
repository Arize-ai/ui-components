import React, { CSSProperties, ReactNode, useState } from 'react';
import { css } from '@emotion/react';
import { Text } from '../content';
import { CollapsibleCardTitle } from './CollapsibleCardTitle';
import theme from '../theme';
import { cardCSS, headerCSS, collapsibleCardCSS } from './styles';
import { classNames } from '../utils';
import { useId } from '@react-aria/utils';
import { CardVariant } from './types';

const headerTitleWrapCSS = css`
  flex: 1 1 auto;
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

export interface CardBaseProps {
  title?: string;
  subTitle?: string;
  variant?: CardVariant;
  children: ReactNode;
  style?: CSSProperties;
  bodyStyle?: CSSProperties;
  extra?: ReactNode; // Extra controls on the header
  className?: string;
  titleExtra?: ReactNode;
  id?: string;
}

interface CollapsibleCardProps {
  collapsible?: boolean;
  defaultOpen?: boolean;
  /**
   * Callback function for when the collapsed state changes
   */
  onToggle?: (isOpen: boolean) => void;
}

export interface CardProps extends CardBaseProps, CollapsibleCardProps {}

export function Card({
  title,
  subTitle,
  variant = 'default',
  children,
  style,
  bodyStyle,
  extra,
  className,
  titleExtra,
  collapsible = false,
  defaultOpen = true,
  id,
  onToggle,
}: CardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const idPrefix = useId(id);
  const contentId = `${idPrefix}-content`,
    headerId = `${idPrefix}-heading`;
  const titleSize = variant === 'default' ? 'xlarge' : 'large';
  const subTitleSize = variant === 'default' ? 'medium' : 'xsmall';
  const defaultTitle = (
    <Text textSize={titleSize} elementType="h3" weight="heavy">
      {title}
    </Text>
  );
  const titleEl =
    titleExtra != null ? (
      <div css={titleWithTitleExtraCSS}>
        {defaultTitle}
        {titleExtra}
      </div>
    ) : (
      defaultTitle
    );
  const subTitleEl =
    subTitle != null ? (
      <Text textSize={subTitleSize} elementType="h4" color="white70">
        {subTitle}
      </Text>
    ) : (
      undefined
    );
  const titleClassName = `ac-card__title-wrap ac-card__title-wrap--${variant}`;
  const titleComponent = collapsible ? (
    <div css={headerTitleWrapCSS} className={titleClassName}>
      <CollapsibleCardTitle
        isOpen={isOpen}
        onOpen={() => {
          const newIsOpen = !isOpen;
          setIsOpen(newIsOpen);
          onToggle && onToggle(newIsOpen);
        }}
        title={titleEl}
        contentId={contentId}
        headerId={headerId}
        className="ac-card-collapsible-header"
        subTitle={subTitleEl}
      />
    </div>
  ) : (
    <div css={headerTitleWrapCSS} className={titleClassName}>
      {titleEl}
      {subTitleEl}
    </div>
  );
  return (
    <section
      css={collapsible ? collapsibleCardCSS : cardCSS}
      style={style}
      className={classNames('ac-card', `ac-card--${variant}`, className, {
        'is-open': isOpen,
      })}
    >
      <header css={headerCSS({ bordered: true, collapsible })} id={headerId}>
        {titleComponent}
        {extra}
      </header>
      <div
        css={css(
          bodyCSS,
          css`
            ${!isOpen && `display: none !important;`}
          `
        )}
        className="ac-card__body"
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
