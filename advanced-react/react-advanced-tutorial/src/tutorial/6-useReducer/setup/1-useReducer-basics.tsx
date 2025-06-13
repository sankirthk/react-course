import React, { useReducer, useState } from "react";
import { data, dataObj } from "../../../data";
import Modal from "./modal";
import "./1-useReducer.css";

interface State {
  people: dataObj[];
  isModalOpen: boolean;
  modalContent: string;
}

interface Action {
  type: string;
  [key: string]: any;
}

const reducer = (state: State, action: Action): State => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item added",
    };
  } else if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please enter value",
    };
  } else if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  } else if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter((person) => {
      return person.id !== action.payload;
    });
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Person removed",
    };
  }
  throw new Error("No matching action type");
};
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const UseReducerBasics: React.FC = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      <div className="page">
        {state.isModalOpen && (
          <div className="modal">
            <Modal closeModal={closeModal} modalContent={state.modalContent} />
          </div>
        )}
        <form onSubmit={handleSumbit}>
          <div className="input__container">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Add
            </button>
          </div>
        </form>
        {state.people.map((person: dataObj) => {
          return (
            <div className="persons" key={person.id}>
              <h4>{person.name}</h4>
              <button
                className="btn"
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: person.id })
                }
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UseReducerBasics;
