import React, { ReactNode } from 'react';

import { css } from '@emotion/core';
import { TooltipTrigger, ActionButton, Tooltip } from '../../src';
import { Icon } from '../../src/icon';

const InfoOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="info">
        <rect
          width="24"
          height="24"
          transform="rotate(180 12 12)"
          opacity="0"
        />
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <circle cx="12" cy="8" r="1" />
        <path d="M12 10a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1z" />
      </g>
    </g>
  </svg>
);

interface InfoTipProps {
  children: ReactNode;
  /**
   * Add margin to the left to display the icon nicely
   * @default true
   */
  postfix?: boolean;
}

/**
 * Displays and info icon to hover over to view more details
 * The details could be contextual (e.g. display supplementary information like time range details)
 * or be help content
 */
function InfoTip({ children, postfix = true }: InfoTipProps) {
  return (
    <TooltipTrigger delay={0} offset={0}>
      {[
        <ActionButton
          key="info-icon"
          aria-label="info"
          style={{
            padding: 0,
            marginLeft: postfix ? '4px' : null,
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            color: 'inherit',
            verticalAlign: 'bottom',
          }}
        >
          <Icon
            svg={<InfoOutline />}
            css={css`
              font-size: inherit;
              display: flex;
              align-items: center;
            `}
          />
        </ActionButton>,
        <Tooltip key="tooltip">{children}</Tooltip>,
      ]}
    </TooltipTrigger>
  );
}

export default InfoTip;
