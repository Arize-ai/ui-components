import React from 'react';
import { css } from '@emotion/react';
import {
  DropdownTrigger,
  DropdownTriggerProps,
  DropdownButton,
  DropdownMenu,
} from '../src/dropdown';
import { Provider } from '../src';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

const meta: Meta = {
  title: 'DropdownTrigger',
  component: DropdownTrigger,
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
      url:
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?node-id=1238%3A2417',
    },
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
