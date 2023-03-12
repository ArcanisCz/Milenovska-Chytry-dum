import React, { useState } from "react";
import blindsOpen from "../../../html-vzor/images/blinds-open.svg";
import blindsClosed from "../../../html-vzor/images/blinds-closed.svg";
import "./Blinds.css";

const Blinds = ({ initialState }) => {
  console.log(initialState);
  const [open, setOpen] = useState(Boolean(initialState === "open"));

  return (
    <div className="blinds">
      <img src={open ? blindsOpen : blindsClosed} alt="" />
      <p> Žaluzie </p>
      <div className="button-container">
        <button id={open ? "open" : ""} onClick={() => setOpen(true)}>
          Otevřeno
        </button>
        <button id={!open ? "open" : ""} onClick={() => setOpen(false)}>
          Zavřeno
        </button>
      </div>
    </div>
  );
};

export default Blinds;
