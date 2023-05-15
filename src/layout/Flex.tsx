import {
  StyleHandlers,
  classNames,
  passthroughStyle,
  responsiveDimensionValue,
  useDOMRef,
  useStyleProps,
} from '../utils';
import { DOMProps, DOMRef, FlexStyleProps } from '../types';
import { filterDOMProps } from '@react-aria/utils';
import React, { forwardRef, ReactNode } from 'react';
import { css } from '@emotion/react';

export interface FlexProps extends DOMProps, FlexStyleProps {
  /** Children of the flex container. */
  children: ReactNode;
}

const flexCSS = css`
  display: flex;
`;

const flexStyleProps: StyleHandlers = {
  direction: ['flexDirection', passthroughStyle],
  wrap: ['flexWrap', flexWrapValue],
  justifyContent: ['justifyContent', flexAlignValue],
  alignItems: ['alignItems', flexAlignValue],
  alignContent: ['alignContent', flexAlignValue],
};

function Flex(props: FlexProps, ref: DOMRef<HTMLDivElement>) {
  let { children, ...otherProps } = props;

  let matchedBreakpoints = ['base'];
  let { styleProps } = useStyleProps(otherProps);
  let { styleProps: flexStyle } = useStyleProps(otherProps, flexStyleProps);
  let domRef = useDOMRef(ref);

  // If no gaps, or native support exists, then we only need to render a single div.
  let style = {
    ...styleProps.style,
    ...flexStyle.style,
  };

  if (props.gap != null) {
    style.gap = responsiveDimensionValue(props.gap, matchedBreakpoints);
  }

  if (props.columnGap != null) {
    style.columnGap = responsiveDimensionValue(
      props.columnGap,
      matchedBreakpoints
    );
  }

  if (props.rowGap != null) {
    style.rowGap = responsiveDimensionValue(props.rowGap, matchedBreakpoints);
  }

  return (
    <div
      css={flexCSS}
      {...filterDOMProps(otherProps)}
      className={classNames('flex', styleProps.className)}
      style={style}
      ref={domRef}
    >
      {children}
    </div>
  );
}

/**
 * Normalize 'start' and 'end' alignment values to 'flex-start' and 'flex-end'
 * in flex containers for browser compatibility.
 */
function flexAlignValue(value) {
  if (value === 'start') {
    return 'flex-start';
  }

  if (value === 'end') {
    return 'flex-end';
  }

  return value;
}

/**
 * Takes a boolean and translates it to flex wrap or nowrap.
 */
function flexWrapValue(value: boolean | 'wrap' | 'nowrap') {
  if (typeof value === 'boolean') {
    return value ? 'wrap' : 'nowrap';
  }

  return value;
}

/**
 * A layout container using flexbox. Provides Spectrum dimension values, and supports the gap
 * property to define consistent spacing between items.
 */
const _Flex = forwardRef(Flex);
export { _Flex as Flex };
