import React from 'react';
import { css } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import { ButtonToolbar } from '../src/button';
import { Button, ButtonProps } from '../src/button';
import { CheckmarkCircleOutline, Icon, PlusCircleOutline } from '../src/icon';
import { withDesign } from 'storybook-addon-designs';
import { ThemeToggleWrap } from './components/ThemeToggleWrap';
import { ThemeSplitView } from './components/ThemeSplitView';

const plusIcon = <Icon svg={<PlusCircleOutline />} />;
const checkmarkIcon = <Icon svg={<CheckmarkCircleOutline />} />;

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
    <ThemeSplitView>
      <ul
        css={css`
          & > li {
            margin-bottom: 8px;
          }
        `}
      >
        <li>
          <ButtonToolbar>
            <Button id="primary-test-button" variant="primary">
              Create Dashboard
            </Button>
            <Button variant="primary" icon={plusIcon}>
              Create Dashboard
            </Button>
            <Button variant="primary" icon={plusIcon}>
              Create Dashboard
            </Button>
            <Button variant="primary" icon={plusIcon} title="add" />
            <Button variant="danger" icon={plusIcon}>
              Delete Dashboard
            </Button>
            <Button variant="danger" icon={plusIcon} title="add" />
            <Button variant="success" icon={checkmarkIcon}>
              Delete Dashboard
            </Button>
            <Button variant="success" icon={checkmarkIcon} title="add" />
          </ButtonToolbar>
        </li>
        <li>
          <ButtonToolbar>
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
            <Button variant="danger" icon={plusIcon} disabled title="delete" />
            <Button variant="success" icon={plusIcon} disabled title="add" />
          </ButtonToolbar>
        </li>
        <li>
          <ButtonToolbar>
            <Button variant="default">Create Dashboard</Button>
            <Button variant="default" icon={plusIcon}>
              Create Dashboard
            </Button>
            <Button variant="default" icon={plusIcon}>
              Create Dashboard
            </Button>
            <Button variant="default" icon={plusIcon} title="add" />
            <Button variant="danger" icon={plusIcon} title="delete" />
            <Button variant="success" icon={checkmarkIcon} title="success" />
          </ButtonToolbar>
        </li>
        <li>
          <ButtonToolbar>
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
            <Button
              size="compact"
              variant="danger"
              icon={plusIcon}
              title="delete"
            />
            <Button
              size="compact"
              variant="success"
              icon={plusIcon}
              title="success"
            />
          </ButtonToolbar>
        </li>
        <li>
          <ButtonToolbar>
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
            <Button
              size="compact"
              variant="success"
              icon={checkmarkIcon}
              title="success"
            />
          </ButtonToolbar>
        </li>
      </ul>
    </ThemeSplitView>
  );
};
const Template: Story<ButtonProps> = args => (
  <ThemeToggleWrap>
    <Button {...args} />
  </ThemeToggleWrap>
);

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

export const Success = Template.bind({});

Success.args = { variant: 'success', children: 'Enabled', icon: checkmarkIcon };
