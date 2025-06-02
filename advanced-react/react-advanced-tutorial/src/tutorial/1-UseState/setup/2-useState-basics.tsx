import React, { useState } from "react";

const UseStateBasics: React.FC = () => {
  //   console.log(useState("hello world"));
  //   const value: number = useState(1)[0];
  //   const handler: React.Dispatch<React.SetStateAction<number>> = useState(1)[1];
  //   console.log(value, handler);
  const [text, setText] = useState("Random Title");

  const handleClick: () => void = () => {
    if (text === "Random Title") {
      setText("Hello World");
    } else {
      setText("Random Title");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
