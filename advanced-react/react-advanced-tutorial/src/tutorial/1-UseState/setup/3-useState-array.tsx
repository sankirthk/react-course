import React, { useState } from "react";
import { data } from "../../../data";

const useStateArray: React.FC = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id: number) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="items">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Remove Items
      </button>
    </React.Fragment>
  );
};

export default useStateArray;
