import React, { useState } from "react";

const ShortCircuit: React.FC = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1>{text || "Short-Circuit Tutorial"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? <p>There is an error...</p> : <p>There is no error</p>}
    </>
  );
};

export default ShortCircuit;
