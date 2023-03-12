import React, { useState } from "react";
import "./Climate.css";
import temp from "../../../html-vzor/images/temp.svg";

const Climate = ({ initialTemp }) => {
  const [count, setCount] = useState(initialTemp);

  return (
    <div className="climate">
      <img src={temp} alt="img-climate" />
      <h1> {count}°C </h1>
      <div className="button-container">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
};

export default Climate;
