import React, { useState, ReactNode } from 'react';
import { css } from '@emotion/core';
import { Heading } from '../content';
import { Icon, ArrowIosUpwardOutline, ArrowIosDownwardOutline } from '../icon';
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
    <div className="ac-accordion" role="region">
      {children}
    </div>
  );
}

export interface AccordionItemProps {
  title: string;
  defaultIsOpen?: boolean;
  children: ReactNode;
}

export function AccordionItem(props: AccordionItemProps) {
  const { title, defaultIsOpen = true, children } = props;
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  return (
    <div
      className={classNames('ac-accordion-item', {
        'is-open': isOpen,
      })}
    >
      <Heading level={3}>
        <button
          css={css`
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
            border-bottom: 1px solid ${theme.colors.dark5};
            /* remove outline - TODO might need to give a visual cue that this area is in focus */
            outline: none;
          `}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span>{title}</span>
          <Icon
            svg={
              isOpen ? <ArrowIosUpwardOutline /> : <ArrowIosDownwardOutline />
            }
          />
        </button>
      </Heading>
      <div
        className="ac-accordion-itemContent"
        role="region"
        css={css`
          border-bottom: 1px solid ${theme.colors.dark5};
          display: ${isOpen ? 'block' : 'none'};
        `}
      >
        {children}
      </div>
    </div>
  );
}
