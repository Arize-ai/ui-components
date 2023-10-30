import React, { ReactElement } from 'react';
import {
  Flex,
  Icon,
  Icons,
  Provider,
  Text,
  Tooltip,
  TooltipTrigger,
  TriggerWrap,
  View,
} from '../src';
import { Meta, Story } from '@storybook/react';
import { ThemeToggleWrap } from './components/ThemeToggleWrap';

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
            gap: '8px',
            width: 120,
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--ac-global-color-grey-800)',
            borderRadius: 3,
          }}
          title={name}
        >
          <View
            width="size-400"
            height="size-400"
            backgroundColor="light"
            borderRadius="medium"
          >
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              height="100%"
            >
              <TooltipTrigger>
                <TriggerWrap>
                  <Icon svg={<Svg />} />
                </TriggerWrap>
                <Tooltip>{name}</Tooltip>
              </TooltipTrigger>
            </Flex>
          </View>
          <Text color="text-700" textSize="small">
            {name}
          </Text>
        </div>
      );
    }
  });

  return (
    <ThemeToggleWrap>
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
    </ThemeToggleWrap>
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
