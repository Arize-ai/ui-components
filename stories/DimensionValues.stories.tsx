import React from 'react';
import { css } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Provider, Text } from '../src';
import detent from 'ts-dedent';

const meta: Meta = {
  title: 'DimensionValues',
  decorators: [withDesign],
  argTypes: {
    children: {
      control: {
        type: 'text',
        default: 'Label',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: '',
    },
    docs: {
      description: {
        component: detent`
        ##Size tokens
          
        Global size tokens are used for specifying dimensions and spacing for every AC component. 
        Since AC supports two platform scales, token values automatically adjust between scales, allowing for a single token to be used for each.
        Size tokens are anchored around a base value. Each token’s number represents a percentage relative to the base value. 
        For example, size-100 is 100% of the base value, size-400 is 400%, and so on.
        `,
      },
    },
  },
};

export default meta;

const values = [
  '--ac-global-dimension-static-size-0',
  '--ac-global-dimension-static-size-10',
  '--ac-global-dimension-static-size-25',
  '--ac-global-dimension-static-size-50',
  '--ac-global-dimension-static-size-40',
  '--ac-global-dimension-static-size-65',
  '--ac-global-dimension-static-size-100',
  '--ac-global-dimension-static-size-115',
  '--ac-global-dimension-static-size-125',
  '--ac-global-dimension-static-size-130',
  '--ac-global-dimension-static-size-150',
  '--ac-global-dimension-static-size-160',
  '--ac-global-dimension-static-size-175',
  '--ac-global-dimension-static-size-200',
  '--ac-global-dimension-static-size-225',
  '--ac-global-dimension-static-size-250',
  '--ac-global-dimension-static-size-300',
  '--ac-global-dimension-static-size-400',
  '--ac-global-dimension-static-size-450',
  '--ac-global-dimension-static-size-500',
  '--ac-global-dimension-static-size-550',
  '--ac-global-dimension-static-size-600',
  '--ac-global-dimension-static-size-700',
  '--ac-global-dimension-static-size-800',
  '--ac-global-dimension-static-size-900',
  '--ac-global-dimension-static-size-1000',
  '--ac-global-dimension-static-size-1200',
  '--ac-global-dimension-static-size-1700',
  '--ac-global-dimension-static-size-2400',
  '--ac-global-dimension-static-size-2600',
  '--ac-global-dimension-static-size-3400',
  '--ac-global-dimension-static-size-3600',
  '--ac-global-dimension-static-size-4600',
  '--ac-global-dimension-static-size-5000',
  '--ac-global-dimension-static-size-6000',
  '--ac-global-dimension-static-font-size-50',
  '--ac-global-dimension-static-font-size-75',
  '--ac-global-dimension-static-font-size-100',
  '--ac-global-dimension-static-font-size-150',
  '--ac-global-dimension-static-font-size-200',
  '--ac-global-dimension-static-font-size-300',
  '--ac-global-dimension-static-font-size-400',
  '--ac-global-dimension-static-font-size-500',
  '--ac-global-dimension-static-font-size-600',
  '--ac-global-dimension-static-font-size-700',
  '--ac-global-dimension-static-font-size-800',
  '--ac-global-dimension-static-font-size-900',
  '--ac-global-dimension-static-font-size-1000',
  // '--ac-global-dimension-static-percent-50',
  // '--ac-global-dimension-static-percent-100',
  // '--ac-global-dimension-static-breakpoint-xsmall',
  // '--ac-global-dimension-static-breakpoint-small',
  // '--ac-global-dimension-static-breakpoint-medium',
  // '--ac-global-dimension-static-breakpoint-large',
  // '--ac-global-dimension-static-breakpoint-xlarge',
  // '--ac-global-dimension-static-grid-columns',
  // '--ac-global-dimension-static-grid-fluid-width',
  // '--ac-global-dimension-static-grid-fixed-max-width',
];
export const DimensionValues = () => {
  return (
    <Provider>
      <ul>
        {values.map(value => (
          <li
            key={value}
            css={css`
              margin-bottom: 8px;
              display: flex;
              flex-direction: row;
              gap: 8px;
            `}
          >
            <div
              css={css`
                width: var(${value});
                height: 12px;
                background-color: #fff;
              `}
            />
            <Text textSize="small">{value}</Text>
          </li>
        ))}
      </ul>
    </Provider>
  );
};
