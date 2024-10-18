import React from 'react';
import { Meta, Story } from '@storybook/react';

import { EmptyGraphic, EmptyGraphicProps } from '../src';
import { ThemeToggleWrap } from './components/ThemeToggleWrap';

const meta: Meta = {
  title: 'Empty',
  component: EmptyGraphic,

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

const graphics: EmptyGraphicProps['graphicKey'][] = [
  'documents',
  'not found',
  'error',
];
export const Gallery = () => {
  return (
    <ThemeToggleWrap>
      <ul>
        {graphics.map((graphicKey, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <EmptyGraphic graphicKey={graphicKey} size="S" />
            <EmptyGraphic graphicKey={graphicKey} size="M" />
            <EmptyGraphic graphicKey={graphicKey} size="L" />
          </li>
        ))}
      </ul>
    </ThemeToggleWrap>
  );
};

const Template: Story<EmptyGraphicProps> = args => <EmptyGraphic {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
