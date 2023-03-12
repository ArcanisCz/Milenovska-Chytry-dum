import React from "react";
import "./Energy.css";
import electricityImage from "../../../html-vzor/images/electricity.svg";
import waterImage from "../../../html-vzor/images/water.svg";

const Energy = ({ electricity, water }) => {
  return (
    <div className="energy">
      <EnergyCard
        title={"Elektřina"}
        image={electricityImage}
        number={`${electricity} kW`}
      />
      <EnergyCard title={"Voda"} image={waterImage} number={`${water} m3`} />
    </div>
  );
};

const EnergyCard = ({ title, image, number }) => (
  <div className="inner-container">
    <img src={image} alt="" />
    <div>
      {title}
      <br />
      {number}
    </div>
  </div>
);

export default Energy;
