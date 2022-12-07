import React, { useState, useMemo, useEffect } from 'react';
import { css } from '@emotion/core';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import {
  Provider,
  List,
  ListItem,
  Dropdown,
  DropdownProps,
  Button,
  Radio,
  RadioGroup,
  ListBox,
  Item,
  TextField,
  Form,
} from '../src';

const meta: Meta = {
  title: 'DropdownWithForm',
  component: Dropdown,
  decorators: [withDesign],
  argTypes: {
    children: {
      control: {
        type: 'text',
        default: 'Label',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Zz1WXrITnlcYnIs55prawf/H2---Monitors?node-id=867%3A7920&t=5fgjUv2krdFhxCMZ-1',
    },
  },
};

export default meta;

function DropdownMenu() {
  let options = [
    { id: 1, name: 'Quantiles' },
    { id: 2, name: 'Num Bins' },
    { id: 3, name: 'Discrete Bins' },
  ];
  let [binningStrategy, setBinningStrategy] = useState<number>(1);

  const strategyNeedsForm = useMemo(() => {
    return binningStrategy === 2;
  }, [binningStrategy]);

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, [strategyNeedsForm]);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        width: ${!strategyNeedsForm ? 400 : 200}px;
        justify-content: flex-end;
      `}
    >
      <section
        css={css`
          padding: 16px;
          box-sizing: border-box;
          transition: width 0.3s ease-in-out;
          &[data-hidden='true'] {
            width: 0;
            overflow: hidden;
            padding: 0;
        `}
        data-hidden={!strategyNeedsForm}
      >
        <Form>
          <TextField label="Bins" />
        </Form>
        <div>
          <Button variant="default">Apply</Button>
        </div>
      </section>
      <ListBox
        style={{ width: 200, flex: 'none' }}
        aria-label="Binning strategy"
        items={options}
        selectionMode="single"
        onSelectionChange={selection => {
          const id = [...selection][0];
          setBinningStrategy(parseInt(id as string, 10));
        }}
      >
        {item => <Item key={item.id}>{item.name}</Item>}
      </ListBox>
    </div>
  );
}
export const DropdownWithForm = () => (
  <Provider>
    <div
      css={css`
        margin-left: 500px;
      `}
    >
      <Dropdown
        menu={<DropdownMenu />}
        triggerProps={{ placement: 'bottom right', isOpen: true }}
        buttonProps={{ addonBefore: 'Binning', style: { maxWidth: 250 } }}
      >
        Your selection here
      </Dropdown>
    </div>
  </Provider>
);
