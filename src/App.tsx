import React from "react";
import Button from "./components/Button";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Link to={"/priority"}>
        <Button title={"Simulator"} />
      </Link>
      <Button title={"Queueing Model"} />
    </>
  );
}

export default App;
