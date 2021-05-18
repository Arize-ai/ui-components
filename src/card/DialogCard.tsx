import { Card, CardProps } from './';
import { Icon } from '../icon';
import { CloseOutline } from './icons';
import { FocusScope } from '@react-aria/focus';
import theme from '../theme';
import { css } from '@emotion/core';
import React from 'react';
import { ActionButton } from '../ActionButton';

const actionButtonStyles = {
  padding: '0',
  marginLeft: '4px',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  color: 'inherit',
};

const CloseIcon = ({ onClick }: { onClick: () => void }) => (
  <ActionButton key="close-icon" aria-label="Close" {...actionButtonStyles}>
    <Icon
      onClick={onClick}
      css={css`
        color: ${theme.textColors.white90};
      `}
      svg={<CloseOutline />}
    />
  </ActionButton>
);

export interface DialogCardProps extends CardProps {
  onClose?: () => void;
}

export function DialogCard(props: DialogCardProps) {
  const { onClose, children, ...cardProps } = props;
  return (
    <FocusScope contain restoreFocus>
      <Card
        {...cardProps}
        extra={onClose ? <CloseIcon onClick={onClose} /> : null}
      >
        {children}
      </Card>
    </FocusScope>
  );
}
