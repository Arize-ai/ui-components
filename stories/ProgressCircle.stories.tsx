import React from 'react';
import { css } from '@emotion/react';
import { Meta, Story } from '@storybook/react';

import { ProgressCircle, ProgressCircleProps } from '../src';
import { Icon, PlusCircleOutline } from '../src/icon';
import { ThemeSplitView } from './components/ThemeSplitView';

const plusIcon = <Icon svg={<PlusCircleOutline />} />;

const meta: Meta = {
  title: 'ProgressCircle',
  component: ProgressCircle,

  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Gallery = () => {
  return (
    <ThemeSplitView>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: center;
        `}
      >
        <ProgressCircle aria-label="Loading…" size="S" isIndeterminate />
        <ProgressCircle aria-label="Loading…" size="M" isIndeterminate />
        <ProgressCircle aria-label="Loading…" size="L" isIndeterminate />
        <ProgressCircle aria-label="Loading…" size="S" value={30} />
        <ProgressCircle aria-label="Loading…" size="M" value={60} />
        <ProgressCircle aria-label="Loading…" size="L" value={80} />
      </div>
    </ThemeSplitView>
  );
};
const Template: Story<ProgressCircleProps> = args => (
  <ProgressCircle {...args} />
);

export const Default = Template.bind({});
