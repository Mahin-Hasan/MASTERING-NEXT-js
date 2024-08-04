"use client";
import { useState } from 'react';



const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>This is counter commpo</h1>
            <h2>Counter value : {counter}</h2>
            <button onClick={() => setCounter(counter + 1)} className='btn btn-primary'>Increase</button>
            <button onClick={() => setCounter(counter - 1)} className='btn btn-warning'>Decrease</button>
        </div>
    );
};

export default Counter;