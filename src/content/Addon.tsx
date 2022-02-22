import React, { ReactNode } from 'react';
import { css } from '@emotion/core';
import theme from '../theme';
import { Text } from './Text';

const addonBeforeCSS = css`
  background-color: ${theme.colors.gray400};
  padding: ${theme.spacing.padding8}px;
  flex: none;
  box-sizing: border-box;
`;

/**
 * A label element that describes the button
 */
export function AddonBefore({ children }: { children: ReactNode }) {
  return (
    <div css={addonBeforeCSS}>
      <Text textSize="medium" weight="heavy" color="white70">
        {children}
      </Text>
    </div>
  );
}
