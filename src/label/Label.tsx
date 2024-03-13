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
    color: var(--ac-global-color-primary);
    border: 1px solid var(--ac-global-color-primary);
  }
  &.ac-label--orange {
    color: ${theme.labelColors.orange};
    border: 1px solid ${theme.labelColors.orange};
  }
  &.ac-label--green {
    color: ${theme.labelColors.green};
    border: 1px solid ${theme.labelColors.green};
  }
  &.ac-label--red {
    color: ${theme.labelColors.red};
    border: 1px solid ${theme.labelColors.red};
  }
  &.ac-label--purple {
    color: ${theme.labelColors.purple};
    border: 1px solid ${theme.labelColors.purple};
  }
  &.ac-label--gray {
    color: ${theme.labelColors.gray};
    border: 1px solid ${theme.labelColors.gray};
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
