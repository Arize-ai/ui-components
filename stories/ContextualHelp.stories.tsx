import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import {
  Form,
  Provider,
  Placement,
  ContextualHelp,
  Text,
  Heading,
  theme,
  Content,
  TextField,
} from '../src';

import css from '@emotion/css';

const placements: Placement[] = [
  'start',
  'end',
  'right',
  'left',
  'top',
  'bottom',
  'top start',
  'top end',
  'bottom start',
  'bottom end',
];

const meta: Meta = {
  title: 'ContextualHelp',
  component: ContextualHelp,
  decorators: [withDesign],
  argTypes: {
    placement: {
      control: {
        type: 'select',
        options: placements,
      },
    },
  },
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?node-id=503%3A0',
    },
  },
};

export default meta;

export const Gallery = () => (
  <Provider>
    <section>
      <Heading>Form Horizontal</Heading>
      <Form layout="inline">
        <TextField label="First Name" />
        <TextField
          label="Last Name"
          labelExtra={
            <ContextualHelp variant="info">
              <Heading level={3} weight="heavy">
                Need help?
              </Heading>
              <Content>
                <Text elementType="p" textSize="small">
                  If you're having issues accessing your account, contact our
                  customer support team for help.
                </Text>
              </Content>
            </ContextualHelp>
          }
        />
      </Form>
    </section>
    <section>
      <Heading>Placements</Heading>
      <ul
        style={{ listStyle: 'none', marginLeft: '500px', marginTop: '200px' }}
      >
        {placements.map((placement, index) => {
          return (
            <li key={index} style={{ margin: '10px 0' }}>
              <ContextualHelp placement={placement} variant="info">
                <Heading level={3} weight="heavy">
                  Need help?
                </Heading>
                <Content>
                  <Text elementType="p" textSize="small">
                    If you're having issues accessing your account, contact our
                    customer support team for help.
                  </Text>
                </Content>
                <footer
                  css={css`
                    .ac-text {
                      text-decoration: underline;
                      color: ${theme.colors.arizeLightBlue};
                    }
                  `}
                >
                  <Text textSize="small">Learn more about accounts</Text>
                </footer>
              </ContextualHelp>
            </li>
          );
        })}
      </ul>
    </section>
  </Provider>
);
