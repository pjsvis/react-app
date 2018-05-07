import * as React from 'react';
import * as JSONPretty from 'react-json-pretty';
import './App.css';
import CheckboxWithLabel from './CheckboxWithLabel/CheckboxWithLabel';
import HeaderNav from './HeaderNav/HeaderNav';
import RequestData from './Test/RequestData';
import RequestList from './Test/RequestList';
import Test from './Test/Test';

class App extends React.Component {
    public render() {
        return (
            <div>
                <HeaderNav />
                <div className="App container">
                    <CheckboxWithLabel labelOff="Off" labelOn="On" />
                    <Test name="Typescript" framework="React" count={16} />
                    <RequestList requests={RequestData()} />
                </div>
            </div>
        );
    }
}

export default App;
