import React from 'react';
import { Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Form, ComboBox, Item } from '../src';
import { ThemeSplitView } from './components/ThemeSplitView';

const meta: Meta = {
  title: 'ComboBox',
  component: ComboBox,
  decorators: [withDesign],
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
  <ThemeSplitView>
    <Form>
      <ComboBox label="Favorite Animal">
        <Item key="red panda">Red Panda</Item>
        <Item key="cat">Cat</Item>
        <Item key="dog">Dog</Item>
        <Item key="aardvark">Aardvark</Item>
        <Item key="kangaroo">Kangaroo</Item>
        <Item key="snake">Snake</Item>
      </ComboBox>
    </Form>
  </ThemeSplitView>
);
