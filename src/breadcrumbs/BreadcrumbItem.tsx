import { BreadcrumbItemProps } from '@react-types/breadcrumbs';
import { ChevronRightOutline, Icon } from '../icon';
import { classNames, getWrappedElement } from '../utils';
import { FocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import React, { Fragment, useRef } from 'react';
import { useBreadcrumbItem } from '@react-aria/breadcrumbs';
import { useHover } from '@react-aria/interactions';

export function BreadcrumbItem(props: BreadcrumbItemProps) {
  let { children, isCurrent, isDisabled } = props;

  let ref = useRef(null);
  let { itemProps } = useBreadcrumbItem(
    {
      ...props,
      elementType: typeof children === 'string' ? 'span' : 'a',
    },
    ref
  );
  let { hoverProps, isHovered } = useHover(props);

  let element = React.cloneElement(getWrappedElement(children), {
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
