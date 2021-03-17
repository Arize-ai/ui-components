import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  ActionButton,
  PopoverTrigger,
  OverlayProvider,
  PopoverTriggerProps,
  Placement,
} from '../src';

import Card from '../src/Card';
import css from '@emotion/css';

const meta: Meta = {
  title: 'Popover',
  component: PopoverTrigger,
  argTypes: {
    placement: {
      control: {
        type: 'select',
        options: ['bottom right', 'bottom left'],
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const placements: Placement[] = [
  'bottom',
  'bottom left',
  'bottom right',
  'bottom start',
  'bottom end',
  'top',
  'top left',
  'top right',
  'top start',
  'top end',
  'left',
  'left top',
  'left bottom',
  'start',
  'start top',
  'start bottom',
  'right',
  'right top',
  'right bottom',
  'end',
  'end top',
  'end bottom',
];

const Template: Story<PopoverTriggerProps> = args => {
  return (
    <OverlayProvider>
      <ul style={{ listStyle: 'none', marginLeft: '300px' }}>
        {placements.map((placement, index) => {
          return (
            <li key={index} style={{ margin: '24px 0' }}>
              <PopoverTrigger placement={placement}>
                <ActionButton>{placement}</ActionButton>
                <Card
                  title="Popover Card Title"
                  bodyStyle={{ padding: 0, minWidth: 300 }}
                >
                  <ul
                    css={css`
                      list-style: none;
                      margin: 0;
                      padding: 0;
                      & > li {
                        padding: 16px 24px;
                        &:not(:last-child) {
                          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                        }
                      }
                    `}
                  >
                    <li>Item One</li>
                    <li>Item Two</li>
                    <li>Item Three</li>
                  </ul>
                </Card>
              </PopoverTrigger>
            </li>
          );
        })}
      </ul>
    </OverlayProvider>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
