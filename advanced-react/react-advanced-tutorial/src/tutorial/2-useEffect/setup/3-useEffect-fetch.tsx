import React, { useEffect, useState } from "react";
import './useEffect-fetch.css'

type userObj = {
  id: string;
  login: string;
  avatar_url: string;
  html_url: string;
};
const url = "https://api.github.com/users";

const UseEffectFetch: React.FC = () => {
  const [users, setUser] = useState<userObj[]>([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUser(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3 className="title">Github Users</h3>
      <ul className="users__list">
        {users.map((user) => {
          return <User key={user.id} {...user} />;
        })}
      </ul>
    </>
  );
};

const User = (props: userObj) => {
  const { login, avatar_url, html_url } = props;

  return (
    <li className="user__info">
      <img src={avatar_url} alt={login} />
      <div className="user__div-name">
        <h4>{login}</h4>
        <a href={html_url}>Profile</a>
      </div>
    </li>
  );
};

export default UseEffectFetch;
