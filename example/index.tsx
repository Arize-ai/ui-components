/** @jsx jsx */
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { jsx } from '@emotion/core';
import {
  Provider,
  ActionButton,
  PopoverTrigger,
  List,
  ListItem,
  Card,
  TabbedCard,
  Tabs,
  TooltipTrigger,
  Tooltip,
  RadioGroup,
  Radio,
  Text,
  ModalTrigger,
  DialogCard,
} from '../.';

import { useState } from 'react';
const { TabPane } = Tabs;
const App = () => {
  return (
    <Provider>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Card
          title={'Card in Dialog'}
          extra={
            <PopoverTrigger>
              <ModalTrigger>
                <ActionButton>Modal Trigger</ActionButton>
                {close => (
                  <DialogCard
                    title="Dialog Heading"
                    subTitle="cool"
                    onClose={close}
                  >
                    <Text>Hello world I am in a card</Text>
                  </DialogCard>
                )}
              </ModalTrigger>
              <div style={{ border: '1px solid gray' }}>
                Popover content here
              </div>
            </PopoverTrigger>
          }
        >
          <List>
            <ListItem>Item One</ListItem>
          </List>
        </Card>
        <TabbedCard
          title="Card With Tabs"
          extra={
            <TooltipTrigger delay={0}>
              <ActionButton>Hover</ActionButton>
              <Tooltip>Tooltip text goes here</Tooltip>
            </TooltipTrigger>
          }
        >
          <Tabs>
            <TabPane name="Tab One">
              <List>
                <ListItem>Item One</ListItem>
                <ListItem>Item Two</ListItem>
                <ListItem>Item Three</ListItem>
              </List>
            </TabPane>
            <TabPane name="Tab Two">
              <List>
                <ListItem>Tab Two Item One</ListItem>
                <ListItem>Tab Two Item Two</ListItem>
                <ListItem> Tab Two Item Three</ListItem>
              </List>
            </TabPane>
          </Tabs>
        </TabbedCard>
        <Card title="Radio Form">
          <RadioGroup
            label="here are the animals to choose from"
            defaultValue="cats"
          >
            <Radio label="Dogs" value="dogs" />
            <Radio label="Cats" value="cats">
              <ActionButton>Example Child</ActionButton>
              <ActionButton>Example Child</ActionButton>
              <ActionButton>Example Child</ActionButton>
            </Radio>
            <Radio label="Parrots" value="parrots" isDisabled>
              <Text> Example Text </Text>
              <ActionButton>Example Child</ActionButton>
              <ActionButton>Example Child</ActionButton>
            </Radio>
          </RadioGroup>
        </Card>
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
