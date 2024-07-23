import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyContextProvier = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(() => {
    const userInfo = localStorage.getItem("userInfo");
    return userInfo ? JSON.parse(userInfo) : undefined;
  });

  const [fetchPostAgain, setFetchPostAgain] = useState(false);

  return (
    <MyContext.Provider
      value={{
        loggedUser,
        setLoggedUser,
        fetchPostAgain,
        setFetchPostAgain,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvier };
