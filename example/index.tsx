/** @jsx jsx */
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { jsx } from '@emotion/core';
import {
  Provider,
  ActionButton,
  PopoverTrigger,
  RadioGroup,
  Radio,
} from '../.';

const App = () => {
  return (
    <Provider>
      <div>
        <PopoverTrigger>
          <ActionButton>Click Me</ActionButton>
          <div style={{ border: '1px solid gray' }}>Popover content here</div>
        </PopoverTrigger>
        <RadioGroup label="here are the animals to choose from">
          <Radio value="dogs">Dogs</Radio>
          <Radio value="cats">Cats</Radio>
        </RadioGroup>
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
