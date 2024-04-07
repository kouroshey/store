import { createContext, useContext, useEffect, useState } from "react";

const initialUser = {
  id: "",
  name: "",
  username: "",
  email: "",
};

const initialContext = {
  user: initialUser,
  isLogin: false,
};

const AuthContext = createContext(initialContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const local = localStorage.getItem("provider_token")
    console.log(local);
  }, [])

  const value = {
    user,
    isLogin
  }
  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext)