/** @jsx jsx */
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { jsx } from '@emotion/core';
import { Provider, ActionButton, PopoverTrigger, List, ListItem Card } from '../.';

const App = () => {
  return (
    <Provider>
      <div>
        <PopoverTrigger>
          <ActionButton>Click Me</ActionButton>
          <div style={{ border: '1px solid gray' }}>Popover content here</div>
        </PopoverTrigger>
        <Card title={"Hello World"}>
        <List><ListItem>Item One</ListItem></List>
        </Card>
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
