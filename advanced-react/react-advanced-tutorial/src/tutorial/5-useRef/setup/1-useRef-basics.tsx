import React, { useEffect, useRef } from "react";
import "./1-useRef-basics.css";


// Preserves Values
// DOes not trigger re-render
// Targets DOM nodes/elements

const UseRefBasics: React.FC = () => {
  const refContainer = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(refContainer.current?.value);
  };

  useEffect(() => {
    console.log(refContainer.current)
    refContainer.current?.focus();
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" ref={refContainer} />
          <button className="butn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
