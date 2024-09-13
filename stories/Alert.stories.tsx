import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Alert, AlertProps } from '../src/alert';
import { Button } from '../src/button';
import { Flex } from '../src';
import { ThemeSplitView } from './components/ThemeSplitView';
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
  },
};

export default meta;

const Template: Story<AlertProps> = args => <Alert {...args} />;

export const gallery = () => {
  return (
    <ThemeSplitView>
      <Flex direction="column" gap="size-100">
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
          extra={<Button variant="default">Perform Action</Button>}
        >
          Alert message goes here
        </Alert>
        <Alert
          variant="warning"
          title="Title"
          extra={<Button variant="default">Perform Action</Button>}
        >
          Alert message goes here
        </Alert>
        <Alert
          variant="danger"
          title="Title"
          extra={<Button variant="default">Perform Action</Button>}
        >
          Alert message goes here
        </Alert>
        <Alert
          variant="success"
          title="Title"
          extra={<Button variant="default">Perform Action</Button>}
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
          extra={<Button variant="default">Perform Action</Button>}
        >
          Alert message goes here
        </Alert>
        <Alert
          variant="warning"
          dismissable
          banner
          extra={<Button variant="default">Perform Action</Button>}
        >
          Alert message goes here
        </Alert>
        <Alert
          variant="danger"
          dismissable
          banner
          extra={<Button variant="default">Perform Action</Button>}
        >
          Alert message goes here
        </Alert>
        <Alert
          variant="success"
          dismissable
          banner
          extra={<Button variant="default">Perform Action</Button>}
        >
          Alert message goes here
        </Alert>
      </Flex>
    </ThemeSplitView>
  );
};
