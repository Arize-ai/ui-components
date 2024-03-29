import React from 'react';
import { css } from '@emotion/react';
import { Meta } from '@storybook/react';
import { ButtonGroup, Button, ActionMenu, Provider, Item, Flex } from '../src';
import {
  Icon,
  Icons,
  PlusCircleOutline,
  MinusCircleOutline,
} from '../src/icon';
import { withDesign } from 'storybook-addon-designs';
import { ThemeSplitView } from './components/ThemeSplitView';
import { ThemeToggleWrap } from './components/ThemeToggleWrap';

const plusIcon = <Icon svg={<PlusCircleOutline />} />;
const minusIcon = <Icon svg={<MinusCircleOutline />} />;

const meta: Meta = {
  title: 'ButtonGroup',
  component: ButtonGroup,
  decorators: [withDesign],
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?node-id=0%3A1',
    },
  },
};

export default meta;

function ActionMenuExamples() {
  return (
    <Flex direction="column" gap="size-100">
      <li>
        <ButtonGroup aria-label="some group">
          <Button variant="default" icon={plusIcon} />
          <Button variant="default" icon={minusIcon} title="subtract" />
        </ButtonGroup>
      </li>
      <li>
        <ButtonGroup aria-label="some group">
          <Button variant="default">Add</Button>
          <Button variant="default">Remove</Button>
        </ButtonGroup>
      </li>
      <li>
        <ButtonGroup aria-label="some group" size="compact">
          <Button variant="default" icon={plusIcon} />
          <Button variant="default" icon={minusIcon} title="subtract" />
        </ButtonGroup>
      </li>
      <li>
        <ButtonGroup aria-label="some group" size="compact">
          <Button variant="default">Add</Button>
          <Button variant="default">Remove</Button>
        </ButtonGroup>
      </li>
      <li>
        <ButtonGroup aria-label="some group" size="compact">
          <Button
            variant="default"
            icon={<Icon svg={<Icons.PlusCircleOutline />} />}
          >
            Add Knowledge Base
          </Button>
          <ActionMenu
            align="end"
            icon={<Icon svg={<Icons.ArrowIosDownwardOutline />} />}
          >
            <Item>Add Dataset</Item>
            <Item>Add Knowledge Base</Item>
          </ActionMenu>
        </ButtonGroup>
      </li>
    </Flex>
  );
}
export const Gallery = () => {
  return (
    <ThemeSplitView>
      <ActionMenuExamples />
    </ThemeSplitView>
  );
};

export const Light = () => {
  return (
    <ThemeToggleWrap defaultLight>
      <ActionMenuExamples />
    </ThemeToggleWrap>
  );
};

export const Dark = () => {
  return (
    <ThemeToggleWrap>
      <ActionMenuExamples />
    </ThemeToggleWrap>
  );
};
