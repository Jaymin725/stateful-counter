import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("count")) || 0
  );

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
