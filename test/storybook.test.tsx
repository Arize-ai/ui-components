import React from 'react';
import * as ReactDOM from 'react-dom';
import { Primary } from '../stories/Button.stories';

describe('Primary', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Primary />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
