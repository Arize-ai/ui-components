import React, { ReactNode } from 'react';
import { css } from '@emotion/react';
import { Icon, ArrowIosDownwardOutline } from '../icon';
import { classNames, useStyleProps, viewStyleProps } from '../utils';
import { ViewProps } from '../view';

const titleWrapCSS = css`
  display: flex;
  flex-direction: column;
  & > h3,
  & > h4 {
    padding: 0;
    margin: 0;
  }
`;
interface CollapsibleCardTitleProps extends ViewProps {
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
  const { styleProps } = useStyleProps(props, viewStyleProps);
  return (
    <button
      id={headerId}
      className={classNames(className)}
      onClick={onOpen}
      aria-controls={contentId}
      aria-expanded={isOpen}
      {...styleProps}
    >
      <Icon
        svg={<ArrowIosDownwardOutline />}
        className="ac-card-collapsible__trigger"
        css={css`
          transition: transform ease var(--collapsible-card-animation-duration);
          transform: rotate(-90deg);
          margin-right: var(--ac-global-dimension-static-size-100);
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
