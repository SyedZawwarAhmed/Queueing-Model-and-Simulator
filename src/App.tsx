import React from "react";
import Button from "./components/Button";
import { Link } from "react-router-dom";
import "./globalStyles.css";

function App() {
  return (
    <div className="container">
      <div>
        <Link to={"/priority"}>
          <Button title={"Simulator"} onClick={() => {}} />
        </Link>
        <Link to={"/queueing-model"}>
          <Button title={"Queueing Model"} onClick={() => {}} />
        </Link>
      </div>
    </div>
  );
}

export default App;
