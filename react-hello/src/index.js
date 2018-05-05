import React from 'react';
import ReactDOM from 'react-dom';

// NOTE: ComponentNames must be in capital case
// NOTE: lower case indicates build in elements
// NOTE: jsx requires all elements to be closed
function Hello() {
    return 'Hello';
}
function World() {
    return 'New World';
}

function HelloWorld() {
  var isSubmitted = false;
    return (
        <div>
            <Hello /> <World />!
            <SubmitButton />
        {/* NOTE: use ternary expressions instead of if statements */}
        {/* NOTE: javascript must be in single braces */}
        {
          // NOTE: double slash comments are ok in multi-line blocks
        }
        <span>{isSubmitted ? 'submitted' : 'pending submission'}</span>
        </div>
    )
}

function SubmitButton() {
  var label = 'Submit';
  return (
    <button>{label}</button>
  );
}

ReactDOM.render(<HelloWorld />, document.querySelector('#root'));
