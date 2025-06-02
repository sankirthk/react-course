import React from "react";

const ErrorExample = () => {
  let title: string = "Random Title";
  const changeTitle: () => void = () => {
    title = "Hello World";
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>Use State Error Example</h2>
      <button type="button" className="btn" onClick={changeTitle}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
