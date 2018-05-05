import * as React from 'react';
import './App.css';
import CheckboxWithLabel from './CheckboxWithLabel/CheckboxWithLabel';
import HeaderNav from './HeaderNav/HeaderNav';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
            <HeaderNav />
            <CheckboxWithLabel labelOff="Off" labelOn="On"/>
            </div>
        );
    }
}

export default App;
