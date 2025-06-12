import { error } from "console";
import React, { useEffect, useState } from "react";

const url: string = "https://api.github.com/users/QuincyLarsons";

const MultipleReturns: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  const getUser = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        throw new Error(response.statusText);
      }
      const user = await response.json();
      setUser(user.login);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }
  
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
