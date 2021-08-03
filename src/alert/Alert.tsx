import React, { ReactNode, SyntheticEvent } from 'react';
import { css } from '@emotion/core';
import { transparentize } from 'polished';
import theme from '../theme';
import { classNames } from '../utils';
import { Text } from '../content';
import {
  Icon,
  InfoOutline,
  AlertTriangleOutline,
  AlertCircleOutline,
  CheckmarkCircleOutline,
  CloseOutline,
} from '../icon';

export interface AlertProps {
  variant: 'warning' | 'info' | 'danger' | 'success';
  children?: ReactNode;
  /**
   * Title of the alert. Optional
   */
  title?: ReactNode;
  /**
   * A custom icon to show
   */
  icon?: ReactNode;
  /**
   * Whether or not an icon is shown on the left
   * @default true
   */
  showIcon?: boolean;
  /**
   * If set to true, a close button is rendered
   * @default false
   */
  dismissable?: boolean;
  /**
   * dismiss callback
   */
  onDismissClick?: (e: SyntheticEvent<HTMLButtonElement>) => void;
  /**
   * If set to true, this alert is being placed at the top of a page
   * @default false
   */
  banner?: boolean;
  /**
   * Extra content (typically a button) added to the alert
   */
  extra?: ReactNode;
}

const warningCSS = css`
  border: 1px solid ${theme.colors.statusWarning};
  background-color: ${transparentize(0.85, theme.colors.statusWarning)};
  color: ${theme.colors.statusWarning};
`;

const infoCSS = css`
  border: 1px solid ${theme.colors.statusInfo};
  background-color: ${transparentize(0.85, theme.colors.statusInfo)};
  color: ${theme.colors.statusInfo};
`;

const dangerCSS = css`
  border: 1px solid ${theme.colors.statusDanger};
  background-color: ${transparentize(0.85, theme.colors.statusDanger)};
  color: ${theme.colors.statusDanger};
`;

const successCSS = css`
  border: 1px solid ${theme.colors.statusSuccess};
  background-color: ${transparentize(0.85, theme.colors.statusSuccess)};
  color: ${theme.colors.statusSuccess};
`;

export const Alert = ({
  variant,
  title,
  icon,
  children,
  showIcon = true,
  dismissable = false,
  onDismissClick,
  banner = false,
  extra,
}: AlertProps) => {
  let variantStyle;
  switch (variant) {
    case 'warning':
      variantStyle = warningCSS;
      break;
    case 'info':
      variantStyle = infoCSS;
      break;
    case 'danger':
      variantStyle = dangerCSS;
      break;
    case 'success':
      variantStyle = successCSS;
      break;
  }

  if (!icon && showIcon) {
    switch (variant) {
      case 'warning':
        icon = <Icon svg={<AlertTriangleOutline />} />;
        break;
      case 'info':
        icon = <Icon svg={<InfoOutline />} />;
        break;
      case 'danger':
        icon = <Icon svg={<AlertCircleOutline />} />;
        break;
      case 'success':
        icon = <Icon svg={<CheckmarkCircleOutline />} />;
        break;
    }
  }
  return (
    <div
      css={css`
        padding: ${theme.spacing.margin8}px ${theme.spacing.margin16}px;
        border-radius: 4px;
        color: ${theme.colors.text1};
        display: flex;
        flex-direction: row;
        align-items: center;
        &.ac-alert--banner {
          border-radius: 0;
          border-left: 0px;
          border-right: 0px;
        }
        ${variantStyle}
        .ac-alert__icon-title-wrap .ac-icon-wrap {
          margin-right: ${theme.spacing.margin16}px;
          font-size: ${theme.typography.sizes.xlarge.fontSize}px;
          margin-top: 2px;
        }
        &.ac-alert--with-title .ac-alert__icon-title-wrap .ac-icon-wrap {
          /* The line height with the title is different so accommodate for it */
          margin-top: 3px;
        }
      `}
      className={classNames(
        'ac-alert',
        title ? 'ac-alert--with-title' : null,
        banner ? 'ac-alert--banner' : null
      )}
    >
      <div
        className="ac-alert__icon-title-wrap"
        css={css`
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          flex: 1 1 auto;
        `}
      >
        {icon}
        <div>
          {title ? (
            <Text
              elementType="h5"
              textSize="large"
              weight="heavy"
              color="inherit"
            >
              {title}
            </Text>
          ) : null}
          <Text color="inherit" textSize="medium">
            {children}
          </Text>
        </div>
      </div>
      {extra}
      {dismissable ? (
        <button
          css={css`
            background-color: transparent;
            color: inherit;
            padding: 0;
            border: none;
            cursor: pointer;
            width: 20px;
            height: 20px;
            margin-left: ${theme.spacing.margin16}px;
          `}
          onClick={onDismissClick}
        >
          {<Icon svg={<CloseOutline />} />}
        </button>
      ) : null}
    </div>
  );
};
