import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card, Form, Provider, TextField, View, ViewProps } from '../src';
import { Icon, PlusCircleOutline, MinusCircleOutline } from '../src/icon';
import { withDesign } from 'storybook-addon-designs';
import { css } from '@emotion/react';

const meta: Meta = {
  title: 'View',
  component: View,
  decorators: [withDesign],
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    padding: {
      control: {
        type: 'select',
        options: ['static-size-50', 'static-size-100', 'static-size-200'],
      },
    },
  },
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: '',
    },
  },
};

export default meta;

const Template = args => {
  return (
    <Provider>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
        `}
      >
        <View {...args}>This is a View</View>
      </div>
    </Provider>
  );
};

export const Gallery = args => {
  return (
    <Provider>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
        `}
      >
        <Card title="This is a card" variant="compact">
          <View
            backgroundColor="light"
            padding="static-size-100"
            borderRadius="medium"
            borderColor="light"
          >
            <Form>
              <TextField />
            </Form>
          </View>
        </Card>
      </div>
    </Provider>
  );
};

export const Default = Template.bind({});
