import React, { ReactNode } from 'react';
import { css } from '@emotion/react';
import theme from '../theme';
import { Text } from '../content/Text';

const addonCSS = css`
  background-color: var(--ac-global-color-grey-300);
  padding: 0 var(--ac-global-dimension-static-size-100);
  flex: none;
  box-sizing: border-box;
  height: ${theme.singleLineHeight}px;
  display: flex;
  align-items: center;
`;

/**
 * A label element that describes a button or an input field
 */
export function AddonBefore({ children }: { children: ReactNode }) {
  return (
    <div css={addonCSS} className="ac-addon ac-addon--before">
      <Text textSize="medium" weight="heavy" color="text-700">
        {children}
      </Text>
    </div>
  );
}

/**
 * A label element that describes a button or an input field
 */
export function AddonAfter({ children }: { children: ReactNode }) {
  return (
    <div css={addonCSS} className="ac-addon ac-addon--after">
      <Text textSize="medium" weight="heavy" color="text-700">
        {children}
      </Text>
    </div>
  );
}
