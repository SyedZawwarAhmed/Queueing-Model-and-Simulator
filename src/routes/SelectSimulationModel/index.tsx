import React from "react";
import { Link } from "react-router-dom";
import { Model } from "../../constants/enums";
import Button from "../../components/Button";
import Title from "../../components/Title";

function SelectSimulationModel() {
  return (
    <div className="container">
      <Title>Select Simulation Model</Title>
      <div className="flex">
        <Link to="/priority" state={{model: Model.MMN}}>
          <Button title={"M/M/N"} />
        </Link>
        <Link to="/priority" state={{model: Model.MGN}}>
          <Button title={"M/G/N"} />
        </Link>
        <Link to="/priority" state={{model: Model.GGN}}>
          <Button title={"G/G/N"} />
        </Link>
      </div>
    </div>
  );
}

export default SelectSimulationModel;
