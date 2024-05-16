import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (user) => {
    if (currentUser && currentUser.correo === user.correo) {
      return false; // Indica que el usuario ya está registrado
    }
    setCurrentUser(user);
    return true; // Indica que el registro fue exitoso
  };

  return (
    <UserContext.Provider value={{ currentUser, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
