import React from 'react';
import { css } from '@emotion/react';
import { Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import {
  Dropdown,
  FieldColorDesignation,
  Item,
  ListBox,
  Picker,
  TextArea,
  TextField,
} from '../src';
import { ThemeSplitView } from './components/ThemeSplitView';

const meta: Meta = {
  title: 'FieldColorDesignation',
  component: FieldColorDesignation,
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
    <ThemeSplitView>
      <ul
        css={css`
          & > li {
            margin-bottom: 8px;
          }
        `}
      >
        <li>
          <FieldColorDesignation color={'designationTurquoise'}>
            <TextField addonBefore="metric" aria-label="Metric" />
          </FieldColorDesignation>
        </li>
        <li>
          <FieldColorDesignation color={'designationPurple'}>
            <TextField
              addonBefore="metric"
              aria-label="Metric"
              value="12/21/2020"
              isReadOnly
            />
          </FieldColorDesignation>
        </li>
        <li>
          <FieldColorDesignation color={'designationTurquoise'}>
            <Picker
              aria-label="With Addon"
              addonBefore={'Frequency'}
              selectedKey={'rarely'}
            >
              <Item key="rarely">Rarely</Item>
              <Item key="sometimes">Sometimes</Item>
              <Item key="always">Always</Item>
            </Picker>
          </FieldColorDesignation>
        </li>
        <li>
          <FieldColorDesignation color={'designationTurquoise'}>
            <TextArea aria-label="textfield" />
          </FieldColorDesignation>
        </li>
        <li>
          <FieldColorDesignation color={'designationTurquoise'}>
            <Dropdown
              menu={
                <ListBox
                  style={{ width: 200 }}
                  aria-label="Pick your favorite"
                  selectionMode="multiple"
                >
                  <Item key="Aardvark">Aardvark</Item>
                  <Item key="Kangaroo">Kangaroo</Item>
                  <Item key="Snake">Snake</Item>
                  <Item key="Danni">Danni</Item>
                  <Item key="Devon">Devon</Item>
                  <Item key="Ross">Ross</Item>
                </ListBox>
              }
            >
              Animals
            </Dropdown>
          </FieldColorDesignation>
        </li>
      </ul>
    </ThemeSplitView>
  );
};
