import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { css } from '@emotion/react';
import {
  Provider,
  CompactSearchField,
  CompactSearchFieldProps,
  Button,
  Card,
} from '../src';
import { Icon, SearchOutline, Settings } from '../src/icon';

const meta: Meta = {
  title: 'CompactSearchField',
  component: CompactSearchField,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<CompactSearchFieldProps> = args => {
  const [search, setSearch] = useState('');
  return (
    <Provider>
      <Card
        title="hello"
        extra={
          <div
            css={css`
              display: flex;
              & > * + * {
                margin-left: 8px;
              }
            `}
          >
            <Button
              variant="default"
              icon={<Icon svg={<Settings />} />}
            ></Button>
            <CompactSearchField
              {...args}
              placeholder="Search..."
              onChange={e => setSearch(e)}
            />
          </div>
        }
      >
        {`Search for: ${search}`}
      </Card>
    </Provider>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
