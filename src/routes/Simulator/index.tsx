import React from "react";
import { useLocation } from "react-router-dom";

function Simulator() {
  const location = useLocation();
  const { isPriorityEnabled } = location.state;
  console.log(isPriorityEnabled);
  return <div>Simulator</div>;
}

export default Simulator;
