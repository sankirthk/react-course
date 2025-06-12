import React, { useState } from "react";

type peopleObj = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: string;
};

const MultipleInputs: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState<peopleObj[]>([]);

  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
  });

  const handleChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    const currentTarget = e.currentTarget as HTMLFormElement;
    if (!currentTarget.checkValidity()) {
      // browser handles errors automatically
      return;
    }
    e.preventDefault();
    const newPerson = { ...person, id: new Date().getTime().toString() };
    setPeople([...people, newPerson]);
    setPerson({ firstName: "", lastName: "", age: "", email: "" });
  };

  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">First Name</label>
            <input
              autoComplete="given-name"
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lastName">Last Name</label>
            <input
              autoComplete="family-name"
              type="text"
              id="lastName"
              name="lastName"
              value={person.lastName}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              autoComplete="emai"
              type="text"
              id="email"
              name="email"
              value={person.email}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age</label>
            <input
              autoComplete="age"
              type="text"
              id="age"
              name="age"
              value={person.age}
              required
              onChange={handleChange}
            />
          </div>
          <button className="btn" type="submit" onClick={handleSubmit}>
            Add Person
          </button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div key={id} className="item">
              <h3>{firstName}</h3>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default MultipleInputs;
