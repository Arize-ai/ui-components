import React from 'react';
import { css } from '@emotion/core';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Card, CardProps, TabbedCard } from '../src/card';
import { Tabs } from '../src/tabs';
import { Button } from '../src/button';
import InfoTip from './components/InfoTip';
import { Heading } from '../src';

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

const cardStyle = { width: 400, height: 200, margin: '10px' };

/**
 * Gallery of all the variants
 */
const GalleryCards = (props: { variant: CardProps['variant'] }) => {
  const buttonSize = props.variant === 'default' ? 'normal' : 'compact';
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
      `}
    >
      <Card title="Title" style={cardStyle} {...props}>
        {''}
      </Card>
      <Card
        title="Title"
        subTitle="Subtext area"
        extra={
          <Button variant="default" size={buttonSize}>
            Create Dashboard
          </Button>
        }
        style={cardStyle}
        {...props}
      >
        {''}
      </Card>
      <Card title="Title" subTitle="Subtext area" style={cardStyle} {...props}>
        {''}
      </Card>
      <Card
        title="Title"
        subTitle="Subtext area"
        {...props}
        style={cardStyle}
        extra={
          <Button variant="default" size={buttonSize}>
            Create Dashboard
          </Button>
        }
      >
        {''}
      </Card>
      <Card
        title="Title"
        subTitle="Subtext area"
        style={cardStyle}
        {...props}
        extra={
          <Button variant="default" size={buttonSize}>
            Create Dashboard
          </Button>
        }
        titleExtra={<InfoTip>Create Dashboard Info Bubble</InfoTip>}
      >
        {''}
      </Card>
      <TabbedCard title="Title" style={cardStyle} {...props}>
        <Tabs>
          <TabPane name="Tab 1">{null}</TabPane>
          <TabPane name="Tab 2">{null}</TabPane>
        </Tabs>
      </TabbedCard>
      <TabbedCard
        title="Title"
        extra={
          <Button variant="default" size={buttonSize}>
            Create Dashboard
          </Button>
        }
        {...props}
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
      <Card title="Collapsible Title" style={cardStyle} collapsible {...props}>
        {''}
      </Card>
      <Card
        title="Collapsible Title"
        {...props}
        style={cardStyle}
        extra={
          <Button variant="default" size={buttonSize}>
            Create Dashboard
          </Button>
        }
        collapsible
      >
        {''}
      </Card>
      <Card
        title="Collapsible Title"
        {...props}
        style={cardStyle}
        extra={
          <Button variant="default" size={buttonSize}>
            Create Dashboard
          </Button>
        }
        titleExtra={<InfoTip>Create Dashboard Info Bubble</InfoTip>}
        collapsible
      >
        {''}
      </Card>
      <Card
        title="Collapsible Title"
        subTitle="Subtext area"
        style={cardStyle}
        extra={
          <Button variant="default" size={buttonSize}>
            Create Dashboard
          </Button>
        }
        {...props}
        collapsible
      >
        {''}
      </Card>
      <Card
        title="Collapsible Title"
        subTitle="Subtext area"
        style={cardStyle}
        extra={
          <Button variant="default" size={buttonSize}>
            Create Dashboard
          </Button>
        }
        titleExtra={<InfoTip>Create Dashboard Info Bubble</InfoTip>}
        {...props}
        collapsible
      >
        {''}
      </Card>
    </div>
  );
};

export const Gallery = () => {
  return (
    <div>
      <section>
        <Heading>Default variant</Heading>
        <GalleryCards variant="default" />
      </section>
      <section>
        <Heading>Compact variant</Heading>
        <GalleryCards variant="compact" />
      </section>
    </div>
  );
};

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
