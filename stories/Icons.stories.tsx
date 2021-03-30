import React from 'react';
import * as Icons from '../src/icon/Icons';
import { Icon } from '../src/icon';
import { Meta, Story } from '@storybook/react';
import theme from '../src/theme';

function IconsGrid() {
  const iconsArray = [];

  Object.keys(Icons).forEach(name => {
    if (Icons[name]) {
      const Svg = Icons[name];
      iconsArray.push(
        <div
          style={{
            margin: '5px',
            display: 'flex',
            flexDirection: 'column',
            color: 'white',
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            background: theme.colors.dark4,
            borderRadius: 3,
          }}
          title={name}
        >
          <Icon svg={<Svg />} />
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
      {iconsArray.map((el, i) => (
        <li key={i}>{el}</li>
      ))}
    </ul>
  );
}

const meta: Meta = {
  title: 'Icons',
  component: IconsGrid,
};

export default meta;

const Template: Story = args => <IconsGrid />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
