import React from 'react';
import { css } from '@emotion/core';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { TabbedCard, TabbedCardProps, Tabs } from '../src';

const { TabPane } = Tabs;
const meta: Meta = {
  title: 'TabbedCard',
  component: TabbedCard,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?node-id=4%3A190',
    },
  },
};

export default meta;

const tabContents = css`
  padding: 16px;
  color: white;
`;

const Template: Story<TabbedCardProps> = args => (
  <div
    style={{ width: 500 }}
    css={css`
      & > .ac-card {
        margin-bottom: 8px;
      }
    `}
  >
    <TabbedCard {...args}>
      <Tabs>
        <TabPane name="Tab 1" css={tabContents}>
          Tab 1 contents
        </TabPane>
        <TabPane name="Tab 2" css={tabContents}>
          Tab 2 contents
        </TabPane>
      </Tabs>
    </TabbedCard>
    <TabbedCard title="Title" {...args}>
      <Tabs>
        <TabPane name="Tab 1" css={tabContents}>
          Tab 1 contents
        </TabPane>
        <TabPane name="Tab 2" css={tabContents}>
          Tab 2 contents
        </TabPane>
      </Tabs>
    </TabbedCard>
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
