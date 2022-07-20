import React, {createContext, useContext, useState} from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem("VisionEcomToken");

    if (token) return {token, isAuth: true};

    return {token: "", isAuth: false};
  });

  const value = {
    auth,
    setAuth,
  };
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export {useAuth, AuthProvider};
