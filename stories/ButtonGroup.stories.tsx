import React from 'react';
import { css } from '@emotion/core';
import { Meta } from '@storybook/react';
import { ButtonGroup, Button } from '../src';
import { Icon, PlusCircleOutline, MinusCircleOutline } from '../src/icon';
import { withDesign } from 'storybook-addon-designs';

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

export const Gallery = () => {
  return (
    <ul
      css={css`
        & > li {
          margin-bottom: 8px;
        }
      `}
    >
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
    </ul>
  );
};
