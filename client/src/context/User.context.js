import React, { useState, useContext } from "react";

const UserContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [chatrooms, setChatrooms] = useState([]);
  const [socket, setSocket] = useState(null);

  const value = {
    currentUser,
    setCurrentUser,
    token,
    setToken,
    chatrooms,
    setChatrooms,
    socket,
    setSocket,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
