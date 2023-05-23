import { createContext, useState } from "react";

// Step 1 Create Context;
export const AuthContext = createContext();

// Step 2.A ( Provide )
const AuthContextProvider = (props) => {
  // auth state and pass that information;
  const [isAuth, setIsAuth] = useState(true);

  const toggleAuth = () => {
    setIsAuth(!isAuth);
  };

  const contextValues = {
    isAuth,
    toggleAuth,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
