import { classNames, useDOMRef } from '../utils';
import { DOMRef } from '@react-types/shared';
import { css } from '@emotion/core';
import { filterDOMProps } from '@react-aria/utils';
import React, { ReactNode, ElementType, HTMLAttributes } from 'react';
import { DOMProps, LabelPosition, Alignment } from '../types';
import theme from '../theme';

interface LabelProps {
  children?: ReactNode;
  htmlFor?: string; // for compatibility with React
  for?: string;
  elementType?: ElementType;
}

interface FieldLabelPropsBase extends LabelProps, DOMProps {
  labelPosition?: LabelPosition; // default top
  labelAlign?: Alignment; // default start
  isRequired?: boolean;

  necessityIndicator?: 'icon' | 'label'; // default icon
  includeNecessityIndicatorInAccessibilityName?: boolean;
}

export interface FieldLabelProps
  extends FieldLabelPropsBase,
    HTMLAttributes<HTMLElement> {}

function FieldLabel(props: FieldLabelProps, ref: DOMRef<HTMLLabelElement>) {
  let {
    children,
    labelPosition = 'top',
    labelAlign = labelPosition === 'side' ? 'start' : null,
    isRequired,
    necessityIndicator = 'icon',
    includeNecessityIndicatorInAccessibilityName = false,
    htmlFor,
    for: labelFor,
    elementType: ElementType = 'label',
    onClick,
    ...otherProps
  } = props;

  let domRef = useDOMRef(ref);
  let necessityLabel = isRequired ? '(required)' : '(optional)';
  let icon = '*';

  let labelClassNames = classNames('ac-field-label', {
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
        font-weight: ${theme.typography.sizes.small.lineHeight}px;
        color: ${theme.textColors.white90};
        padding: ${theme.spacing.padding4}px 0;
        display: inline-block;
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
    </ElementType>
  );
}

let _FieldLabel = React.forwardRef(FieldLabel);
export { _FieldLabel as FieldLabel };
