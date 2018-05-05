import * as React from 'react';
import './Hello.css';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {
    if (enthusiasmLevel < 0) {
        throw new Error('You could be a little more enthusiastic');
    }
    return <div className="hello">Hello {name + getExclamationMarks(enthusiasmLevel)}</div>;
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}
