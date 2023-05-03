import React from 'react'
import { useState } from 'react';

const Hooks = ({initialCount}) => {
    const [count, setCount] = useState(initialCount);
  return (
    <div>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount((count) => count - 1)}>
          -
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default Hooks