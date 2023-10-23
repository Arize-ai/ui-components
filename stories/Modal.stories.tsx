import React from 'react';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { css } from '@emotion/react';
import {
  Provider,
  Card,
  Text,
  Modal,
  ModalProps,
  DialogContainer,
  Dialog,
  Button,
} from '../src';

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

const content = (
  <div
    css={css`
      flex: 1 1 auto;
      overflow-y: scroll;
    `}
    data-testid="scroll-container"
  >
    <div data-testid="scroll-content">
      <Text>I'm a Modal</Text>
    </div>
  </div>
);

const Template: Story<ModalProps> = args => {
  const [isSmallOpen, setIsSmallOpen] = React.useState(false);
  const [isMediumOpen, setIsMediumOpen] = React.useState(false);
  const [isLargeOpen, setIsLargeOpen] = React.useState(false);
  const [isXLargeOpen, setIsXLargelOpen] = React.useState(false);
  const [isFullscreenOpen, setIsFullscreenOpen] = React.useState(false);

  return (
    <Provider>
      <Button variant="primary" onClick={() => setIsSmallOpen(true)}>
        (Default) Small Modal
      </Button>
      <DialogContainer
        type="modal"
        isDismissable
        onDismiss={() => setIsSmallOpen(false)}
      >
        {isSmallOpen && <Dialog title="Example Modal">{content}</Dialog>}
      </DialogContainer>
      <Button variant="primary" onClick={() => setIsMediumOpen(true)}>
        Medium Modal
      </Button>
      <DialogContainer
        type="modal"
        isDismissable
        onDismiss={() => setIsMediumOpen(false)}
      >
        {isMediumOpen && (
          <Dialog size="M" title="Example Medium Modal">
            {content}
          </Dialog>
        )}
      </DialogContainer>
      <Button variant="primary" onClick={() => setIsLargeOpen(true)}>
        Large Modal
      </Button>
      <DialogContainer
        type="modal"
        isDismissable
        onDismiss={() => setIsLargeOpen(false)}
      >
        {isLargeOpen && (
          <Dialog size="L" title="Example Large Modal">
            {content}
          </Dialog>
        )}
      </DialogContainer>
      <Button variant="primary" onClick={() => setIsXLargelOpen(true)}>
        XLarge Modal
      </Button>
      <DialogContainer
        type="modal"
        isDismissable
        onDismiss={() => setIsXLargelOpen(false)}
      >
        {isXLargeOpen && (
          <Dialog size="XL" title="Example X-Large Modal">
            {content}
          </Dialog>
        )}
      </DialogContainer>
      <Button variant="primary" onClick={() => setIsFullscreenOpen(true)}>
        Fullscreen Modal
      </Button>
      <DialogContainer
        type="modal"
        isDismissable
        onDismiss={() => setIsFullscreenOpen(false)}
      >
        {isFullscreenOpen && (
          <Dialog size="fullscreen" title="Example FullScreen Modal">
            {content}
          </Dialog>
        )}
      </DialogContainer>
    </Provider>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
