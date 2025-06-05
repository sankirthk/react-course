import React, { useState } from "react";

const UseStateCounter: React.FC = () => {
  const [count, setCounter] = useState(0);

  const reset = () => {
    setCounter(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      //   setCounter(count + 1);
      setCounter((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <h1>Regular Counter</h1>
      <h1>{count}</h1>
      <div className="counter-btns">
        <button className="btn" onClick={() => setCounter(count + 1)}>
          Increase Counter
        </button>
        <button className="btn" onClick={() => setCounter(count - 1)}>
          Decrease Counter
        </button>
        <button className="btn" onClick={reset}>
          Reset Counter
        </button>
        <button className="btn" onClick={complexIncrease}>
          Complex Increase
        </button>
      </div>
    </>
  );
};

export default UseStateCounter;
