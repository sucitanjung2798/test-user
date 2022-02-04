import React, { useState } from 'react';

const Test = () => {
    const [count, setCount] = useState(0);
    const [one, setOne] = useState()

    return (
        <div>
            <p>You clicked {one} times</p>
            <button onClick={() => setOne()}>
                Click me
            </button>
        </div>
    );
};

export default Test;
