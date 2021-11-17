import React, { ReactNode } from 'react';
import { css } from '@emotion/core';
import { Icon, ArrowDownFill } from '../icon';
import { classNames } from '../utils';
import theme from '../theme';

const titleWrapCSS = css`
  display: flex;
  flex-direction: column;
  & > h3,
  & > h4 {
    padding: 0;
    margin: 0;
  }
`;
interface CollapsibleCardTitleProps {
  title: ReactNode;
  /**
   * A unique id for the content of the collapsible card title. Necessary for ally
   */
  contentId: string;
  isOpen: boolean;
  onOpen: () => void;
  /**
   * A unique id for the header of the collapsible card title. Necessary for ally
   */
  headerId: string;
  bordered?: boolean;
  className?: string;
  subTitle: ReactNode;
}
export function CollapsibleCardTitle(props: CollapsibleCardTitleProps) {
  const {
    onOpen,
    isOpen,
    title,
    className,
    contentId,
    headerId,
    subTitle,
  } = props;
  return (
    <button
      id={headerId}
      className={classNames(className)}
      onClick={onOpen}
      aria-controls={contentId}
      aria-expanded={isOpen}
    >
      <Icon
        svg={<ArrowDownFill />}
        className="ac-card-collapsible__trigger"
        css={css`
          transition: transform ease var(--collapsible-card-animation-duration);
          transform: rotate(180deg);
          margin-right: ${theme.spacing.padding8}px;
        `}
        aria-hidden={true}
      />
      <div css={titleWrapCSS}>
        {title}
        {subTitle}
      </div>
    </button>
  );
}
