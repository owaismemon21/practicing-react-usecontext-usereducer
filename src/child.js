import React, { useContext } from 'react';
import ValueContext from './valueContext';

function Child() {
  let value = useContext(ValueContext);
  return (
    <div>
      <h2>Using useContext</h2>
      <h3>Counter value is</h3>
      <h1>{value[0]}</h1>
      <button onClick={() => {value[1](++value[0])}}>Increment</button>
      <button onClick={() => {value[1](--value[0])}}>Decrement</button>
    </div>
  );
}

export default Child;
