import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import {
  Provider,
  Text,
  Button,
  DialogContainer,
  Dialog,
  ButtonGroup,
  Card,
} from '../src';
import { DialogProps } from '../src/types/dialog';
import {
  ArrowIosDownwardOutline,
  ArrowIosUpwardOutline,
  Icon,
} from '../src/icon';
import { css } from '@emotion/react';

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

const content = (
  <div
    css={css`
      flex: 1 1 auto;
      overflow-y: scroll;
    `}
    data-testid="scroll-container"
  >
    <div data-testid="scroll-content">
      <Card title="Section 1">
        <Text>hello</Text>
      </Card>
      <Card title="Section 2">
        <Text>hello</Text>
      </Card>
      <Card title="Section 3">
        <Text>hello</Text>
      </Card>
      <Card title="Section 4">
        <Text>hello</Text>
      </Card>
      <Card title="Section 5">
        <Text>hello</Text>
      </Card>
      {/* <Card title="Section 6">
        <Text>hello</Text>
      </Card>
      <Card title="Section 7">
        <Text>hello</Text>
      </Card>
      <Card title="Section 8">
        <Text>hello</Text>
      </Card>
      <Card title="Section 9">
        <Text>hello</Text>
      </Card> */}
    </div>
  </div>
);

const Template: Story<DialogProps> = args => {
  const { isDismissable, onDismiss, ...props } = args;
  props.title = props.title || 'Title';
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
        {isOpen && <Dialog {...props}>{content}</Dialog>}
      </DialogContainer>
    </Provider>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

export const Paginated: Story<DialogProps> = args => {
  const { isDismissable, onDismiss, ...props } = args;
  props.title = props.title || 'Title';
  return (
    <Provider>
      <DialogContainer type="slideOver" isDismissable onDismiss={() => {}}>
        <Dialog
          {...props}
          extra={
            <ButtonGroup aria-label="pagination" size="compact">
              {[
                <Button
                  variant="default"
                  icon={<Icon svg={<ArrowIosUpwardOutline />} />}
                />,
                <Button
                  variant="default"
                  icon={<Icon svg={<ArrowIosDownwardOutline />} />}
                />,
              ]}
            </ButtonGroup>
          }
        >
          {content}
        </Dialog>
      </DialogContainer>
    </Provider>
  );
};
