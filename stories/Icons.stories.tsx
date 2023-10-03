import React, { ReactElement } from 'react';
import { Icon, Icons, Tooltip, TooltipTrigger, TriggerWrap } from '../src';
import { Meta, Story } from '@storybook/react';

function IconsGrid() {
  const iconsArray: ReactElement[] = [];

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
            borderRadius: 3,
          }}
          title={name}
        >
          <TooltipTrigger>
            <TriggerWrap>
              <Icon svg={<Svg />} />
            </TriggerWrap>
            <Tooltip>{name}</Tooltip>
          </TooltipTrigger>
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
