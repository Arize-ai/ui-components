import { css } from '@emotion/core';
import { classNames } from '../utils';
import { HelpText, HelpTextComponentProps } from './HelpText';
import { FieldLabel, FieldLabelProps } from './FieldLabel';
import { LabelPosition } from '@react-types/shared';
import { mergeProps } from '@react-aria/utils';
import { Validation } from '../types';
import React, {
  RefObject,
  HTMLAttributes,
  ReactNode,
  ReactElement,
} from 'react';

export interface FieldProps
  extends FieldLabelProps,
    HelpTextComponentProps,
    Validation {
  children: ReactElement;
  label?: ReactNode;
  labelProps: HTMLAttributes<HTMLElement>;
  wrapperClassName?: string;
}

function Field(props: FieldProps, ref: RefObject<HTMLElement>) {
  let {
    label,
    labelPosition = 'top' as LabelPosition,
    labelAlign,
    isRequired,
    necessityIndicator,
    includeNecessityIndicatorInAccessibilityName,
    validationState,
    description,
    errorMessage,
    isDisabled,
    showErrorIcon,
    children,
    labelProps,
    // Not every component that uses <Field> supports help text.
    descriptionProps = {},
    errorMessageProps = {},
    elementType,
    wrapperClassName,
  } = props;
  let hasHelpText =
    !!description || (errorMessage && validationState === 'invalid');

  if (label || hasHelpText) {
    let labelWrapperClass = classNames(
      'ac-field',
      {
        'ac-field--positionTop': labelPosition === 'top',
        'ac-field--positionSide': labelPosition === 'side',
        'ac-field--hasHelpText': hasHelpText,
      },
      wrapperClassName
    );

    children = React.cloneElement(
      children,
      // @ts-ignore
      mergeProps(children.props, {
        className: 'ac-field',
      })
    );

    let renderHelpText = () => (
      <HelpText
        descriptionProps={descriptionProps}
        errorMessageProps={errorMessageProps}
        description={description}
        errorMessage={errorMessage}
        validationState={validationState}
        isDisabled={isDisabled}
        // labelAlign={labelAlign} TODO support different alignments
        showErrorIcon={showErrorIcon}
      />
    );

    return (
      <div
        ref={ref as RefObject<HTMLDivElement>}
        className={labelWrapperClass}
        css={css`
          /* For now assume vertical alignment of labels */
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        `}
      >
        {label && (
          <FieldLabel
            {...labelProps}
            labelPosition={labelPosition}
            labelAlign={labelAlign}
            isRequired={isRequired}
            necessityIndicator={necessityIndicator}
            includeNecessityIndicatorInAccessibilityName={
              includeNecessityIndicatorInAccessibilityName
            }
            elementType={elementType}
          >
            {label}
          </FieldLabel>
        )}
        {children}
        {hasHelpText && renderHelpText()}
      </div>
    );
  }

  return React.cloneElement(
    children,
    // @ts-ignore
    mergeProps(children.props, {
      ref,
    })
  );
}

// @ts-ignore
let _Field = React.forwardRef(Field);
export { _Field as Field };
