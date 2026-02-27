import React from "react";
import { useCounterStore } from "../store/counterStore";

const Counter = () => {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div>
      <p>Counter value is {count}</p>
      <button onClick={increment}>Increment By 1</button>
      <button onClick={decrement}>Decrement By 1</button>
    </div>
  );
};

export default Counter;
