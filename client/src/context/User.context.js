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
  const [Login, setLogin] = useState("Login");
  const [allFoodsData, setAllFoodsData] = useState([]);
  const [popUp, setpopUp] = useState(false);
  const [windowUpdateDetails, setWindowUpdateDetails] = useState(false);

  const value = {
    currentUser,
    setCurrentUser,
    token,
    setToken,
    chatrooms,
    setChatrooms,
    socket,
    setSocket,
    Login,
    setLogin,
    allFoodsData,
    setAllFoodsData,
    popUp,
    setpopUp,
    windowUpdateDetails,
    setWindowUpdateDetails,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
