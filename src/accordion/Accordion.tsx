import React, { useState, ReactNode } from 'react';
import { css } from '@emotion/react';
import { Heading } from '../content';
import { Icon, ArrowIosDownwardOutline } from '../icon';
import { classNames } from '../utils/classNames';
import theme from '../theme';

export interface AccordionProps {
  children: ReactNode;
}

const accordionItemCSS = css`
  cursor: pointer;
  height: 40px;
  padding: 0 var(--accordion-padding-side);
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
  color: var(--ac-global-text-color-900);
  border-bottom: 1px solid var(--ac-global-border-color-dark);
  /* remove outline - TODO might need to give a visual cue that this area is in focus */
  outline: none;
  background-color: var(--ac-global-background-color-light);
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: var(--ac-global-background-color-light-hover);
  }
  .ac-accordion-item__title {
    font-size: var(--accordion-font-size);
  }
`;

/**
 * Accordion component for having collapsible sections
 * @see https://www.w3.org/TR/wai-aria-practices-1.1/#accordion
 */
export function Accordion({ children }: AccordionProps) {
  return (
    <div
      className={`ac-accordion ac-accordion--default`}
      role="region"
      css={css`
        --accordion-animation-duration: ${theme.animation.global.duration}ms;
        &.ac-accordion--default {
          --accordion-padding-top: var(--ac-global-dimension-static-size-100);
          --accordion-padding-side: var(--ac-global-dimension-static-size-200);
          --accordion-font-size: ${theme.typography.sizes.medium.fontSize}px;
        }
        .ac-accordion-item:not(:last-of-type) {
          .ac-accordion-itemContent {
            border-bottom: 1px solid var(--ac-global-border-color-dark);
          }
        }
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
  /**
   * Callback function for when the collapsed state changes
   */
  onChange?: (isOpen: boolean) => void;
  /**
   * An extra element to show on the right hand side
   */
  extra?: ReactNode;
}

export function AccordionItem(props: AccordionItemProps) {
  const {
    title,
    titleExtra,
    id,
    defaultIsOpen = true,
    onChange,
    children,
    extra,
  } = props;
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const contentId = `${id}-content`,
    headerId = `${id}-heading`;

  // Display the titleExtra inline
  const titleEl = titleExtra ? (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        .ac-accordion-item__title {
          margin-right: var(--ac-global-dimension-static-size-50);
        }
      `}
    >
      <span className="ac-accordion-item__title">{title}</span>
      {titleExtra}
    </div>
  ) : (
    <span className="ac-accordion-item__title">{title}</span>
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
          css={accordionItemCSS}
          onClick={() => {
            const newIsOpen = !isOpen;
            setIsOpen(newIsOpen);
            onChange && onChange(newIsOpen);
          }}
          aria-controls={contentId}
          aria-expanded={isOpen}
        >
          {titleEl}
          <div
            css={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: var(--ac-global-dimension-static-size-100);
            `}
          >
            {extra}
            <Icon
              svg={<ArrowIosDownwardOutline />}
              className="ac-accordion-itemIndicator"
              css={css`
                transition: transform ease var(--accordion-animation-duration);
                transform: rotate(0deg);
              `}
              aria-hidden={true}
            />
          </div>
        </button>
      </Heading>
      <div
        className="ac-accordion-itemContent"
        id={contentId}
        role="region"
        css={css`
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
