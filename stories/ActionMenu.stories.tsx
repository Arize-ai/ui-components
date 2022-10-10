import React, { useState } from 'react';
import { css } from '@emotion/core';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import {
  Provider,
  List,
  ListItem,
  Dropdown,
  DropdownProps,
  ActionMenu,
  Item,
  Heading,
  Section,
} from '../src';
import { Icon, PlusCircleOutline } from '../src/icon';

const meta: Meta = {
  title: 'ActionMenu',
  component: ActionMenu,
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
  },
};

export default meta;

const Template: Story<DropdownProps> = args => (
  <Provider>
    <div
      css={css`
        margin: 24px;
        > * {
          margin-bottom: 16px;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          gap: 4px;
        `}
      >
        <ActionMenu
          {...args}
          onAction={action => alert('You clicked on ' + action)}
        >
          <Item key="one">One</Item>
          <Item key="two">Two</Item>
          <Item key="three">Three</Item>
        </ActionMenu>
        <ActionMenu
          {...args}
          onAction={action => alert('You clicked on ' + action)}
          align="end"
        >
          <Item key="one">One</Item>
          <Item key="two">Two</Item>
          <Item key="three">Three</Item>
        </ActionMenu>
      </div>
      <div
        css={css`
          display: flex;
          gap: 5px;
        `}
      >
        <ActionMenu
          icon={<Icon svg={<PlusCircleOutline />} />}
          buttonText={'Add Dashboard'}
        >
          <Item key="one">One</Item>
          <Item key="two">Two</Item>
          <Item key="three">Three</Item>
        </ActionMenu>
        <ActionMenu
          icon={<Icon svg={<PlusCircleOutline />} />}
          buttonText={'Add Dashboard'}
          align="end"
        >
          <Item key="one">One</Item>
          <Item key="two">Two</Item>
          <Item key="three">Three</Item>
        </ActionMenu>
      </div>
      <div>
        <Heading>With Section</Heading>
        <ActionMenu>
          <Section title="File">
            <Item key="new">New</Item>
            <Item key="open">Open...</Item>
          </Section>
          <Section title="Save">
            <Item key="save">Save</Item>
            <Item key="saveAs">Save As...</Item>
            <Item key="saveAll">Save All</Item>
          </Section>
        </ActionMenu>
      </div>
    </div>
  </Provider>
);

export const Default = Template.bind({});
