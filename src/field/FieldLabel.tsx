import { css } from '@emotion/react';
import { filterDOMProps } from '@react-aria/utils';
import React, { ReactNode, ElementType, HTMLAttributes } from 'react';
import { classNames, useDOMRef } from '../utils';
import {
  DOMProps,
  LabelableProps,
  ExtendableLabelProps,
  DOMRef,
} from '../types';
import theme from '../theme';

interface LabelProps {
  children?: ReactNode;
  htmlFor?: string; // for compatibility with React
  for?: string;
  elementType?: ElementType;
}

interface FieldLabelPropsBase
  extends LabelProps,
    LabelableProps,
    ExtendableLabelProps,
    DOMProps {
  includeNecessityIndicatorInAccessibilityName?: boolean;
}

export interface FieldLabelProps
  extends FieldLabelPropsBase,
    HTMLAttributes<HTMLElement> {}

function FieldLabel(props: FieldLabelProps, ref: DOMRef<HTMLLabelElement>) {
  const {
    children,
    labelPosition = 'top',
    labelAlign = labelPosition === 'side' ? 'start' : null,
    labelExtra,
    isRequired,
    necessityIndicator = 'icon',
    includeNecessityIndicatorInAccessibilityName = false,
    htmlFor,
    for: labelFor,
    elementType: ElementType = 'label',
    onClick,
    ...otherProps
  } = props;

  const domRef = useDOMRef(ref);
  const necessityLabel = isRequired ? '(required)' : '(optional)';
  const icon = '*';

  const labelClassNames = classNames('ac-field-label', {
    'ac-field-label--positionSide': labelPosition === 'side',
    'ac-field-label--alignEnd': labelAlign === 'end',
  });

  return (
    <ElementType
      {...filterDOMProps(otherProps)}
      onClick={onClick}
      ref={domRef}
      className={labelClassNames}
      htmlFor={ElementType === 'label' ? labelFor || htmlFor : undefined}
      css={css`
        font-size: ${theme.typography.sizes.small.fontSize}px;
        line-height: ${theme.typography.sizes.small.lineHeight}px;
        font-weight: ${theme.typography.weights.heavy};
        color: var(--ac-global-text-color-900);
        padding: var(--ac-global-dimension-static-size-50) 0;
        display: inline-flex;
        align-items: center;
      `}
    >
      {children}
      {(necessityIndicator === 'label' ||
        (necessityIndicator === 'icon' && isRequired)) &&
        ' \u200b'}
      {/* necessityLabel is hidden to screen readers if the field is required because
       * aria-required is set on the field in that case. That will already be announced,
       * so no need to duplicate it here. If optional, we do want it to be announced here. */}
      {necessityIndicator === 'label' && (
        <span
          aria-hidden={
            !includeNecessityIndicatorInAccessibilityName
              ? isRequired
              : undefined
          }
        >
          {necessityLabel}
        </span>
      )}
      {necessityIndicator === 'icon' && isRequired && icon}
      {labelExtra && (
        <span
          className="ac-field-label__label-extra"
          css={css`
            margin-left: var(--ac-global-dimension-static-size-50);
            display: inline-flex;
            align-items: center;
          `}
        >
          {labelExtra}
        </span>
      )}
    </ElementType>
  );
}

const _FieldLabel = React.forwardRef(FieldLabel);
export { _FieldLabel as FieldLabel };
