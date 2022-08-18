import React, { ReactNode, SyntheticEvent } from 'react';
import { css } from '@emotion/core';
import theme from '../theme';
import { classNames } from '../utils';
import { Text } from '../content';
import { Icon, CloseOutline } from '../icon';
import { useSeverityStyle } from './useSeverityStyle';
import { getSeverityIcon } from './getSeverityIcon';
import { SeverityLevel } from '../types';
export interface AlertProps {
  variant: SeverityLevel;
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
  ...otherProps
}: AlertProps) => {
  let variantStyle = useSeverityStyle(variant);

  if (!icon && showIcon) {
    icon = getSeverityIcon(variant);
  }
  return (
    <div
      {...otherProps}
      css={css`
        padding: ${theme.spacing.margin8}px ${theme.spacing.margin16}px;
        border-radius: 4px;
        color: ${theme.textColors.white90};
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
