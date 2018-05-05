import * as React from 'react';
import { Button } from 'reactstrap';
import './App.css';
import HeaderNav from './HeaderNav/HeaderNav';

// import logo from './logo.svg';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <div>
                    <HeaderNav />
                </div>
                <div>
                    <Button>Hello</Button>
                </div>
            </div>
        );
    }
}

export default App;
