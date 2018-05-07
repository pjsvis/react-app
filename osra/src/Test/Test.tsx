import * as React from 'react';

const Test = (props: { name: string; framework: string; count: number }) => {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.framework}</div>
            <div>{props.count}</div>
        </div>
    );
};
export default Test;
