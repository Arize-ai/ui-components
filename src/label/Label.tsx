import { css } from '@emotion/core';
import React, { ReactNode, HTMLAttributes, ElementType } from 'react';
import { classNames } from '../utils';
import theme from '../theme';
import { Text } from '../content';

export interface LabelProps extends HTMLAttributes<HTMLElement> {
  icon?: ReactNode;
  children: string | ReactNode;
  onClick?: () => void;
  color?: 'white' | 'blue' | 'orange' | 'green' | 'red' | 'purple' | 'gray';
}

const labelCSS = css`
  color: ${theme.labelColors.white};
  border: 1px solid ${theme.labelColors.white};
  background-color: transparent;
  padding: 1px 8px;
  border-radius: 10px;
  text-align: center;
  display: inline-flex;
  align-items: center;
  &.interactive {
    cursor: pointer;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 0.8;
    }
  }
  &.ac-label--blue {
    color: ${theme.labelColors.blue};
    border: 1px solid ${theme.labelColors.blue};
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

  return (
    <LabelTag
      className={classNames(classes)}
      css={labelCSS}
      onClick={onClick}
      {...props}
    >
      {icon}
      <Text textSize="xsmall" color="inherit">
        {children}
      </Text>
    </LabelTag>
  );
};
