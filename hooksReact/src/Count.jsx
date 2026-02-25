import React, { useState } from "react";

// Function That calculate the Result of upto the 10000000000
function calculate() {
  let sum = 0;
  for (let i = 0; i < 10000000000; i++) {
    sum += i;
  }
  return sum;
}

const Count = () => {
  const [count, setCount] = useState(0);
  const increaseBy2 = () => {
    if (count >= 0) {
      setCount(() => count + 1);
      setCount((prev) => prev + 1);
    }
  };

  const decreaseBy2 = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      setCount((prevCount) => prevCount - 1);
    }
  };

  // if we actual want to increase By 2 we need updater function , callback function that will wait for prevous value and take the prevous value and then

  // but if we pass the

  return (
    <div>
      <p>Current value of the count is : {count}</p>

      {/* it took time to calculate the result of upto the 10000000000 : {calculate()} */}
      {/* {calculate()} */}
      <button onClick={increaseBy2}>Increase by 2</button>
      <button onClick={decreaseBy2}>Decrease by 2 </button>
    </div>
  );
};

export default Count;
