import React from 'react';
import { css } from '@emotion/react';
import { Meta, Story } from '@storybook/react';

import { Breadcrumbs, Item, Provider } from '../src';
import { withDesign } from 'storybook-addon-designs';

const meta: Meta = {
  title: 'Breadcrumbs (Beta)',
  component: Breadcrumbs,
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

export const Gallery = () => {
  return (
    <Provider>
      <Breadcrumbs>
        <Item key="home">Home</Item>
        <Item key="trendy">Trendy</Item>
        <Item key="march 2020 assets">March 2020 Assets</Item>
      </Breadcrumbs>
    </Provider>
  );
};
