import React, { useEffect } from 'react';
import { css } from '@emotion/react';
import { Text } from '../content';
import { useSeverityStyle } from '../alert/useSeverityStyle';
import { getSeverityIcon } from '../alert/getSeverityIcon';
import { Icon, CloseOutline } from '../icon';
import theme from '../theme';
import { classNames } from '../utils';
import { buttonCSS } from '../button/styles';
import { DEFAULT_EXPIRE_MS } from './constants';
import { NoticeConfig } from './types';
import { slideInFromRightCSS, disappearCSS } from './styles';

const noticeCSS = css`
  width: 400px;
  padding: var(--ac-global-dimension-static-size-100)
    var(--ac-global-dimension-static-size-200);
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
            margin-right: var(--ac-global-dimension-static-size-100);
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
            margin-left: var(--ac-global-dimension-static-size-200);
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
            margin-top: var(--ac-global-dimension-static-size-50);
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
            margin-top: var(--ac-global-dimension-static-size-100);
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
