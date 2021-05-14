import React, { useState, Fragment } from 'react';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import {
  ActionButton,
  Provider,
  DialogCardProps,
  ModalTrigger,
  DialogCard,
  Text,
  Button,
  ButtonGroup,
  List,
  ListItem,
} from '../src';

import css from '@emotion/css';

const meta: Meta = {
  title: 'Modal',
  component: DialogCard,
  argTypes: {
    mainText: {
      control: {
        type: '',
        options: [],
      },
    },
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/?node-id=821%3A62',
    },
  },
};

export default meta;

const Template: Story<DialogCardProps> = args => {
  return (
    <Provider>
      <ModalTrigger>
        <ActionButton>Modal Trigger</ActionButton>
        {close => (
          <DialogCard
            title="Hello world"
            onClose={close}
            aside={
              <List>
                <ListItem>Item One</ListItem>
                <ListItem>Item Two</ListItem>
                <ListItem>Item Three</ListItem>
              </List>
            }
            footer={
              <ButtonGroup>
                <Button variant="default" onClick={close}>
                  <Text>Another Button</Text>
                </Button>
                <Button variant="primary" onClick={close}>
                  <Text>Primary Button</Text>
                </Button>
              </ButtonGroup>
            }
            {...args}
          >
            <Text>
              Here is the body of the modal. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Proin consectetur vel odio in
              condimentum. Aliquam efficitur pellentesque lectus ac mollis.
              Pellentesque ac purus sit amet diam tincidunt scelerisque a sed
              nunc. Duis in nulla id nibh commodo volutpat ac quis erat. In
              vestibulum felis vel semper condimentum. Phasellus non nisl non
              arcu lobortis venenatis. Integer interdum lectus eget laoreet
              vulputate. Sed vulputate ante vel est tempus tempus vitae quis
              dui. Donec mattis turpis et nisi condimentum luctus.
            </Text>
          </DialogCard>
        )}
      </ModalTrigger>
    </Provider>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
