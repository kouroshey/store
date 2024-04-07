import { createContext, useState } from "react";

const initialUser = {
  id: "",
  name: "",
  username: "",
  email: "",
};

const initialContext = {
  user: initialUser,
};

const AuthContext = createContext(initialContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser)
  const value = {
    user,
  }
  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>;
};
