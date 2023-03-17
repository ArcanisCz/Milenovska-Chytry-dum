import React from "react";
import Light from "../Light/Light";
import Data from "../../smartHomeData";
import "./Lights.css";

const Lights = ({ LightsData }) => {
  return (
    <div className="lights">
      {LightsData.map(({ name, state }) => (
        <Light key={name} roomName={name} initialState={state} />
      ))}
    </div>
  );
};

export default Lights;
