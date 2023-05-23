import { AuthContext } from "../context/AuthContextProvider";
import { useContext } from "react";
import Button from "./Button";

// Step 3 : Consume Context
function Login() {
  const { isAuth, toggleAuth } = useContext(AuthContext);

  return (
    <div>
      <p>Login COMPONENT</p>
      <p>IS USER AUTHENTICATED : {isAuth ? "YES" : "NO"}</p>
      <Button onClick={toggleAuth} btnText="LOGIN USER" />
    </div>
  );
}

export default Login;
