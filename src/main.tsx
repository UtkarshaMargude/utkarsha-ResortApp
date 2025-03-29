import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct Import
import App from "./App";
import "./index.css";
import "./sass/main.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
