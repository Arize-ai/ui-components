import { css, keyframes } from '@emotion/react';
import { mergeProps } from '@react-aria/utils';
import React, {
  RefObject,
  HTMLAttributes,
  ReactNode,
  ReactElement,
} from 'react';
import { LabelPosition, Validation } from '../types';
import { classNames } from '../utils';
import { useFormProps } from '../form';
import { FieldLabel, FieldLabelProps } from './FieldLabel';
import { HelpText, HelpTextComponentProps } from './HelpText';

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
  const hasHelpText =
    !!description || (errorMessage && validationState === 'invalid');

  const labelWrapperClass = classNames(
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
  const renderHelpText = () => (
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
const _Field = React.forwardRef(Field);
export { _Field as Field };
