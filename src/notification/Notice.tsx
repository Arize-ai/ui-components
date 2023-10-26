import React, { useEffect } from 'react';
import { css } from '@emotion/react';
import { NoticeConfig } from './types';
import { Text } from '../content';
import { useSeverityStyle } from '../alert/useSeverityStyle';
import { getSeverityIcon } from '../alert/getSeverityIcon';
import { Icon, CloseOutline } from '../icon';
import theme from '../theme';
import { DEFAULT_EXPIRE_MS } from './constants';
import { classNames } from '../utils';
import { buttonCSS } from '../button/styles';
import { slideInFromRightCSS, disappearCSS } from './styles';

const noticeCSS = css`
  width: 400px;
  padding: ${theme.spacing.margin8}px ${theme.spacing.margin16}px;
  border-radius: 8px;
`;
interface NoticeProps extends NoticeConfig {
  onClose: () => void;
}

export function Notice({
  title,
  variant,
  message,
  onClose,
  action,
  expireMs = DEFAULT_EXPIRE_MS,
}: NoticeProps) {
  // Setup the expire timer for the notice
  const shouldExpire = action == null;
  useEffect(() => {
    if (shouldExpire) {
      const timer = setTimeout(() => {
        onClose();
      }, expireMs);
      return () => clearTimeout(timer);
    }
    return () => {}; // Void function
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get the styles for the specific variant
  const variantCSS = useSeverityStyle(variant);
  return (
    <div
      className={classNames({
        'ac-notice': true,
      })}
      css={css(noticeCSS, variantCSS, slideInFromRightCSS, disappearCSS)}
    >
      <div
        className="ac-alert__icon-title-wrap"
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          color: var(--ac-global-static-color-white-900);
          flex: 1 1 auto;
          & > .ac-text {
            flex: 1 1 auto;
          }
          & > .ac-icon-wrap {
            margin-right: ${theme.spacing.margin8}px;
          }
        `}
      >
        {getSeverityIcon(variant)}

        <Text elementType="h5" textSize="large" weight="heavy" color="inherit">
          {title}
        </Text>

        <button
          title="Close notice"
          css={css`
            background-color: transparent;
            color: var(--ac-global-static-color-white-900);
            padding: 0;
            border: none;
            cursor: pointer;
            width: 20px;
            height: 20px;
            margin-left: ${theme.spacing.margin16}px;
          `}
          onClick={onClose}
        >
          <Icon svg={<CloseOutline />} />
        </button>
      </div>
      {message ? (
        <Text
          color="inherit"
          textSize="medium"
          css={css`
            /* The icon is 12px with two 8px spacings on either side */
            padding-left: ${2 * theme.spacing.margin8 + 12}px;
            margin-top: ${theme.spacing.margin4}px;
            display: inline-block;
          `}
        >
          {message}
        </Text>
      ) : null}
      {action ? (
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            margin-top: ${theme.spacing.margin8}px;
          `}
        >
          <button
            css={css(
              buttonCSS,
              variantCSS,
              css`
                background-color: transparent;
              `
            )}
            data-size="normal"
            data-childless="false"
            onClick={() => {
              action.onClick();
              onClose();
            }}
          >
            <Text textSize="medium" color="inherit">
              {action.text}
            </Text>
          </button>
        </div>
      ) : null}
    </div>
  );
}
