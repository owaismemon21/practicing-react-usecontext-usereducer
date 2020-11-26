import { useReducer } from 'react';
import NumberReducer from './numberReducer';

function Child2() {
  let [state, dispatch] = useReducer(NumberReducer, 1);
  return (
    <div>
      <h2>Using useReducer</h2>
      <h3>Value of reducer state is</h3>
      <h1>{state}</h1>
      <button onClick={() => {dispatch({type: 'INCREMENT'})}}>Increment</button>
      <button onClick={() => {dispatch({type: 'DECREMENT'})}}>Decrement</button>
    </div>
  );
}

export default Child2;
