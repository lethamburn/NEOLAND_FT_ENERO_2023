import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const login = (data) => {
    setUser(data);
    navigate("/profile");
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
