import React from 'react';
import ReactDOM from 'react-dom';

// function MyThing() {
//     return <div>Hello MyThing</div>;
// }

function Books() {
  var author = 'Peter J Smith';
    return (
        <div className="book">
            <div className="title">The title</div>
            <br />
        <div className="author">{author}</div>
            <div className="stats">5 stars</div>
            <div className="isbn">12-345678-910</div>
        </div>
    );
}

ReactDOM.render(<Books />, document.getElementById('root'));
