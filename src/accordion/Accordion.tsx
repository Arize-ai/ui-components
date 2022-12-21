import React, { useState, ReactNode } from 'react';
import { css } from '@emotion/react';
import { Heading } from '../content';
import { Icon, ArrowIosDownwardOutline } from '../icon';
import { classNames } from '../utils/classNames';
import theme from '../theme';

export interface AccordionProps {
  children: ReactNode;
  /**
   * The variant of the accordion (e.g. sizing)
   * @default "default"
   */
  variant?: 'default' | 'compact';
}

/**
 * Accordion component for having collapsible sections
 * @see https://www.w3.org/TR/wai-aria-practices-1.1/#accordion
 */
export function Accordion({ children, variant = 'default' }: AccordionProps) {
  return (
    <div
      className={`ac-accordion ac-accordion--${variant}`}
      role="region"
      css={css`
      
        --accordion-animation-duration: ${theme.animation.global.duration}ms;
        &.ac-accordion--default {
          --accordion-padding-top: ${theme.spacing.padding16}px;
          --accordion-padding-side: ${theme.spacing.padding16}px;
          --accordion-font-size: ${theme.typography.sizes.large.fontSize}px;
        }
        &.ac-accordion--compact {
          --accordion-padding-top: ${theme.spacing.padding8}px;
          --accordion-padding-side: ${theme.spacing.padding16}px;
          --accordion-font-size: ${theme.typography.sizes.medium.fontSize}px;
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
}

export function AccordionItem(props: AccordionItemProps) {
  const {
    title,
    titleExtra,
    id,
    defaultIsOpen = true,
    onChange,
    children,
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
          css={css`
            cursor: pointer;
            padding: var(--accordion-padding-top) var(--accordion-padding-side);
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
            color: ${theme.textColors.white90};
            border-bottom: 1px solid ${theme.components.accordion.borderColor};
            /* remove outline - TODO might need to give a visual cue that this area is in focus */
            outline: none;
            background-color: ${theme.components.accordion.backgroundColor};
            transition: background-color 0.2s ease-in-out;
            &:hover {
              background-color: ${theme.colors.hoverBgColor};
            }
            .ac-accordion-item__title {
              font-size: var(--accordion-font-size);
            }
          `}
          onClick={() => {
            const newIsOpen = !isOpen;
            setIsOpen(newIsOpen);
            onChange && onChange(newIsOpen);
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
