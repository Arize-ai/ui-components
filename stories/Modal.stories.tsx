import React from 'react';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Provider, Modal, ModalProps, Text, Button } from '../src';

const meta: Meta = {
  title: 'Modal',
  component: Modal,
  decorators: [withDesign],
  argTypes: {},
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?node-id=32%3A52',
    },
  },
};

export default meta;

const Template: Story<ModalProps> = args => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Provider>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open
      </Button>
      <Modal isOpen={isOpen}>
        <Text>hello</Text>
      </Modal>
    </Provider>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
