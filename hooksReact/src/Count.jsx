import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  //   this can't run because the setCount work as the

  //   const increaseBy2 = () => {
  //     setCount(count + 1);
  //      setCount(count + 1);
  //   };

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
      <button onClick={increaseBy2}>Increase by 2</button>
      <button onClick={decreaseBy2}>Decrease by 2 </button>
    </div>
  );
};

export default Count;
