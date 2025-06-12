import React, { useState } from "react";
type peopleObj = {
  id: string;
  firstName: string;
  email: string;
};

const ControlledInputs: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState<peopleObj[]>([]);

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    }
  };

  return (
    <>
      <article>
        <form className="form" onClick={handleClick}>
        <div className="form-control">
          <label htmlFor="firstName">Name</label>
          <input
            autoComplete="given-name"
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFirstName(e.target.value)
            }
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            autoComplete="emai"
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <button className="btn" type="submit">
          Add Person
        </button>
        </form>
        {people.map((person)=>{
          const {id, firstName, email} = person;
          return (
            <div className="item">
              <h3>{firstName}</h3>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
