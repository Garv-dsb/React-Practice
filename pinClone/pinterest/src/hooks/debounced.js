import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timeout to update the debounced value after the specified delay
    const handler = setTimeout(() => {
      // SetTimeout gives us the id that we can clear
      setDebouncedValue(value);
    }, delay);

    // If the value changes again before the delay, the timer is reset
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only re-run the effect if value or delay changes

  return debouncedValue;
};

// In this just we setting the value of the Searched QUery after a given delay to prevent the no more Direct Search
