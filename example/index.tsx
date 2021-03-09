/** @jsx jsx */
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { jsx } from '@emotion/core';
import { Button } from '../.';

const App = () => {
  return (
    <div>
      <Button variant="primary">Button</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
