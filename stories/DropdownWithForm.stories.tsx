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
      url: 'https://www.figma.com/file/Zz1WXrITnlcYnIs55prawf/H2---Monitors?node-id=867%3A7920&t=5fgjUv2krdFhxCMZ-1',
    },
  },
};

export default meta;

function DropdownMenu() {
  let options = [
    { id: 1, name: 'Quantiles' },
    { id: 2, name: 'Discrete Bins' },
    { id: 3, name: 'Number of Bins' },
    { id: 4, name: 'Custom Bins' },
  ];
  let [binningStrategy, setBinningStrategy] = useState<number>(1);

  const strategyNeedsForm = useMemo(() => {
    return binningStrategy === 3 || binningStrategy === 4;
  }, [binningStrategy]);

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, [strategyNeedsForm]);

  const textFieldLabel =
    binningStrategy === 3 ? 'Number of Bins' : 'Custom Bins';

  return (
    <div
      css={css`
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
      `}
    >
      <ListBox
        style={{ width: 250, flex: 'none' }}
        aria-label="Binning strategy"
        items={options}
        selectionMode="single"
        onSelectionChange={(selection) => {
          const id = [...selection][0];
          setBinningStrategy(parseInt(id as string, 10));
        }}
      >
        {(item) => <Item key={item.id}>{item.name}</Item>}
      </ListBox>
      <section
        css={css`
          padding: 12px;
          box-sizing: border-box;
          transition: width 0.3s ease-in-out;
          border-right: 1px solid #768ca3;
          &[data-hidden='true'] {
            width: 0;
            overflow: hidden;
            padding: 0;
            border-right: none;
        `}
        data-hidden={!strategyNeedsForm}
      >
        <Form>
          <TextField label={textFieldLabel} />
        </Form>
        <div
          css={css`
            border-top: 1px solid #768ca3;
          `}
        >
          <Button
            css={css`
              margin-left: auto;
              margin-top: 12px;
            `}
            variant="primary"
          >
            Apply
          </Button>
        </div>
      </section>
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
        buttonProps={{ addonBefore: 'Bin Option', style: { maxWidth: 250 } }}
      >
        Select Binning
      </Dropdown>
    </div>
  </Provider>
);
