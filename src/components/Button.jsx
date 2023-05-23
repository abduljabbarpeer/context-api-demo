import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

function Button({ onClick, btnText }) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      style={{
        padding: "10px",
        color: theme === "dark" ? "white" : "black",
        backgroundColor: theme === "dark" ? "black" : "white",
        border: theme === "dark" ? "1px solid white" : "1px solid black",
      }}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
}

export default Button;
