import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import {
  Provider,
  DropdownProps,
  ActionMenu,
  Item,
  Heading,
  Section,
} from '../src';
import { AlertTriangleFilled, Icon, PlusCircleOutline } from '../src/icon';

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
          align-items: flex-end;
          justify-content: baseline;
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
        <ActionMenu
          {...args}
          onAction={action => alert('You clicked on ' + action)}
          buttonSize="compact"
        >
          <Item key="one">One</Item>
          <Item key="two">Two</Item>
          <Item key="three">Three</Item>
        </ActionMenu>
        <ActionMenu
          {...args}
          onAction={action => alert('You clicked on ' + action)}
          buttonSize="compact"
          align="end"
        >
          <Item key="one">One</Item>
          <Item key="two">Two</Item>
          <Item key="three">Three</Item>
        </ActionMenu>
        <ActionMenu
          {...args}
          onAction={action => alert('You clicked on ' + action)}
          buttonSize="compact"
          align="end"
          buttonVariant="quiet"
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
        <ActionMenu onAction={action => alert(action)}>
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
      <div>
        <Heading>With Icons</Heading>
        <ActionMenu>
          <Section title="File">
            <Item key="new">
              <Icon svg={<PlusCircleOutline />} />
              New
            </Item>
            <Item key="open">
              <Icon svg={<AlertTriangleFilled />} />
              Triage
            </Item>
          </Section>
        </ActionMenu>
      </div>
      <div>
        <Heading>With Disabled</Heading>
        <ActionMenu disabledKeys={['new']}>
          <Section title="File">
            <Item key="new">
              <Icon svg={<PlusCircleOutline />} />
              New
            </Item>
            <Item key="open">
              <Icon svg={<AlertTriangleFilled />} />
              Triage
            </Item>
          </Section>
        </ActionMenu>
      </div>
      <div>
        <Heading>Fully Disabled</Heading>
        <ActionMenu
          icon={<Icon svg={<PlusCircleOutline />} />}
          isDisabled={true}
          buttonText={'Add Dashboard'}
        >
          <Section title="File">
            <Item key="new">
              <Icon svg={<PlusCircleOutline />} />
              New
            </Item>
            <Item key="open">
              <Icon svg={<AlertTriangleFilled />} />
              Triage
            </Item>
          </Section>
        </ActionMenu>
      </div>
    </div>
  </Provider>
);

export const Default = Template.bind({});
