import {
  Alignment,
  DOMRef,
  LabelPosition,
  LabelableProps,
  DOMProps,
  AriaLabelingProps,
  ValidationState,
} from '../types';
import { classNames, useDOMRef } from '../utils';
import { filterDOMProps } from '@react-aria/utils';
import React, { useContext, ReactElement, FormEventHandler } from 'react';
import { css } from '@emotion/core';
import theme from '../theme';

let FormContext = React.createContext<LabelableProps>({});

export function useFormProps<T extends LabelableProps>(props: T): T {
  let ctx = useContext(FormContext);
  return { ...ctx, ...props };
}

const formPropNames = new Set([
  'action',
  'autoComplete',
  'encType',
  'method',
  'target',
  'onSubmit',
]);

export interface FormProps extends DOMProps, AriaLabelingProps, LabelableProps {
  /** The contents of the Form. */
  children: ReactElement<LabelableProps> | ReactElement<LabelableProps>[];

  /** Whether the Form elements are disabled. */
  isDisabled?: boolean;
  /** Whether user input is required on each of the Form elements before Form submission. */
  isRequired?: boolean;
  /** Whether the Form elements can be selected but not changed by the user. */
  isReadOnly?: boolean;
  /**
   * Whether the Form elements should display their "valid" or "invalid" visual styling.
   * @default 'valid'
   */
  validationState?: ValidationState;
  /**
   * Where to send the form-data when the form is submitted.
   */
  action?: string;
  /**
   * The enctype attribute specifies how the form-data should be encoded when submitting it to the server.
   */
  encType?:
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'
    | 'text/plain';
  /**
   * The form-data can be sent as URL variables (with method="get") or as HTTP post transaction (with method="post").
   */
  method?: 'get' | 'post';
  /**
   * The target attribute specifies a name or a keyword that indicates where to display the response that is received after submitting the form.
   */
  target?: '_blank' | '_self' | '_parent' | '_top';
  /**
   * Fired on form submission.
   */
  onSubmit?: FormEventHandler;
}

function Form(props: FormProps, ref: DOMRef<HTMLFormElement>) {
  let {
    children,
    labelPosition = 'top' as LabelPosition,
    labelAlign = 'start' as Alignment,
    isRequired,
    necessityIndicator,
    isDisabled,
    isReadOnly,
    validationState,
    ...otherProps
  } = props;
  let domRef = useDOMRef(ref);

  let ctx = {
    labelPosition,
    labelAlign,
    necessityIndicator,
  };

  return (
    <form
      {...filterDOMProps(otherProps, {
        labelable: true,
        propNames: formPropNames,
      })}
      noValidate
      ref={domRef}
      className={classNames('ac-form', {
        'ac-form--positionSide': labelPosition === 'side',
        'ac-form--positionTop': labelPosition === 'top',
      })}
      css={css`
        & > *:not(:last-child):not(.ac-field--hasHelpText) {
          margin-bottom: ${theme.spacing.margin24}px;
        }
      `}
    >
      <FormContext.Provider value={ctx}>{children}</FormContext.Provider>
    </form>
  );
}

/**
 * Forms allow users to enter data that can be submitted while providing alignment and styling for form fields.
 */
const _Form = React.forwardRef(Form);
export { _Form as Form };
