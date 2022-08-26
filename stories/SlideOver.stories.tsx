import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Provider, Text, Button, DialogContainer, Dialog } from '../src';
import { DialogProps } from '../src/types/dialog';

const meta: Meta = {
  title: 'SlideOver',
  component: Dialog,
  decorators: [withDesign],
  argTypes: {
    title: {
      control: 'text',
    },
  },
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

const Template: Story<DialogProps> = args => {
  args.title = args.title || 'Title';
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Provider>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open
      </Button>
      <DialogContainer
        type="slideOver"
        isDismissable
        onDismiss={() => setIsOpen(false)}
      >
        {isOpen && (
          <Dialog {...args}>
            <Text>hello</Text>
          </Dialog>
        )}
      </DialogContainer>
    </Provider>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
