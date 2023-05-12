import React from 'react';
import { Meta } from '@storybook/react';
import {
  Card,
  Provider,
  TextField,
  View,
  Text,
  Picker,
  Item,
  Button,
  ButtonGroup,
} from '../src';
import {
  Icon,
  PlusCircleOutline,
  MinusCircleOutline,
  ArrowIosForwardOutline,
  ArrowIosBackOutline,
} from '../src/icon';
import { withDesign } from 'storybook-addon-designs';
import { css } from '@emotion/react';

const plusIcon = <Icon svg={<PlusCircleOutline />} />;
const minusIcon = <Icon svg={<MinusCircleOutline />} />;
const rightIcon = <Icon svg={<ArrowIosForwardOutline />} />;
const leftIcon = <Icon svg={<ArrowIosBackOutline />} />;

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
          flex-direction: column;
          gap: 8px;
        `}
      >
        <Card title="This is a card" variant="compact">
          <View
            backgroundColor="light"
            padding="static-size-100"
            borderRadius="medium"
            borderColor="light"
            {...args}
          >
            <TextField />
          </View>
        </Card>
        <Card title="This is a card" variant="compact">
          <View {...args}>
            <div
              css={css`
                display: flex;
                align-items: center;
                justify-content: space-between;
              `}
            >
              <Picker addonBefore={'Metric'}>
                <Item>First Item</Item>
              </Picker>
              <ButtonGroup aria-label="some group">
                <Button variant="default" icon={leftIcon} />
                <Button variant="default" icon={minusIcon} />
                <Button variant="default" icon={plusIcon} />
                <Button variant="default" icon={rightIcon} />
              </ButtonGroup>
            </div>
          </View>
        </Card>
        <View
          backgroundColor="light"
          borderWidth="thin"
          padding="static-size-100"
          borderRadius="medium"
          borderColor="light"
          {...args}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: space-between;
            `}
          >
            <Picker addonBefore={'Metric'}>
              <Item>First Item</Item>
            </Picker>
            <ButtonGroup aria-label="some group">
              <Button variant="default" icon={leftIcon} />
              <Button variant="default" icon={minusIcon} />
              <Button variant="default" icon={plusIcon} />
              <Button variant="default" icon={rightIcon} />
            </ButtonGroup>
          </div>
        </View>
        <View
          backgroundColor="light"
          borderWidth="thin"
          padding="static-size-100"
          borderRadius="medium"
          borderColor="light"
          {...args}
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </div>
    </Provider>
  );
};

export const Default = Template.bind({});
