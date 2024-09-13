import React from 'react';
import { Meta } from '@storybook/react';

import { Breadcrumbs, Item } from '../src';
import { ThemeToggleWrap } from './components/ThemeToggleWrap';

const meta: Meta = {
  title: 'Breadcrumbs (Beta)',
  component: Breadcrumbs,

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
    <ThemeToggleWrap>
      <Breadcrumbs>
        <Item key="home">Home</Item>
        <Item key="trendy">Trendy</Item>
        <Item key="march 2020 assets">March 2020 Assets</Item>
      </Breadcrumbs>
    </ThemeToggleWrap>
  );
};
