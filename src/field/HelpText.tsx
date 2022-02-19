// import AlertMedium from '@spectrum-icons/ui/AlertMedium';
import { classNames, useDOMRef } from '../utils';
import { DOMRef, HelpTextProps, Validation } from '../types';
import React, { HTMLAttributes } from 'react';
import { css } from '@emotion/core';
import theme from '../theme';

export interface HelpTextComponentProps extends HelpTextProps, Validation {
  /** Props for the help text description element. */
  descriptionProps: HTMLAttributes<HTMLElement>;
  /** Props for the help text error message element. */
  errorMessageProps: HTMLAttributes<HTMLElement>;
  /** Whether the description is displayed with lighter text. */
  isDisabled?: boolean;
  /** Whether an error icon is rendered. */
  showErrorIcon?: boolean;
}

function HelpText(props: HelpTextComponentProps, ref: DOMRef<HTMLDivElement>) {
  let {
    description,
    errorMessage,
    validationState,
    isDisabled,
    showErrorIcon,
    descriptionProps,
    errorMessageProps,
  } = props;
  let domRef = useDOMRef(ref);
  let isErrorMessage = errorMessage && validationState === 'invalid';

  return (
    <div
      className={classNames(
        'ac-help-text',
        `ac-help-text--${isErrorMessage ? 'danger' : 'neutral'}`,
        { 'is-disabled': isDisabled }
      )}
      ref={domRef}
      css={css`
        height: 18px;
        padding: ${theme.spacing.padding8}px 0 0 0;
        &.ac-help-text--danger {
          color: ${theme.colors.statusDanger};
        }
        .ac-help-text__text {
          font-size: ${theme.typography.sizes.small.fontSize}px;
          line-height: ${theme.typography.sizes.small.lineHeight}px;
        }
      `}
    >
      {isErrorMessage ? (
        <>
          {/* TODO support icons */}
          {showErrorIcon && 'error icon here'}
          <div {...errorMessageProps} className={'ac-help-text__text'}>
            {errorMessage}
          </div>
        </>
      ) : (
        <div {...descriptionProps} className={'ac-help-text__text'}>
          {description}
        </div>
      )}
    </div>
  );
}

/**
 * Help text provides either an informative description or an error message that gives more context about what a user needs to input. It's commonly used in forms.
 */
const _HelpText = React.forwardRef(HelpText);
export { _HelpText as HelpText };
