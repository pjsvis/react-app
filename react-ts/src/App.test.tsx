import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './components/Hello';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hello name="xxx" />, div);
});
