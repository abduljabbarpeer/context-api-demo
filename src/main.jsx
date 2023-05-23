import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AuthContextProvider from "./context/AuthContextProvider";
import ThemeContextProvider from "./context/ThemeContextProvider.jsx";

// Step 2.B ( Provide )
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </ThemeContextProvider>
);
