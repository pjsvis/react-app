import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Hello from './components/Hello';
import CcForm from './components/Forms/CcForm';
import UserSearchForm from './components/Forms/FormikForm2';
// import FormikForm from './components/Forms/FormikForm';

ReactDOM.render(
    <div className="container">
        <Hello name="xxx" enthusiasmLevel={10} />
        <UserSearchForm login="smithpb" />
        <CcForm />
    </div>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
