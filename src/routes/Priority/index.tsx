import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "../../globalStyles.css";

function Priority() {
  return (
    <div className="container">
      {" "}
      <h1>Priority</h1>
      <div>
        <Link to={"/simulator"} state={{ isPriorityEnabled: true }}>
          <Button title={"Yes"} onClick={() => {}} />
        </Link>
        <Link to={"/simulator"} state={{ isPriorityEnabled: false }}>
          <Button title={"No"} onClick={() => {}} />
        </Link>
      </div>
    </div>
  );
}

export default Priority;
