import { useState } from 'react';
import './App.css';
import Parent from './parent';
import ValueContext from './valueContext';

function App() {
  let value = useState(1)
  return (
    <ValueContext.Provider value={value}>
      <div className="App">
        <h1>Increament/Decrement of Counter</h1>
        <hr />
        <Parent />
      </div>
    </ValueContext.Provider>
  );
}

export default App;
