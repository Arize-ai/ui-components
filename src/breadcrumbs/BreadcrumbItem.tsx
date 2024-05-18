import { FocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import React, { Fragment, useRef } from 'react';
import { useBreadcrumbItem } from '@react-aria/breadcrumbs';
import { useHover } from '@react-aria/interactions';
import { classNames, getWrappedElement } from '../utils';
import { ChevronRightOutline, Icon } from '../icon';
import { BreadcrumbItemProps } from '../types';

export function BreadcrumbItem(props: BreadcrumbItemProps) {
  const { children, isCurrent, isDisabled } = props;

  const ref = useRef(null);
  const { itemProps } = useBreadcrumbItem(
    {
      ...props,
      elementType: typeof children === 'string' ? 'span' : 'a',
    },
    ref
  );
  const { hoverProps, isHovered } = useHover(props);

  const element = React.cloneElement(getWrappedElement(children), {
    ...mergeProps(itemProps, hoverProps),
    ref,
    className: classNames('ac-breadcrumbs-item-link', {
      'is-disabled': !isCurrent && isDisabled,
      'is-hovered': isHovered,
    }),
  });

  return (
    <Fragment>
      <FocusRing focusRingClass={'focus-ring'}>{element}</FocusRing>
      {isCurrent === false && <Icon svg={<ChevronRightOutline />} />}
    </Fragment>
  );
}
