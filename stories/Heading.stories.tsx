import React from 'react';
import { css } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import { Heading, HeadingProps } from '../src';

const meta: Meta = {
  title: 'Heading',
  component: Heading,
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

const Template: Story<HeadingProps> = args => (
  <ul
    css={css`
      list-style: none;
    `}
  >
    {[1, 2, 3, 4, 5, 6].map(level => {
      return (
        <li
          css={css`
            margin: 12px 0;
          `}
        >
          <Heading
            level={level as any}
            weight="heavy"
          >{`Heading ${level} Heavy`}</Heading>
          <Heading level={level as any}>{`Heading ${level}`}</Heading>
        </li>
      );
    })}
  </ul>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
