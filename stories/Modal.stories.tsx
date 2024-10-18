import React from 'react';
import { Meta, Story } from '@storybook/react';

import { css } from '@emotion/react';
// @ts-ignore
import { Modal, ModalProps, DialogContainer, Dialog, Button } from '../src';
import chartFile from './images/chart.png';
import { ThemeToggleWrap } from './components/ThemeToggleWrap';

const meta: Meta = {
  title: 'Modal',
  component: Modal,

  argTypes: {},
  parameters: {
    controls: { expanded: true },
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
      <img
        src={chartFile}
        alt="chart image"
        css={css`
          width: 100%;
          padding: 16px;
        `}
      />
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
    <ThemeToggleWrap>
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
    </ThemeToggleWrap>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
