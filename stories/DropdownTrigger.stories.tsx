import React from 'react';
import { css } from '@emotion/react';
import { Meta, Story } from '@storybook/react';

import {
  DropdownTrigger,
  DropdownTriggerProps,
  DropdownButton,
  DropdownMenu,
} from '../src/dropdown';
import { Provider } from '../src';

const meta: Meta = {
  title: 'DropdownTrigger',
  component: DropdownTrigger,

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
  },
};

export default meta;

export const Gallery = () => (
  <Provider>
    <ul
      css={css`
        li {
          margin-bottom: 8px;
        }
      `}
    >
      <li>
        <DropdownTrigger>
          <DropdownButton>Button here</DropdownButton>
          <DropdownMenu
            css={css`
              color: white;
            `}
          >
            menu goes here
          </DropdownMenu>
        </DropdownTrigger>
      </li>
      <li>
        <DropdownTrigger>
          <DropdownButton addonBefore="Dataset A">Button here</DropdownButton>
          <DropdownMenu
            css={css`
              color: white;
            `}
          >
            menu goes here
          </DropdownMenu>
        </DropdownTrigger>
      </li>
    </ul>
  </Provider>
);

const Template: Story<DropdownTriggerProps> = args => (
  <Provider>
    <DropdownTrigger {...args}>
      <DropdownButton>Button here</DropdownButton>
      <DropdownMenu
        css={css`
          color: white;
        `}
      >
        menu goes here
      </DropdownMenu>
    </DropdownTrigger>
  </Provider>
);

export const Default = Template.bind({});
