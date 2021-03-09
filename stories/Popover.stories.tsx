import React, { useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import Popover, { PopoverProps } from '../src/Popover';
import { useOverlayTrigger } from '@react-aria/overlays';
import { useOverlayTriggerState } from '@react-stately/overlays';

const meta: Meta = {
  title: 'Popover',
  component: Popover,
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

const Template: Story<PopoverProps> = args => {
  const state = useOverlayTriggerState({});
  const triggerRef = useRef<HTMLButtonElement>();
  let { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
    triggerRef
  );
  console.log(JSON.stringify(state));
  return (
    <>
      <button
        {...triggerProps}
        ref={triggerRef}
        onClick={() => {
          state.open();
        }}
      >
        Click Me
      </button>
      {state.isOpen && (
        <Popover {...overlayProps} {...state}>
          This is the content
        </Popover>
      )}
    </>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
