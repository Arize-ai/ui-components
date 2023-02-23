import React from 'react';
import { css } from '@emotion/react';
import { Meta } from '@storybook/react';
import {
  FieldColorDesignation,
  Item,
  Picker,
  Provider,
  TextArea,
  TextField,
} from '../src';
import { withDesign } from 'storybook-addon-designs';

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
    <Provider>
      <ul
        css={css`
          & > li {
            margin-bottom: 8px;
          }
        `}
      >
        <li>
          <FieldColorDesignation color={'lightgreen'}>
            <TextField addonBefore="metric" aria-label="Metric" />
          </FieldColorDesignation>
        </li>
        <li>
          <FieldColorDesignation color={'lightyellow'}>
            <TextField
              addonBefore="metric"
              aria-label="Metric"
              value="12/21/2020"
              isReadOnly
            />
          </FieldColorDesignation>
        </li>
        <li>
          <FieldColorDesignation color={'turquoise'}>
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
          <FieldColorDesignation color={'orange'}>
            <TextArea aria-label="textfield" />
          </FieldColorDesignation>
        </li>
      </ul>
    </Provider>
  );
};
