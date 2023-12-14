import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../../components/Button";
import "../../globalStyles.css";

function Priority() {
  const { state } = useLocation();

  return (
    <div className="container">
      {" "}
      <h1>Priority</h1>
      <div>
        <Link to={"/simulator"} state={{ isPriorityEnabled: true, model: state.model }}>
          <Button title={"Yes"} onClick={() => {}} />
        </Link>
        <Link to={"/simulator"} state={{ isPriorityEnabled: false, model: state.model }}>
          <Button title={"No"} onClick={() => {}} />
        </Link>
      </div>
    </div>
  );
}

export default Priority;
