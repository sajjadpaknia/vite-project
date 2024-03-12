import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HousesDataProvider } from "./context/HouseData.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HousesDataProvider>
    <App />
  </HousesDataProvider>
);
