import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

function SelectModel() {
  return (
    <div className="container">
      <h1 className="mb-3">Select Model</h1>
      <div className="flex">
        <Link to="/priority">
          <Button title={"M/M/N"} />
        </Link>
        <Link to="/priority">
          <Button title={"M/G/N"} />
        </Link>
        <Link to="/priority">
          <Button title={"G/G/N"} />
        </Link>
      </div>
    </div>
  );
}

export default SelectModel;
