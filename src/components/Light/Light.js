import React, { useState } from "react";
import lightOn from "../../../html-vzor/images/light-on.svg";
import lightOff from "../../../html-vzor/images/light-off.svg";
import "./Light.css";

const Light = ({ roomName, initialState }) => {
  const [on, setOn] = useState(Boolean(initialState === "on"));

  return (
    <div className="light" onClick={() => setOn(!on)}>
      <img src={on ? lightOn : lightOff} alt="" />
      <p> {roomName} </p>
    </div>
  );
};

export default Light;
