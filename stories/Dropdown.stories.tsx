import React, { useState } from 'react';
import { css } from '@emotion/react';
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
} from '../src';

const meta: Meta = {
  title: 'Dropdown',
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
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?node-id=1238%3A2417',
    },
  },
};

export default meta;

const Menu = () => (
  <List listSize="small">
    <ListItem>hello</ListItem>
    <ListItem>hello</ListItem>
  </List>
);

export const Gallery = () => (
  <Provider>
    <ul
      css={css`
        margin-left: 300px;
        li {
          margin-bottom: 8px;
        }
      `}
    >
      <li>
        <Dropdown menu={<Menu />}>Click Me</Dropdown>
      </li>
      <li>
        <Dropdown menu={<Menu />} buttonProps={{ addonBefore: 'Dataset A' }}>
          Click Me
        </Dropdown>
      </li>
      <li>
        <Dropdown
          menu={<Menu />}
          buttonProps={{ addonBefore: 'Dataset A' }}
          isDisabled
        >
          DIsabled
        </Dropdown>
      </li>
      <li>
        <Dropdown
          menu={
            <List listSize="small">
              <ListItem>hello</ListItem>
              <ListItem>
                hello asdfasdfasdfasdfasdfasdfasdfasdfasdadsfad
              </ListItem>
            </List>
          }
          buttonProps={{ addonBefore: 'Dataset A', style: { maxWidth: 250 } }}
        >
          Really really really really really really really long text
        </Dropdown>
      </li>
    </ul>
  </Provider>
);

const Template: Story<DropdownProps> = args => (
  <Provider>
    <Dropdown {...args} menu={<Menu />}>
      Click Me
    </Dropdown>
  </Provider>
);

export const Default = Template.bind({});

export const Controlled = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('dogs');
  const [unAppliedValue, setUnAppliedValue] = useState<string>('dogs');
  return (
    <Provider>
      <Dropdown
        triggerProps={{
          isOpen: isOpen,
          onOpenChange: open => setIsOpen(open),
        }}
        menu={
          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <div
              css={css`
                min-width: 300px;
                padding: 8px;
              `}
            >
              <RadioGroup defaultValue="dogs" onChange={setUnAppliedValue}>
                <Radio value="dogs" label="Dogs" />
                <Radio value="cats" label="Cats" />
                <Radio value="lions" label="Lions" />
                <Radio value="elephants" label="Elephants" />
              </RadioGroup>
            </div>
            <div
              css={css`
                min-width: 300px;
                border-top: 1px solid gray;
                width: 100%;
                display: flex;
                flex-direction: row;
                .ac-button {
                  flex: 1 1 auto;
                  margin: 8px;
                }
              `}
            >
              <Button
                variant="primary"
                size="compact"
                onClick={() => {
                  setValue(unAppliedValue);
                  setIsOpen(false);
                }}
              >
                Apply
              </Button>
            </div>
          </div>
        }
      >
        {value}
      </Dropdown>
    </Provider>
  );
};

export const DropdownWithListBox = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedKeys, setSelectedKeys] = useState(['dogs']);
  return (
    <Provider>
      <Dropdown
        triggerProps={{
          isOpen: isOpen,
          onOpenChange: open => setIsOpen(open),
        }}
        menu={
          <ListBox
            style={{ width: 200 }}
            aria-label="Pick your favorite"
            selectionMode="multiple"
            selectedKeys={selectedKeys}
            onSelectionChange={selected =>
              // @ts-ignore we know the keys are strings
              setSelectedKeys(Array.from(selected))
            }
          >
            <Item key="Aardvark">Aardvark</Item>
            <Item key="Kangaroo">Kangaroo</Item>
            <Item key="Snake">Snake</Item>
            <Item key="Danni">Danni</Item>
            <Item key="Devon">Devon</Item>
            <Item key="Ross">Ross</Item>
          </ListBox>
        }
      >
        {selectedKeys.length < 2
          ? selectedKeys.join(', ')
          : `${selectedKeys.length} selected`}
      </Dropdown>
    </Provider>
  );
};
