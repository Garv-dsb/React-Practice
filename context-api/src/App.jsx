import React, { useContext } from "react";
import { CounterContext } from "./context/counterContext";

const App = () => {
  const { count, setCount } = useContext(CounterContext);
  
  return (
    <div>
      <h3>The value of the count is {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
