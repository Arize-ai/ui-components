import React from 'react';
import { css } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import { Flex, Provider, RangeSlider, Switch } from '../src';
import { withDesign } from 'storybook-addon-designs';

const meta: Meta = {
  title: 'RangeSlider',
  component: RangeSlider,
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
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?type=design&node-id=3235%3A9316&mode=dev',
    },
  },
};

export default meta;

export const Gallery = () => {
  return (
    <Provider>
      <Flex direction="column">
        <RangeSlider label="Range" defaultValue={{ start: 12, end: 36 }} />
        <Switch>Send Emails</Switch>
      </Flex>
    </Provider>
  );
};
