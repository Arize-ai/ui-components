import React from 'react';
import { Meta, Story } from '@storybook/react';

import { LabelGroup, Label, LabelProps } from '../src/label';
import {
  Icon,
  CheckmarkCircleOutline,
  AlertTriangleOutline,
  AlertCircleOutline,
} from '../src/icon';
import { Heading } from '../src';

import { globalColors } from './constants';
import { ThemeToggleWrap } from './components/ThemeToggleWrap';

const meta: Meta = {
  title: 'Label',
  component: Label,

  argTypes: {
    children: {
      control: {
        type: 'text',
        default: 'Label',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

/**
 * A gallery of all the variants
 */
export const Gallery = () => (
  <ThemeToggleWrap>
    <LabelGroup>
      <Label color="white">Label</Label>
      <Label color="blue">Label</Label>
      <Label color="green">Label</Label>
      <Label color="orange">Label</Label>
      <Label color="red">Label</Label>
      <Label color="purple">Label</Label>
      <Label color="gray">Label</Label>
    </LabelGroup>
    <br />
    <LabelGroup>
      <Label color="white" shape="badge">
        white
      </Label>
      <Label color="blue" shape="badge">
        blue
      </Label>
      <Label color="green" shape="badge">
        green
      </Label>
      <Label color="orange" shape="badge">
        orange
      </Label>
      <Label color="red" shape="badge">
        red
      </Label>
      <Label color="purple" shape="badge">
        purple
      </Label>
      <Label color="gray" shape="badge">
        gray
      </Label>
    </LabelGroup>
    <br />
    <br />
    <LabelGroup>
      <Label color="info" icon={<Icon svg={<CheckmarkCircleOutline />} />}>
        Info
      </Label>
      <Label color="success" icon={<Icon svg={<CheckmarkCircleOutline />} />}>
        Success
      </Label>
      <Label color="warning" icon={<Icon svg={<AlertTriangleOutline />} />}>
        Warning
      </Label>
      <Label color="danger" icon={<Icon svg={<AlertCircleOutline />} />}>
        Danger
      </Label>
    </LabelGroup>
    <br />
    <br />
    <LabelGroup>
      <Label
        color="red"
        icon={<Icon svg={<AlertCircleOutline />} />}
        onClick={() => alert('hello world')}
      >
        Button Label
      </Label>
    </LabelGroup>
    <br />
    <br />
    <Heading>Global Colors</Heading>
    <LabelGroup>
      {globalColors.map(color => (
        <>
          {color.endsWith('-100') ? <br /> : null}
          <Label color={color}>{color}</Label>
        </>
      ))}
    </LabelGroup>
  </ThemeToggleWrap>
);

const Template: Story<LabelProps> = args => <Label {...args}>Label Text</Label>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
