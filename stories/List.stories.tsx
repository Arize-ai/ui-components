import React from 'react';
import { css } from '@emotion/react';
import { Meta, Story } from '@storybook/react';

import { Card, Text, List, ListItem, ListProps } from '../src';
import { ThemeSplitView } from './components/ThemeSplitView';

const meta: Meta = {
  title: 'List',
  component: List,

  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ListProps> = args => (
  <ThemeSplitView>
    <Card title="Model Info" bodyStyle={{ padding: 0 }} style={{ width: 300 }}>
      <List {...args}>
        {Array.from('12345').map(num => (
          <ListItem key={num}>
            <div
              css={css`
                display: flex;
                flex-direction: column;
              `}
            >
              <Text textSize="medium" weight="heavy">{`List Item ${num}`}</Text>
              <Text textSize="small" color="text-700">{`Subtext`}</Text>
            </div>
          </ListItem>
        ))}
      </List>
    </Card>
  </ThemeSplitView>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

const WithLinksTemplate: Story<ListProps> = args => (
  <ThemeSplitView>
    <Card title="Model Links" bodyStyle={{ padding: 0 }} style={{ width: 300 }}>
      <List {...args} noPadding={true}>
        {Array.from('12345').map(num => (
          <ListItem key={num}>
            <a
              css={css`
                display: flex;
                flex-direction: column;
                padding: 16px;
                text-decoration: none;
                & > .list-title {
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
              `}
              href="#"
            >
              <Text
                textSize="medium"
                weight="heavy"
                className="list-title"
              >{`Really Really Really Really Really Long List Item ${num}`}</Text>
              <Text textSize="small" color="text-700">{`Subtext`}</Text>
            </a>
          </ListItem>
        ))}
      </List>
    </Card>
  </ThemeSplitView>
);

const Interacting: Story<ListProps> = args => (
  <ThemeSplitView>
    <Card title="Model Info" bodyStyle={{ padding: 0 }} style={{ width: 300 }}>
      <List {...args}>
        {Array.from('12345').map(num => (
          <ListItem key={num} interactive={Number(num) % 2 === 0}>
            <div
              css={css`
                display: flex;
                flex-direction: column;
              `}
            >
              <Text textSize="medium" weight="heavy">{`List Item ${num}`}</Text>
              <Text textSize="small" color="text-700">{`Subtext`}</Text>
            </div>
          </ListItem>
        ))}
      </List>
    </Card>
  </ThemeSplitView>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const WithLinks = WithLinksTemplate.bind({});
export const WithDifferentInteractive = Interacting.bind({});
