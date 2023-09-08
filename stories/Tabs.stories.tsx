import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Tabs, TabsProps } from '../src/tabs/Tabs';
import { Heading } from '../src/content';
import { Button, CloseOutline, Counter, Icon, Provider } from '../src';

const { TabPane } = Tabs;

const meta: Meta = {
  title: 'Tabs',
  component: Tabs,
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
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?node-id=20%3A2',
    },
  },
};

export default meta;

const tabContentCSS = css`
  padding: 20px;
  color: white;
`;
const Template: Story<TabsProps> = args => (
  <div style={{ width: 500 }}>
    <Tabs {...args}>
      <TabPane name="Tab 1" tabListItemProps={{ 'data-testid': 'first tab' }}>
        Tab 1 contents
      </TabPane>
      <TabPane name="Tab 2">Tab 2 contents</TabPane>
    </Tabs>
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

const LazyLoadingTabContents = ({ isSelected }: { isSelected: boolean }) => {
  const [content, setContent] = useState<string>('contents');
  useEffect(() => {
    if (isSelected) {
      setContent('Loading...');
      setTimeout(() => {
        setContent('contents');
      }, 1000);
    }
  }, [isSelected]);
  return <span css={tabContentCSS}>{content}</span>;
};

export const LazyLoading: Story<TabsProps> = args => (
  <div style={{ width: 500 }} css={tabContentCSS}>
    <Tabs {...args}>
      <TabPane name="Tab 1">
        {({ isSelected }) => <LazyLoadingTabContents isSelected={isSelected} />}
      </TabPane>
      <TabPane name="Tab 2">
        {({ isSelected }) => <LazyLoadingTabContents isSelected={isSelected} />}
      </TabPane>
    </Tabs>
  </div>
);

export const WithExtra: Story<TabsProps> = args => (
  <Provider>
    <div style={{ width: 500 }} css={tabContentCSS}>
      <Tabs
        {...args}
        extra={
          <Button
            variant="default"
            size="compact"
            icon={<Icon svg={<CloseOutline />} />}
          />
        }
      >
        <TabPane name="Tab 1" extra={<Counter>12</Counter>}>
          {({ isSelected }) => (
            <LazyLoadingTabContents isSelected={isSelected} />
          )}
        </TabPane>
        <TabPane name="Tab 2" extra={<Counter variant="danger">23</Counter>}>
          {({ isSelected }) => (
            <LazyLoadingTabContents isSelected={isSelected} />
          )}
        </TabPane>
        <TabPane name="Tab 3" extra={<Counter>2</Counter>}>
          {({ isSelected }) => (
            <LazyLoadingTabContents isSelected={isSelected} />
          )}
        </TabPane>
      </Tabs>
    </div>
  </Provider>
);

export const WithHidden: Story<TabsProps> = args => (
  <Provider>
    <div style={{ width: 500 }} css={tabContentCSS}>
      <Tabs {...args}>
        <TabPane name="Tab 1" extra={<Counter>12</Counter>} hidden={true}>
          Tab 1
        </TabPane>
        <TabPane
          name="Tab 2"
          hidden={true}
          extra={<Counter variant="danger">23</Counter>}
        >
          Tab 2
        </TabPane>
        {null}
        <TabPane name="Tab 3">Tab 3</TabPane>
        <TabPane name="Tab 4">Tab 4</TabPane>
      </Tabs>
    </div>
  </Provider>
);

export const Gallery: Story<TabsProps> = args => (
  <div style={{ width: 500 }}>
    <section>
      <Heading>Horizontal</Heading>
      <Tabs orientation="horizontal">
        <TabPane name="Tab 1">
          {({ isSelected }) => (
            <LazyLoadingTabContents isSelected={isSelected} />
          )}
        </TabPane>
        <TabPane name="Tab 2">
          {({ isSelected }) => (
            <LazyLoadingTabContents isSelected={isSelected} />
          )}
        </TabPane>
      </Tabs>
    </section>
    <section>
      <Heading>Vertical</Heading>
      <Tabs orientation="vertical">
        <TabPane name="Tab 1">
          {({ isSelected }) => (
            <LazyLoadingTabContents isSelected={isSelected} />
          )}
        </TabPane>
        <TabPane name="Tab 2">
          {({ isSelected }) => (
            <LazyLoadingTabContents isSelected={isSelected} />
          )}
        </TabPane>
      </Tabs>
    </section>
  </div>
);
Default.args = {};
