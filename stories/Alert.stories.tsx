import React from 'react';
import { css } from '@emotion/core';
import { Meta, Story } from '@storybook/react';
import { Alert, AlertProps } from '../src/alert';
import { Button } from '../src/button';
const meta: Meta = {
  title: 'Alert',
  component: Alert,
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
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?node-id=309%3A0',
    },
  },
};

export default meta;

const Template: Story<AlertProps> = args => <Alert {...args} />;

export const gallery = () => {
  return (
    <div
      css={css`
        .ac-alert + .ac-alert {
          margin-top: 8px;
        }
      `}
    >
      <Alert variant="info">Alert message goes here</Alert>
      <Alert variant="warning">Alert message goes here</Alert>
      <Alert variant="danger">Alert message goes here</Alert>
      <Alert variant="success">Alert message goes here</Alert>
      <br />
      <Alert variant="info" title="Title">
        Alert message goes here
      </Alert>
      <Alert variant="warning" title="Title">
        Alert message goes here
      </Alert>
      <Alert variant="danger" title="Title">
        Alert message goes here
      </Alert>
      <Alert variant="success" title="Title">
        Alert message goes here
      </Alert>
      <br />
      <Alert
        variant="info"
        title="Title"
        extra={<Button variant="primary">Perform Action</Button>}
      >
        Alert message goes here
      </Alert>
      <Alert
        variant="warning"
        title="Title"
        extra={<Button variant="primary">Perform Action</Button>}
      >
        Alert message goes here
      </Alert>
      <Alert
        variant="danger"
        title="Title"
        extra={<Button variant="primary">Perform Action</Button>}
      >
        Alert message goes here
      </Alert>
      <Alert
        variant="success"
        title="Title"
        extra={<Button variant="primary">Perform Action</Button>}
      >
        Alert message goes here
      </Alert>
      <br />
      <Alert variant="info" title="Title" dismissable>
        Alert message goes here
      </Alert>
      <Alert variant="warning" title="Title" dismissable>
        Alert message goes here
      </Alert>
      <Alert variant="danger" title="Title" dismissable>
        Alert message goes here
      </Alert>
      <Alert variant="success" title="Title" dismissable>
        Alert message goes here
      </Alert>
      <br />
      <Alert variant="info" title="Title" dismissable banner>
        Alert message goes here
      </Alert>
      <Alert variant="warning" title="Title" dismissable banner>
        Alert message goes here
      </Alert>
      <Alert variant="danger" title="Title" dismissable banner>
        Alert message goes here
      </Alert>
      <Alert variant="success" title="Title" dismissable banner>
        Alert message goes here
      </Alert>
      <br />
      <Alert variant="info" dismissable banner>
        Alert message goes here
      </Alert>
      <Alert variant="warning" dismissable banner>
        Alert message goes here
      </Alert>
      <Alert variant="danger" dismissable banner>
        Alert message goes here
      </Alert>
      <Alert variant="success" dismissable banner>
        Alert message goes here
      </Alert>
      <br />
      <Alert
        variant="info"
        dismissable
        banner
        extra={<Button variant="primary">Perform Action</Button>}
      >
        Alert message goes here
      </Alert>
      <Alert
        variant="warning"
        dismissable
        banner
        extra={<Button variant="primary">Perform Action</Button>}
      >
        Alert message goes here
      </Alert>
      <Alert
        variant="danger"
        dismissable
        banner
        extra={<Button variant="primary">Perform Action</Button>}
      >
        Alert message goes here
      </Alert>
      <Alert
        variant="success"
        dismissable
        banner
        extra={<Button variant="primary">Perform Action</Button>}
      >
        Alert message goes here
      </Alert>
    </div>
  );
};
// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Warning = Template.bind({});

Warning.args = { variant: 'warning', children: 'Alert text goes here' };
