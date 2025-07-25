import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import RecipesContext from "./context/RecipesContext.jsx";

createRoot(document.getElementById("root")).render(
  <RecipesContext>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </RecipesContext>
);
