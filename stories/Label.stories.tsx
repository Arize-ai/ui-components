import React from 'react';
import { css } from '@emotion/core';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { LabelGroup, Label, LabelProps } from '../src/label';
import {
  Icon,
  CheckmarkCircleOutline,
  AlertTriangleOutline,
  AlertCircleOutline,
} from '../src/icon';

const meta: Meta = {
  title: 'Label',
  component: Label,
  decorators: [withDesign],
  argTypes: {
    isOpen: {
      control: {
        type: 'radio',
        default: false,
      },
    },
    children: {
      control: {
        type: 'text',
        default: 'Label',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?node-id=76%3A505',
    },
  },
};

export default meta;

/**
 * A gallery of all the variants
 */
export const Gallery = () => (
  <div>
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
    <br />
    <LabelGroup>
      <Label color="blue" icon={<Icon svg={<CheckmarkCircleOutline />} />}>
        Info
      </Label>
      <Label color="green" icon={<Icon svg={<CheckmarkCircleOutline />} />}>
        Success
      </Label>
      <Label color="orange" icon={<Icon svg={<AlertTriangleOutline />} />}>
        Warning
      </Label>
      <Label color="red" icon={<Icon svg={<AlertCircleOutline />} />}>
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
  </div>
);

const Template: Story<LabelProps> = args => <Label {...args}>Label Text</Label>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
