import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { AuthContext } from "../context/AuthContextProvider";
import Button from "./Button";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isAuth } = useContext(AuthContext);

  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid black",
        color: theme === "dark" ? "white" : "black",
        backgroundColor: theme === "dark" ? "black" : "white",
      }}
    >
      <h6>LOGO</h6>
      <p>THEME IS {theme}</p>
      <Button onClick={toggleTheme} btnText="TOGGLE THEME" />
      <p>IS USER AUTHENTICATED {isAuth ? "YES" : "NO"}</p>
    </div>
  );
}

export default Navbar;
