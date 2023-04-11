import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Text,
  Button,
  View,
  ViewProps,
  Picker,
  Item,
  Provider,
  ButtonGroup,
  Card,
} from '../src';
import { Icon, PlusCircleOutline, MinusCircleOutline } from '../src/icon';
import { withDesign } from 'storybook-addon-designs';
import { css } from '@emotion/react';

const plusIcon = <Icon svg={<PlusCircleOutline />} />;
const minusIcon = <Icon svg={<MinusCircleOutline />} />;

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

const viewStyle = { width: 800, height: 200, margin: '10px' };

export const Gallery = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
      `}
    >
      <View title="Title" style={viewStyle} />
      <View
        title={
          <div
            css={css`
              display: flex;
              align-items: center;
              gap: 8px;
            `}
          >
            <Text>Metric</Text>
            <Provider>
              <Picker>
                <Item>First Item</Item>
              </Picker>
            </Provider>
          </div>
        }
        titleExtra={
          <ButtonGroup aria-label="some group">
            <Button variant="default" icon={plusIcon} />
            <Button variant="default" icon={minusIcon} />
          </ButtonGroup>
        }
        style={viewStyle}
      />
      <View
        title="Title"
        titleExtra={
          <Button variant="default" size="normal">
            Create Dashboard
          </Button>
        }
        style={viewStyle}
      />
    </div>
  );
};

const Template: Story<ViewProps> = args => <View {...args} />;

export const Default = Template.bind({});
