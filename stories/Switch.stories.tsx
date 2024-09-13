import React from 'react';
import { css } from '@emotion/react';
import { Meta, Story } from '@storybook/react';

import { Heading, Switch, SwitchProps } from '../src';
import { Icon, PlusCircleOutline } from '../src/icon';
import { ThemeSplitView } from './components/ThemeSplitView';

const plusIcon = <Icon svg={<PlusCircleOutline />} />;

const meta: Meta = {
  title: 'Switch',
  component: Switch,

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
      <div>
        <ul
          css={css`
            & > li {
              margin-bottom: 8px;
              list-style: none;
            }
          `}
        >
          <li>
            <Switch>Send Emails</Switch>
          </li>
          <li>
            <Switch isDisabled>Send Emails (disabled)</Switch>
          </li>
          <li>
            <Switch isDisabled isSelected>
              Send Emails (disabled)
            </Switch>
          </li>
          <li>
            <Switch isSelected>Send Emails (selected, controlled)</Switch>
          </li>
        </ul>
        <section>
          <Heading>Label Placement</Heading>
          <ul
            css={css`
              & > li {
                margin-bottom: 8px;
                list-style: none;
              }
            `}
          >
            <li>
              <Switch labelPlacement="start">Send Emails</Switch>
            </li>
            <li>
              <Switch labelPlacement="start" isSelected>
                Send Emails (selected, controlled)
              </Switch>
            </li>
          </ul>
        </section>
      </div>
    </ThemeSplitView>
  );
};
const Template: Story<SwitchProps> = args => <Switch {...args} />;

export const Default = Template.bind({});
