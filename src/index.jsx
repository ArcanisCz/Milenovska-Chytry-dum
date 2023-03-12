import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { smartHomeData } from "./smartHomeData";
import Header from "./Header";
import Dashboard from "./Dashboard/Dashboard";

const App = () => (
  <div className="container">
    <Header />
    <Dashboard />
  </div>
);

createRoot(document.querySelector("#app")).render(<App />);
