import React from 'react';
import theme from '../src/theme';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

function Colors() {
  const colors = theme.colors;
  const colorsArray = [];

  Object.keys(theme.colors).forEach(name => {
    if (theme.colors[name]) {
      colorsArray.push(
        <div
          style={{
            marginBottom: '5px',
            marginTop: '5px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              backgroundColor: colors[name],
              width: '100px',
              height: '100px',
              marginRight: '10px',
              borderRadius: 3,
            }}
          />
          <div style={{ userSelect: 'none' }}>{colors[name]}</div>
          <div>{name}</div>
        </div>
      );
    }
  });

  return (
    <ul
      style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        color: 'rgb(153,153,153)',
        display: 'flex',
        width: 1000,
        flexWrap: 'wrap',
      }}
    >
      {colorsArray.map((el, i) => (
        <li key={i}>{el}</li>
      ))}
    </ul>
  );
}

const meta: Meta = {
  title: 'Colors',
  component: Colors,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?node-id=2%3A1499',
    },
  },
};

export default meta;

const Template: Story = args => <Colors />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
