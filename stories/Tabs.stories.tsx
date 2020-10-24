import React from 'react';
import { css } from '@emotion/core';
import { Meta, Story } from '@storybook/react';
import Tabs, { Props } from '../src/Tabs';

const { TabPane } = Tabs;

const meta: Meta = {
  title: 'Tabs',
  component: Tabs,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const tabContents = css`
  padding: 20px;
  color: white;
`;
const Template: Story<Props> = args => (
  <div style={{ width: 500 }}>
    <Tabs {...args}>
      <TabPane name="Tab 1" css={tabContents}>
        Tab 1 contents
      </TabPane>
      <TabPane name="Tab 2" css={tabContents}>
        Tab 2 contents
      </TabPane>
    </Tabs>
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
