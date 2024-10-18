import React from 'react';
import { Meta } from '@storybook/react';

import { css } from '@emotion/react';
import {
  Form,
  Placement,
  ContextualHelp,
  Text,
  Heading,
  theme,
  Content,
  TextField,
} from '../src';

import { ThemeToggleWrap } from './components/ThemeToggleWrap';

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
  },
};

export default meta;

export const Gallery = () => (
  <ThemeToggleWrap>
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
  </ThemeToggleWrap>
);
