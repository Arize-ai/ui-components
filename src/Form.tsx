import React, { ReactNode } from 'react';
import { css } from '@emotion/core';
import theme from './theme';

export type FormProps = {
  children: ReactNode;
  className?: string;
};

function Form({ children, className }: FormProps) {
  return (
    <div role="form" className={className}>
      {children}
    </div>
  );
}

export const RequiredFieldsDisclosure = () => (
  <div
    data-testid="required-fields-disclosure"
    css={css`
      color: #bbbdbf;
      font-size: ${theme.typography.sizes.medium};
      text-align: right;
    `}
  >
    * Required fields
  </div>
);

const formLabelText = css`
  margin-bottom: 4px;
  margin-top: 8px;
  font-size: ${theme.typography.sizes.medium};
  color: ${theme.colors.text1};
`;

const formLabelHelper = css`
  padding-left: 4px;
  color: #bbbdbf;
  font-size: ${theme.typography.sizes.medium};
`;

const formLabelContents = css`
  margin-bottom: 8px;
`;

export const FormLabel = ({
  children,
  text,
  required = false,
  helperText,
}: {
  children: ReactNode;
  text: ReactNode;
  required?: boolean;
  helperText?: string; // Text the describe the field or display limits
}) => {
  return (
    <label>
      <div css={formLabelText}>
        {text}
        {required ? <span css={formLabelHelper}>*</span> : null}
        {helperText ? <span css={formLabelHelper}>{helperText}</span> : null}
      </div>
      {children ? <div css={formLabelContents}>{children}</div> : null}
    </label>
  );
};

Form.RequiredFieldsDisclosure = RequiredFieldsDisclosure;
Form.FormLabel = FormLabel;

export default Form;
