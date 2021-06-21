import React from 'react';
import { css } from '@emotion/core';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import {
  ActionButton,
  TooltipTrigger,
  Provider,
  TooltipTriggerProps,
  ActionTooltip,
  Placement,
  Text,
} from '../src';
import { Icon, ArrowIosForwardOutline } from '../src/icon';

const placements: Placement[] = [
  'start',
  'end',
  'right',
  'left',
  'top',
  'bottom',
];

const meta: Meta = {
  title: 'ActionTooltip',
  component: TooltipTrigger,
  decorators: [withDesign],
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
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?node-id=1030%3A1',
    },
  },
};

export default meta;

const Link = () => (
  <a
    href="#"
    css={css`
      padding: 8px;
      color: rgba(255, 255, 255, 0.9);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      text-decoration: none;
    `}
  >
    <Text color="white90" textSize="large" weight="heavy">
      View Drift
    </Text>
    <Icon aria-hidden={true} svg={<ArrowIosForwardOutline />}></Icon>
  </a>
);
export const Gallery = () => (
  <Provider>
    <ul style={{ listStyle: 'none', marginLeft: '200px', marginTop: '200px' }}>
      {placements.map((placement, index) => {
        return (
          <li key={index} style={{ margin: '10px 0' }}>
            <TooltipTrigger placement={placement}>
              <ActionButton>{placement}</ActionButton>
              <ActionTooltip
                title="We've detected model drift"
                subTitle="Your prediction PSI is 0.45 which is higher than your threshold of 0.25"
                style={{ width: 300 }}
              >
                <Link />
              </ActionTooltip>
            </TooltipTrigger>
          </li>
        );
      })}
    </ul>
  </Provider>
);

const Template: Story<TooltipTriggerProps> = args => {
  return (
    <Provider>
      <div style={{ marginLeft: '200px', marginTop: '200px' }}>
        <TooltipTrigger {...args}>
          <ActionButton>Hover</ActionButton>
          <ActionTooltip
            title="We've detected model drift"
            subTitle="Your prediction PSI is 0.45 which is higher than your threshold of 0.25"
            style={{ width: 300 }}
          >
            <Link />
          </ActionTooltip>
        </TooltipTrigger>
      </div>
    </Provider>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
