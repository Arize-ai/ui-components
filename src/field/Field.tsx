import { css, keyframes } from '@emotion/react';
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
import { useFormProps } from '../form';

const appearKeyframes = keyframes`
    0% {  opacity: 0; }
    100% { opacity: 1; }
`;

export interface FieldProps
  extends FieldLabelProps,
    HelpTextComponentProps,
    Validation {
  children: ReactElement;
  label?: ReactNode;
  labelProps?: HTMLAttributes<HTMLElement>;
  wrapperClassName?: string;
}

function Field(props: FieldProps, ref: RefObject<HTMLElement>) {
  props = useFormProps(props);
  let {
    label,
    labelExtra,
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
      className: 'ac-field__field',
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
        .ac-help-text--danger {
          /* Animate in the help text */
          animation: ${appearKeyframes} ${0.3}s forwards ease-in-out;
        }
      `}
    >
      {label && (
        <FieldLabel
          {...labelProps}
          labelPosition={labelPosition}
          labelAlign={labelAlign}
          labelExtra={labelExtra}
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

// @ts-ignore
let _Field = React.forwardRef(Field);
export { _Field as Field };
