import React from "react";
import Button from "./components/Button";
import { Link } from "react-router-dom";
import "./globalStyles.css";

function App() {
  return (
    <div className="container">
      <div>
        <Link to={"/priority"}>
          <Button title={"Simulator"} />
        </Link>
        <Link to={"/queueing-model"}>
          <Button title={"Queueing Model"} />
        </Link>
      </div>
    </div>
  );
}

export default App;
