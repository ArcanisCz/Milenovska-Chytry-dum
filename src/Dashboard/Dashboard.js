import React from "react";
import data from "../smartHomeData";

import Blinds from "../components/Blinds";
import Climate from "../components/Climate";
import Energy from "../components/Energy";
import Lights from "../components/Lights";

import "./Dashboard.css";

const Dashboard = () => {
  console.log(data);
  return (
    <main className="dashboard">
      <Lights LightsData={data.lights} />
      <div className="inner-container">
        <Climate initialTemp={data.climate.temperature} />
        <Blinds initialState={data.blinds} />
        <Energy
          electricity={data.energyConsumption.electricity}
          water={data.energyConsumption.water}
        />
      </div>
    </main>
  );
};

export default Dashboard;
