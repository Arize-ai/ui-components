import React from 'react';
import { Meta, Story } from '@storybook/react';

import { css } from '@emotion/react';
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

import { ThemeToggleWrap } from './components/ThemeToggleWrap';

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

export const Gallery = () => (
  <ThemeToggleWrap>
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
  </ThemeToggleWrap>
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
