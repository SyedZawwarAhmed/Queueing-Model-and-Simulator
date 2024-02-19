import React from "react";
import Button from "./components/Button";
import { Link } from "react-router-dom";
import "./globalStyles.css";

function App() {
  return (
    <div className="container">
      <h1 className="mb-10 text-white" style={{fontSize: "5rem"}}>Eye Clinic Simulator</h1>
      <h2 className="mb-10 text-xl text-white">Submitted to Respected Dr. Shaista Rais</h2>
      <div>
        <Link to={"/select-simulation-model"}>
          <Button title={"Simulator"} onClick={() => {}} />
        </Link>
        <Link to={"/select-queueing-model"}>
          <Button title={"Queueing Model"} onClick={() => {}} />
        </Link>
      </div>
    </div>
  );
}

export default App;
