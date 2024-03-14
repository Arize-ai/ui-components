import { css } from '@emotion/react';
import React, { ReactNode, HTMLAttributes, ElementType, useMemo } from 'react';
import { classNames, colorValue } from '../utils';
import theme from '../theme';
import { Text } from '../content';
import { ColorValue } from '../types';

type BaseLabelColors =
  | 'white'
  | 'blue'
  | 'orange'
  | 'green'
  | 'red'
  | 'purple'
  | 'gray';

function isBaseLabelColor(color: string): color is BaseLabelColors {
  return (
    color === 'white' ||
    color === 'blue' ||
    color === 'orange' ||
    color === 'green' ||
    color === 'red' ||
    color === 'purple' ||
    color === 'gray'
  );
}
export interface LabelProps extends HTMLAttributes<HTMLElement> {
  icon?: ReactNode;
  children: string | ReactNode;
  onClick?: () => void;
  color?:
    | 'white'
    | 'blue'
    | 'orange'
    | 'green'
    | 'red'
    | 'purple'
    | 'gray'
    | ColorValue;
  /**
   * The shape of the label
   * @default pill
   */
  shape?: LabelShape;
}

type LabelShape = 'pill' | 'badge';

const labelCSS = (color: string | null) => css`
  color: ${color || theme.labelColors.white};
  border: 1px solid ${color || theme.labelColors.white};
  background-color: transparent;
  padding: 1px 8px;

  text-align: center;
  display: inline-flex;
  align-items: center;
  &[data-shape='pill'] {
    border-radius: 12px;
  }
  &[data-shape='badge'] {
    border-radius: 4px;
  }
  &.interactive {
    cursor: pointer;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 0.8;
    }
  }
  // hard coded values
  &.ac-label--blue {
    color: var(--ac-global-color-blue-900);
    border: 1px solid var(--ac-global-color-blue-900);
  }
  &.ac-label--orange {
    color: var(--ac-global-color-orange-900);
    border: 1px solid var(--ac-global-color-orange-900);
  }
  &.ac-label--green {
    color: var(--ac-global-color-green-900);
    border: 1px solid var(--ac-global-color-green-900);
  }
  &.ac-label--red {
    color: var(--ac-global-color-red-900);
    border: 1px solid var(--ac-global-color-red-900);
  }
  &.ac-label--purple {
    color: var(--ac-global-color-purple-900);
    border: 1px solid var(--ac-global-color-purple-900);
  }
  &.ac-label--gray {
    color: var(--ac-global-color-grey-900);
    border: 1px solid var(--ac-global-color-grey-900);
  }
  & > i {
    font-size: 10px;
    margin-right: 2px;
    position: relative;
    svg {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 100%;
    }
  }
`;

export const Label = ({
  icon,
  children,
  color = 'white',
  shape = 'pill',
  onClick,
  ...props
}: LabelProps) => {
  const classes = ['ac-label'];
  if (color != null) {
    classes.push(`ac-label--${color}`);
  }
  let LabelTag = 'span' as ElementType;
  if (onClick) {
    // Convert the element to be button
    LabelTag = 'button';
    classes.push('interactive');
  }

  const globalColor = useMemo<string | null>(() => {
    if (typeof color === 'string' && isBaseLabelColor(color)) {
      return null;
    }
    return colorValue(color);
  }, [color]);

  return (
    <LabelTag
      className={classNames(classes)}
      css={labelCSS(globalColor)}
      onClick={onClick}
      data-shape={shape}
      {...props}
    >
      {icon}
      <Text textSize="xsmall" color="inherit">
        {children}
      </Text>
    </LabelTag>
  );
};
