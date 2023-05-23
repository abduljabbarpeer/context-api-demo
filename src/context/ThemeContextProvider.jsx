import { createContext, useState } from "react";

// Step 1 Create Context;
export const ThemeContext = createContext();

// Step 2.A ( Provide )
const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState("dark"); // "light", "dark"

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
