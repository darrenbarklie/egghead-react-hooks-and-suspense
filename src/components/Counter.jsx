import React, { useEffect, useState } from "react";

function useCounter(step) {
  // Function is only run on first render, improving performance
  const initialCount = () => Number(window.localStorage.getItem("count") || 0);
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + step);
  return { count, increment };
}

function Counter() {
  const { count, increment } = useCounter(1);

  // Callback only when `count` value changes
  useEffect(() => {
    window.localStorage.setItem("count", count);
  }, [count]);

  return <button onClick={increment}>{count}</button>;
}

export default Counter;
