import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import {
  ActionButton,
  TooltipTrigger,
  Provider,
  TooltipTriggerProps,
  Tooltip,
  Placement,
  TriggerWrap,
  Card,
} from '../src';

import css from '@emotion/css';

const placements: Placement[] = [
  'start',
  'end',
  'right',
  'left',
  'top',
  'bottom',
];

const meta: Meta = {
  title: 'TooltipTrigger',
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
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?node-id=503%3A0',
    },
  },
};

export default meta;

export const Gallery = () => (
  <Provider>
    <ul style={{ listStyle: 'none', marginLeft: '200px', marginTop: '200px' }}>
      {placements.map((placement, index) => {
        return (
          <li key={index} style={{ margin: '10px 0' }}>
            <TooltipTrigger placement={placement}>
              <ActionButton>{placement}</ActionButton>
              <Tooltip>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Tooltip>
            </TooltipTrigger>
          </li>
        );
      })}
    </ul>
  </Provider>
);

const focusableCSS = css`
  &:focus {
    outline: 1px solid blue;
  }
`;
export const OnFocusableElement = () => (
  <Provider>
    <ul
      style={{
        listStyle: 'none',
        marginLeft: '200px',
        marginTop: '100px',
        width: 200,
      }}
    >
      {placements.map((placement, index) => {
        return (
          <li key={index} style={{ margin: '10px 0' }}>
            <TooltipTrigger placement={placement}>
              <TriggerWrap css={focusableCSS} tabIndex={index}>
                <Card title={`Card ${index}`}>{index}</Card>
              </TriggerWrap>
              <Tooltip>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Tooltip>
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
          <Tooltip>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Tooltip>
        </TooltipTrigger>
      </div>
    </Provider>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
