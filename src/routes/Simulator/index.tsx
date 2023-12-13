import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../../globalStyles.css";
import Input from "../../components/Input";

function Simulator() {
  const location = useLocation();
  const { isPriorityEnabled } = location.state;

  const [arrivalMean, setArrivalMean] = useState();
  const [serviceMean, setServiceMean] = useState();
  const [numberOfServers, setNumberOfServers] = useState();

  console.log(arrivalMean, serviceMean, numberOfServers);

  return (
    <div className="container">
      <div style={{ display: "flex" }}>
        <Input label="Arrival Mean" setValue={setArrivalMean} />

        <Input label="Service Mean" setValue={setServiceMean} />

        <Input label="Number of Servers" setValue={setNumberOfServers} />
      </div>
    </div>
  );
}

export default Simulator;
