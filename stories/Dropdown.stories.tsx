import React from 'react';
import { css } from '@emotion/core';
import { Dropdown, DropdownProps } from '../src/dropdown';
import { Provider } from '../src';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { List, ListItem } from '../src/list';

const meta: Meta = {
  title: 'Dropdown',
  component: Dropdown,
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

const Menu = () => (
  <List listSize="small">
    <ListItem>hello</ListItem>
    <ListItem>hello</ListItem>
  </List>
);
export const Gallery = () => (
  <Provider>
    <ul
      css={css`
        margin-left: 300px;
        li {
          margin-bottom: 8px;
        }
      `}
    >
      <li>
        <Dropdown menu={<Menu />}>Click Me</Dropdown>
      </li>
      <li>
        <Dropdown menu={<Menu />} buttonAddonBefore="Dataset A">
          Click Me
        </Dropdown>
      </li>
      <li>
        <Dropdown
          menu={
            <List listSize="small">
              <ListItem>hello</ListItem>
              <ListItem>
                hello asdfasdfasdfasdfasdfasdfasdfasdfasdadsfad
              </ListItem>
            </List>
          }
          buttonAddonBefore="Dataset A"
          buttonStyle={{ maxWidth: 250 }}
        >
          Really really really really really really really long text
        </Dropdown>
      </li>
    </ul>
  </Provider>
);

const Template: Story<DropdownProps> = args => (
  <Provider>
    <Dropdown menu={<Menu />} {...args}>
      Click Me
    </Dropdown>
  </Provider>
);

export const Default = Template.bind({});
