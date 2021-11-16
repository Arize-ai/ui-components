import React, { ReactNode } from 'react';
import { css } from '@emotion/core';
import { Icon, ArrowDownFill } from '../icon';
import { classNames } from '../utils';

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
export function CardAccordionButton(props: CardAccordionButtonProps) {
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
