import React from 'react';
import { css } from '@emotion/core';
import { Meta, Story } from '@storybook/react';
import { Card, Text, List, ListItem, ListProps } from '../src';
import { withDesign } from 'storybook-addon-designs';

const meta: Meta = {
  title: 'List',
  component: List,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?node-id=357%3A1489',
    },
  },
};

export default meta;

const Template: Story<ListProps> = args => (
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
            <Text size="medium" weight="heavy">{`List Item ${num}`}</Text>
            <Text size="small" color="white70">{`Subtext`}</Text>
          </div>
        </ListItem>
      ))}
    </List>
  </Card>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
