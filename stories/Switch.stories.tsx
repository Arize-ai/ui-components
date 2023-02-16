import React from 'react';
import { css } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import { Heading, Switch, SwitchProps } from '../src';
import { Icon, PlusCircleOutline } from '../src/icon';
import { withDesign } from 'storybook-addon-designs';

const plusIcon = <Icon svg={<PlusCircleOutline />} />;

const meta: Meta = {
  title: 'Switch',
  component: Switch,
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
      url:
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?node-id=232%3A694&t=ZSWiYNP9rFSVJOzv-1',
    },
  },
};

export default meta;

export const Gallery = () => {
  return (
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
          <Switch isSelected>Send Emails (selected)</Switch>
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
            <Switch labelPlacement="end">Send Emails</Switch>
          </li>
          <li>
            <Switch labelPlacement="start" isSelected>Send Emails</Switch>
          </li>
        </ul>
      </section>
    </div>
  );
};
const Template: Story<SwitchProps> = args => <Switch {...args} />;

export const Default = Template.bind({});
