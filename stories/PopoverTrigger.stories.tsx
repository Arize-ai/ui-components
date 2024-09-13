import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { css } from '@emotion/react';
import {
  Card,
  PopoverTrigger,
  Provider,
  PopoverTriggerProps,
  Placement,
  Button,
  ListBox,
  Item,
  View,
} from '../src';
import { Icon, PlusCircleOutline } from '../src/icon';

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
                <Button
                  variant="default"
                  icon={<Icon svg={<PlusCircleOutline />} />}
                >
                  {placement}
                </Button>
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

export const PopoverTriggerWithListItem = () => {
  const [items, setItems] = useState(['one', 'two', 'three']);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Provider>
      <PopoverTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
        <Button variant="default" icon={<Icon svg={<PlusCircleOutline />} />}>
          Foo
        </Button>
        <View
          minWidth={300}
          borderColor="light"
          borderRadius="medium"
          borderWidth="thick"
        >
          <ListBox
            selectionMode="single"
            onSelectionChange={() => {
              setItems(['four', 'five', 'six']);
              setIsOpen(false);
            }}
          >
            {items.map(item => (
              <Item key={item}>{item}</Item>
            ))}
          </ListBox>
        </View>
      </PopoverTrigger>
    </Provider>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
