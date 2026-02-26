import { createContext, useState } from "react";

// Create a context for the counter with default values
const CounterContext = createContext({
  count: 0,
  setCount: () => {},
});

// create the counterProvide component that provide the counterContext to the children components

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };
