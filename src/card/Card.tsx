import React, {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
  useMemo,
  useState,
} from 'react';
import { css } from '@emotion/react';
import { useId } from '@react-aria/utils';
import { Text } from '../content';
import { classNames, useStyleProps, viewStyleProps } from '../utils';
import { ViewStyleProps } from '../types';
import { CollapsibleCardTitle } from './CollapsibleCardTitle';

import { cardCSS, headerCSS, collapsibleCardCSS } from './styles';
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
  align-items: center;
  gap: var(--ac-global-dimension-static-size-100);
`;

const bodyCSS = css`
  flex: 1 1 auto;
  padding: var(--ac-global-dimension-static-size-200);
`;

export interface CardBaseProps {
  title?: ReactNode;
  subTitle?: string;
  variant?: CardVariant;
  children: ReactNode;
  /**
   * @deprecated use style props instead
   */
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
  onOpenChange?: (isOpen: boolean) => void;
  /**
   * Whether or not the title has a separator
   * @default true
   */
  titleSeparator?: boolean;
}

export interface CardProps
  extends CardBaseProps,
    CollapsibleCardProps,
    ViewStyleProps {}

export function useStyleBorderColor(styleProps: HTMLAttributes<HTMLElement>) {
  return useMemo<string>(() => {
    return styleProps.style && styleProps.style?.borderColor
      ? styleProps.style.borderColor
      : `var(--ac-global-border-color-default)`;
  }, [styleProps.style]);
}
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
  titleSeparator = true,
  id,
  onOpenChange,
  ...props
}: CardProps) {
  const { styleProps } = useStyleProps(props, viewStyleProps);
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const idPrefix = useId(id);
  const contentId = `${idPrefix}-content`,
    headerId = `${idPrefix}-heading`;
  const titleSize = variant === 'default' ? 'xlarge' : 'large';
  const subTitleSize = variant === 'default' ? 'medium' : 'xsmall';
  const borderColor = useStyleBorderColor(styleProps);
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
      <Text textSize={subTitleSize} elementType="h4" color="text-700">
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
          onOpenChange && onOpenChange(newIsOpen);
        }}
        title={titleEl}
        contentId={contentId}
        headerId={headerId}
        className="ac-card-collapsible-header"
        subTitle={subTitleEl}
        {...styleProps}
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
      css={
        collapsible
          ? collapsibleCardCSS({ borderColor })
          : cardCSS({ borderColor })
      }
      className={classNames('ac-card', `ac-card--${variant}`, className, {
        'is-open': isOpen,
      })}
      // TODO: deprecate style prop
      style={{ ...style, ...styleProps.style }}
    >
      <header
        css={headerCSS({ bordered: titleSeparator })}
        id={headerId}
        className={classNames({ 'is-collapsible': collapsible })}
      >
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
