import React, { useState, ReactNode } from 'react';
import { css } from '@emotion/core';
import { Heading, Text } from '../content';
import { Icon, ArrowIosDownwardOutline } from '../icon';
import { classNames } from '../utils/classNames';
import theme from '../theme';

export interface AccordionProps {
  children: ReactNode;
}

/**
 * Accordion component for having collapsible sections
 * @see https://www.w3.org/TR/wai-aria-practices-1.1/#accordion
 */
export function Accordion({ children }: AccordionProps) {
  return (
    <div
      className="ac-accordion"
      role="region"
      css={css`
        background-color: ${theme.components.accordion.backgroundColor};
        --accordion-animation-duration: ${theme.animation.global.duration}ms;
      `}
    >
      {children}
    </div>
  );
}

export interface AccordionItemProps {
  title: string;
  /**
   * An extra interactive element to be displayed next to the header
   */
  titleExtra?: ReactNode;
  /**
   * A unique id for this part of the UI. Necessary for ally
   */
  id: string;
  defaultIsOpen?: boolean;
  children: ReactNode;
}

export function AccordionItem(props: AccordionItemProps) {
  const { title, titleExtra, id, defaultIsOpen = true, children } = props;
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const contentId = `${id}-content`,
    headerId = `${id}-heading`;

  // Display the titleExtra inline
  const titleEl = titleExtra ? (
    <div
      css={css`
        display: flex;
        flex-direction: row;
      `}
    >
      <Text textSize="large">{title}</Text>
      {titleExtra}
    </div>
  ) : (
    <Text textSize="large">{title}</Text>
  );

  return (
    <div
      className={classNames('ac-accordion-item', {
        'is-open': isOpen,
      })}
      role="presentation"
      css={css`
        &.is-open {
          .ac-accordion-itemIndicator {
            transform: rotate(180deg);
          }
        }
      `}
    >
      <Heading level={3}>
        <button
          id={headerId}
          css={css`
            cursor: pointer;
            padding: 16px 16px;
            display: block;
            width: 100%;
            display: flex;
            flex-direction: row;
            flex: 1 1 auto;
            justify-content: space-between;
            align-items: center;
            appearance: none;
            background-color: inherit;
            border: 0;
            text-align: start;
            color: ${theme.colors.text1};
            border-bottom: 1px solid ${theme.colors.dividerColor};
            /* remove outline - TODO might need to give a visual cue that this area is in focus */
            outline: none;
          `}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          aria-controls={contentId}
          aria-expanded={isOpen}
        >
          {titleEl}
          <Icon
            svg={<ArrowIosDownwardOutline />}
            className="ac-accordion-itemIndicator"
            css={css`
              transition: transform ease var(--accordion-animation-duration);
              transform: rotate(0deg);
            `}
            aria-hidden={true}
          />
        </button>
      </Heading>
      <div
        className="ac-accordion-itemContent"
        id={contentId}
        role="region"
        css={css`
          border-bottom: 1px solid ${theme.colors.dividerColor};
          display: ${isOpen ? 'block' : 'none'};
        `}
        aria-labelledby={headerId}
        aria-hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
}
