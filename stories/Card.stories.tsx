import React from 'react';
import { css } from '@emotion/core';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Card, CardProps, TabbedCard } from '../src/card';
import { Tabs } from '../src/tabs';
import { Button } from '../src/button';
import InfoTip from './components/InfoTip';

const { TabPane } = Tabs;

const meta: Meta = {
  title: 'Card',
  component: Card,
  decorators: [withDesign],
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?node-id=3%3A371',
    },
  },
};

export default meta;

const cardStyle = { width: 407, height: 198, margin: '8px' };

/**
 * Gallery of all the variants
 */
export const Gallery = () => (
  <div
    css={css`
      display: flex;
      flex-wrap: wrap;
    `}
  >
    <Card title="Title" style={cardStyle}>
      {''}
    </Card>
    <Card
      title="Title"
      subTitle="Subtext area"
      extra={<Button variant="default">Create Dashboard</Button>}
      style={cardStyle}
    >
      {''}
    </Card>
    <Card title="Title" subTitle="Subtext area" style={cardStyle}>
      {''}
    </Card>
    <Card
      title="Title"
      subTitle="Subtext area"
      style={cardStyle}
      extra={<Button variant="default">Create Dashboard</Button>}
    >
      {''}
    </Card>
    <Card
      title="Title"
      subTitle="Subtext area"
      style={cardStyle}
      extra={<Button variant="default">Create Dashboard</Button>}
      titleExtra={<InfoTip>Create Dashboard Info Bubble</InfoTip>}
    >
      {''}
    </Card>
    <Card title="Collapsible Title" style={cardStyle} collapsible>
      {''}
    </Card>
    <Card
      title="Collapsible Title"
      style={cardStyle}
      extra={<Button variant="default">Create Dashboard</Button>}
      collapsible
    >
      {''}
    </Card>
    <Card
      title="Collapsible Title"
      style={cardStyle}
      extra={<Button variant="default">Create Dashboard</Button>}
      titleExtra={<InfoTip>Create Dashboard Info Bubble</InfoTip>}
      collapsible
    >
      {''}
    </Card>
    <Card
      title="Collapsible Title"
      subTitle="Subtext area"
      style={cardStyle}
      extra={<Button variant="default">Create Dashboard</Button>}
      collapsible
    >
      {''}
    </Card>
    <Card
      title="Collapsible Title"
      subTitle="Subtext area"
      style={cardStyle}
      extra={<Button variant="default">Create Dashboard</Button>}
      titleExtra={<InfoTip>Create Dashboard Info Bubble</InfoTip>}
      collapsible
    >
      {''}
    </Card>
    <TabbedCard title="Title" style={cardStyle}>
      <Tabs>
        <TabPane name="Tab 1">{null}</TabPane>
        <TabPane name="Tab 2">{null}</TabPane>
      </Tabs>
    </TabbedCard>
    <TabbedCard
      title="Title"
      extra={<Button variant="default">Create Dashboard</Button>}
      style={cardStyle}
    >
      <Tabs>
        <TabPane name="Tab 1">{null}</TabPane>
        <TabPane name="Tab 2">{null}</TabPane>
      </Tabs>
    </TabbedCard>
    <TabbedCard style={cardStyle}>
      <Tabs>
        <TabPane name="Tab 1">{null}</TabPane>
        <TabPane name="Tab 2">{null}</TabPane>
      </Tabs>
    </TabbedCard>
  </div>
);

const Template: Story<CardProps> = args => (
  <Card
    title="Title"
    subTitle="Subtext area"
    style={{ width: 400, height: 200 }}
    {...args}
  >
    Content goes here
  </Card>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  title: 'Title goes here',
};

export const WithExtra = Template.bind({});

WithExtra.args = { extra: <Button variant="primary">Create Dashboard</Button> };
