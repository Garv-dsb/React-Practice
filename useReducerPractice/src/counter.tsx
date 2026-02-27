import React, { useReducer } from "react";

// 1. Define the shape of your state
interface State {
  count: number;
}

// 2. Define your actions using a Discriminated Union
type Action = { type: "increment" | "decrement" };
const initialState: State = { count: 0 };

// 3. The Reducer function
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
