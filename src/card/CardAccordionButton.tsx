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
  extra: ReactNode;
}
export function CardAccordionButton(props: CardAccordionButtonProps) {
  const {
    setIsOpen,
    isOpen,
    titleEl,
    className,
    contentId,
    headerId,
    extra,
  } = props;
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
          margin-right: ${theme.spacing.padding8}px;
        `}
        aria-hidden={true}
      />
      <div css={titleWrapCSS}>
        {titleEl}
        {extra}
      </div>
    </button>
  );
}
