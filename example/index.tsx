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
} from '../.';

const { TabPane } = Tabs;
const App = () => {
  return (
    <Provider>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Card
          title={'Hello World'}
          extra={
            <PopoverTrigger>
              <ActionButton>Click Me</ActionButton>
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
            <TooltipTrigger>
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
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
