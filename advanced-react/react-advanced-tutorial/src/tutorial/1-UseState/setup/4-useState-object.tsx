import React, { useState } from "react";

const useStateObject: React.FC = () => {
  const [person, setPerson] = useState({
    name: "Sankirth",
    age: 24,
    message: "random message",
  });

  const handleClick = () => {
    setPerson({ ...person, message: "Hello World" });
  };

  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={handleClick}>
        Change State
      </button>
    </React.Fragment>
  );
};

export default useStateObject;
