import React from 'react';
import { css } from '@emotion/core';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import {
  Card,
  CardProps,
  TabbedCard,
  Tabs,
  DialogCard,
  ButtonGroup,
  Text,
  List,
  ListItem,
} from '../src';
import Button from '../src/Button';

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
 * Gallery of all the varients
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

    {/* with footer */}
    <Card
      title="Title"
      footer={
        <ButtonGroup>
          <Button variant="default" onClick={close}>
            <Text>Button 1</Text>
          </Button>
          <Button variant="primary" onClick={close}>
            <Text>Button 2</Text>
          </Button>
        </ButtonGroup>
      }
      style={cardStyle}
    >
      {''}
    </Card>
    {/* with aside */}
    <Card
      title="Title"
      aside={
        <List>
          <ListItem>Item One</ListItem>
          <ListItem>Item Two</ListItem>
          <ListItem>Item Three</ListItem>
        </List>
      }
      style={cardStyle}
    >
      {''}
    </Card>
    {/* aside with footer */}
    <Card
      title="Title"
      footer={
        <ButtonGroup>
          <Button variant="default" onClick={close}>
            <Text>Another Button</Text>
          </Button>
          <Button variant="primary" onClick={close}>
            <Text>Primary Button</Text>
          </Button>
        </ButtonGroup>
      }
      aside={
        <List>
          <ListItem>Item One</ListItem>
          <ListItem>Item Two</ListItem>
          <ListItem>Item Three</ListItem>
          <ListItem>Item One</ListItem>
          <ListItem>Item Two</ListItem>
          <ListItem>Item Three</ListItem>
        </List>
      }
      style={cardStyle}
    >
      <Text>
        Here is the body of the modal. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consectetur vel odio in condimentum. Aliquam Here
        is the body of the modal. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consectetur vel odio in condimentum. AliquamHere
        is the body of the modal. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consectetur vel odio in condimentum. AliquamHere
        is the body of the modal. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consectetur vel odio in condimentum. Aliquam
      </Text>
    </Card>
  </div>
);

export const DialogCardDefault: Story<CardProps> = args => (
  <DialogCard
    title="Title"
    {...args}
    onClose={() => console.log('default onclose event')}
    style={{ width: 400, height: 200 }}
  >
    <Text>Content in here</Text>
  </DialogCard>
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

Default.args = {};

export const WithExtra = Template.bind({});

WithExtra.args = { extra: <Button variant="primary">Create Dashboard</Button> };
