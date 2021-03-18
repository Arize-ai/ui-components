import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  ActionButton,
  PopoverTrigger,
  Provider,
  PopoverTriggerProps,
  Placement,
} from '../src';

import Card from '../src/Card';
import css from '@emotion/css';

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

const meta: Meta = {
  title: 'PopoverTrigger',
  component: PopoverTrigger,
  argTypes: {
    placement: {
      control: {
        type: 'select',
        options: placements,
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<PopoverTriggerProps> = args => {
  return (
    <Provider>
      <ul style={{ listStyle: 'none', marginLeft: '300px' }}>
        {placements.map((placement, index) => {
          return (
            <li key={index} style={{ margin: '24px 0' }}>
              <PopoverTrigger placement={placement}>
                <ActionButton>{placement}</ActionButton>
                <Card
                  title="Popover Title"
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
    </Provider>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

const ControlledTemplate: Story<PopoverTriggerProps> = args => {
  const [selectedId, setSelectedId] = useState<string>(null);
  return (
    <Provider>
      <ul style={{ listStyle: 'none', marginLeft: '300px' }}>
        {['one', 'two', 'three'].map((id, index) => {
          return (
            <li key={index} style={{ margin: '24px 0' }}>
              <PopoverTrigger
                placement="left top"
                isOpen={id === selectedId}
                onOpenChange={isOpen => {
                  if (isOpen && id !== selectedId) {
                    setSelectedId(id);
                  } else if (!isOpen && id == selectedId) {
                    setSelectedId(null);
                  }
                }}
              >
                <ActionButton>{id}</ActionButton>
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
    </Provider>
  );
};

export const Controlled = ControlledTemplate.bind({});

Default.args = {};
