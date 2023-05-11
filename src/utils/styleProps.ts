import { CSSProperties } from 'react';
import { DimensionValue } from '../types';

const UNIT_RE = /(%|px|em|rem|vw|vh|auto|cm|mm|in|pt|pc|ex|ch|rem|vmin|vmax|fr)$/;
const FUNC_RE = /^\s*\w+\(/;
const AC_VARIABLE_RE = /(static-)?size-\d+|single-line-(height|width)/g;

export function dimensionValue(value: DimensionValue) {
  if (typeof value === 'number') {
    return value + 'px';
  }

  if (UNIT_RE.test(value)) {
    return value;
  }

  if (FUNC_RE.test(value)) {
    return value.replace(
      AC_VARIABLE_RE,
      'var(--ac-global-dimension-$&, var(--ac-alias-$&))'
    );
  }

  return `var(--ac-global-dimension-${value})`;
}

export function convertStyleProps(
  props: ViewStyleProps,
  handlers: StyleHandlers,
  direction: Direction,
  matchedBreakpoints: Breakpoint[]
) {
  let style: CSSProperties = {};
  for (let key in props) {
    let styleProp = handlers[key];
    if (!styleProp || props[key] == null) {
      continue;
    }

    let [name, convert] = styleProp;
    if (typeof name === 'function') {
      name = name(direction);
    }

    let prop = getResponsiveProp(props[key], matchedBreakpoints);
    let value = convert(prop);
    if (Array.isArray(name)) {
      for (let k of name) {
        style[k] = value;
      }
    } else {
      style[name] = value;
    }
  }

  for (let prop in borderStyleProps) {
    if (style[prop]) {
      style[borderStyleProps[prop]] = 'solid';
      style.boxSizing = 'border-box';
    }
  }

  return style;
}
