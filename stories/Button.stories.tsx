import React from 'react';
import { css } from '@emotion/core';
import { Meta, Story } from '@storybook/react';
import { ButtonGroup } from '../src/button';
import { Button, ButtonProps } from '../src/button';
import { Icon, PlusCircleOutline } from '../src/icon';
import { withDesign } from 'storybook-addon-designs';

const plusIcon = <Icon svg={<PlusCircleOutline />} />;

const meta: Meta = {
  title: 'Button',
  component: Button,
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
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?node-id=0%3A1',
    },
  },
};

export default meta;

export const Gallery = () => {
  return (
    <ul
      css={css`
        & > li {
          margin-bottom: 8px;
        }
      `}
    >
      <li>
        <ButtonGroup>
          <Button variant="primary">Create Dashboard</Button>
          <Button variant="primary" icon={plusIcon}>
            Create Dashboard
          </Button>
          <Button variant="primary" icon={plusIcon}>
            Create Dashboard
          </Button>
          <Button variant="primary" icon={plusIcon} title="add" />
        </ButtonGroup>
      </li>
      <li>
        <ButtonGroup>
          <Button variant="primary" disabled>
            Create Dashboard
          </Button>
          <Button variant="primary" icon={plusIcon} disabled>
            Create Dashboard
          </Button>
          <Button variant="primary" icon={plusIcon} disabled>
            Create Dashboard
          </Button>
          <Button variant="primary" icon={plusIcon} disabled title="add" />
        </ButtonGroup>
      </li>
      <li>
        <ButtonGroup>
          <Button variant="default">Create Dashboard</Button>
          <Button variant="default" icon={plusIcon}>
            Create Dashboard
          </Button>
          <Button variant="default" icon={plusIcon}>
            Create Dashboard
          </Button>
          <Button variant="default" icon={plusIcon} title="add" />
        </ButtonGroup>
      </li>
      <li>
        <ButtonGroup>
          <Button size="compact" variant="primary">
            Create Dashboard
          </Button>
          <Button size="compact" variant="primary" icon={plusIcon}>
            Create Dashboard
          </Button>
          <Button size="compact" variant="primary" icon={plusIcon}>
            Create Dashboard
          </Button>
          <Button
            size="compact"
            variant="primary"
            icon={plusIcon}
            title="add"
          />
        </ButtonGroup>
      </li>
      <li>
        <ButtonGroup>
          <Button size="compact" variant="default">
            Create Dashboard
          </Button>
          <Button size="compact" variant="default" icon={plusIcon}>
            Create Dashboard
          </Button>
          <Button size="compact" variant="default" icon={plusIcon}>
            Create Dashboard
          </Button>
          <Button
            size="compact"
            variant="default"
            icon={plusIcon}
            title="add"
          />
        </ButtonGroup>
      </li>
    </ul>
  );
};
const Template: Story<ButtonProps> = args => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Primary = Template.bind({});

Primary.args = { variant: 'primary', children: 'Create Dashboard' };

export const Default = Template.bind({});

Default.args = { variant: 'default', children: 'Create Dashboard' };

export const Loading = Template.bind({});

Loading.args = {
  variant: 'primary',
  loading: true,
  children: 'Create Dashboard',
};
