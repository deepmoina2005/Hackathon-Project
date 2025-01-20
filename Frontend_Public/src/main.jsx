import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import "./index.css";
import App from "./App.jsx";
import ShopContextProvider from "./contacts/ShopContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </AppContextProvider>
  </BrowserRouter>
);
