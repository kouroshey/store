import { createContext, useContext, useEffect, useState } from "react";

const initialUser = {
  id: "",
  name: "",
  username: "",
  email: "",
  accessToken: "",
  refreshToekn: ""
};

const initialContext = {
  user: initialUser,
  isLogin: false,
};

const AuthContext = createContext(initialContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);
  const [isLogin, setIsLogin] = useState(false);

  const local = JSON.parse(localStorage.getItem("sb-hdtoxgvpkioavkookevq-auth-token"))
  useEffect(() => {
    if (local) {
      setIsLogin(true)
      const userData = local.user.identities[0].identity_data
      const loggedInUser = {
        id: userData.provider_id,
        name: userData.full_name,
        email: userData.email,
        accessToken: local.access_token,
        refreshToekn: local.refresh_token
      }
      setUser(loggedInUser)
    }
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