import React from 'react';

import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Flex, Heading, Provider, View } from '../src';

const meta: Meta = {
  title: 'Flex',
  component: Flex,
  decorators: [withDesign],
};

export default meta;

export const Gallery: Story = () => (
  <Provider>
    <Heading>Column</Heading>
    <Flex gap="size-100" direction="column" width="size-2000">
      <View backgroundColor="light" height="size-800" />
      <View backgroundColor="light" height="size-800" />
      <View backgroundColor="light" height="size-800" />
    </Flex>
    <Heading>Row</Heading>
    <Flex gap="size-100" direction="row" height="size-2000">
      <View backgroundColor="light" width="size-800" />
      <View backgroundColor="light" width="size-800" />
      <View backgroundColor="light" width="size-800" />
    </Flex>
  </Provider>
);
