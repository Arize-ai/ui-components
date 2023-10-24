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
  Flex,
  CardProps,
} from '../src';
import { DialogProps } from '../src/types/dialog';
import {
  ArrowIosDownwardOutline,
  ArrowIosUpwardOutline,
  Icon,
} from '../src/icon';
import { css } from '@emotion/react';
import { ThemeToggleWrap } from './components/ThemeToggleWrap';

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

const cardProps: Partial<CardProps> = {
  borderColor: 'light',
  backgroundColor: 'light',
  variant: 'compact',
};

const content = (
  <div
    css={css`
      flex: 1 1 auto;
      overflow-y: scroll;
      padding: var(--ac-global-dimension-static-size-100);
    `}
    data-testid="scroll-container"
  >
    <Flex direction="column" gap="size-100">
      <Card title="Section 1" {...cardProps}>
        <Text>hello</Text>
      </Card>
      <Card title="Section 2" {...cardProps}>
        <Text>hello</Text>
      </Card>
      <Card title="Section 3" {...cardProps}>
        <Text>hello</Text>
      </Card>
      <Card title="Section 4" {...cardProps}>
        <Text>hello</Text>
      </Card>
      <Card title="Section 5" {...cardProps}>
        <Text>hello</Text>
      </Card>
      <Card title="Section 6" {...cardProps}>
        <Text>hello</Text>
      </Card>
      <Card title="Section 7" {...cardProps}>
        <Text>hello</Text>
      </Card>
      <Card title="Section 8" {...cardProps}>
        <Text>hello</Text>
      </Card>
      <Card title="Section 9" {...cardProps}>
        <Text>hello</Text>
      </Card>
    </Flex>
  </div>
);

const Template: Story<DialogProps> = args => {
  const { isDismissable, onDismiss, ...props } = args;
  props.title = props.title || 'Title';
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ThemeToggleWrap>
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
    </ThemeToggleWrap>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

export const Paginated: Story<DialogProps> = args => {
  const { isDismissable, onDismiss, ...props } = args;
  props.title = props.title || 'Title';
  return (
    <ThemeToggleWrap>
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
    </ThemeToggleWrap>
  );
};
