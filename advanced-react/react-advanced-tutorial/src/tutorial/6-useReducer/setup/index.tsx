import React, { useState } from "react";
import { data, dataObj } from "../../../data";
import Modal from "./modal";

const UseReducerBasics: React.FC = () => {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [people, setPeople] = useState<dataObj>(data);

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name) {
      setShowModal(true);
      setPeople([...people, { id: new Date().getTime(), name }]);
      setName("");
    }
    else{
      setShowModal(false)
    }
  };

  return (
    <>
      {showModal && <Modal />}
      <form onSubmit={handleSumbit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          <button className="btn" type="submit">
            Add
          </button>
        </div>
      </form>
      {people.map((person, index) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default UseReducerBasics;
