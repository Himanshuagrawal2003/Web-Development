import { useState, useEffect } from "react";

export default function Counter() {
  let [countX, setCountX] = useState(0);
  let [countY, setCountY] = useState(0);

  let incCounterX = () => {
    setCountX((currCount) => currCount + 1);
  };

  let incCounterY = () => {
    setCountY((currCount) => currCount + 1);
  };

  useEffect(
    function printSomething() {
      //useEffect  for render somthing or (function) on second render time.
      console.log("Hi, I rendered");
    },
    [countX] // useEffect Dependent on CountX
  );

  return (
    <div>
      <div>
        <h2>CounterX</h2>
        <p>Counter Is: {countX}</p>
        <button onClick={incCounterX}>Increase Counter</button>
      </div>
      <div>
        <h2>CounterY</h2>
        <p>Counter Is: {countY}</p>
        <button onClick={incCounterY}>Increase Counter</button>
      </div>
    </div>
  );
}
