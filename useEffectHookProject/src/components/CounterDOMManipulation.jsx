import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CounterDOMManipulation = () => {
  let [count, setCount] = useState(0);
  let [count5, setCount5] = useState(0);

  //Variation 1: useEffect() without dependencies
  // useEffect(() => {
  //     document.title = `${count} times clicked`
  // })

  //Variation 2: useEffect() with dependency as an empty array
  //   useEffect(() => {
  //     document.title = `${count} times clicked`;
  //   }, []);

  //Variation 3: useEffect() with dependencies
    useEffect(() => {
      document.title = `${count} times clicked`;
    }, [count5]); // here we are giving count5 as a dependency, so the title will be updated only when count5 changes but we are giving the title as count only , not count5


  function handleCountIncrease() {
    setCount(count + 1);
  }

  function handleCountIncreaseByFive() {
    setCount5(count5 + 5)
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Count5: {count5}</h1>
      <button className="btn btn-success mx-2" onClick={handleCountIncrease}>
        Increment
      </button>
      <button className="btn btn-info" onClick={handleCountIncreaseByFive}>
        Increase by 5
      </button>
    </div>
  );
};

export default CounterDOMManipulation;
