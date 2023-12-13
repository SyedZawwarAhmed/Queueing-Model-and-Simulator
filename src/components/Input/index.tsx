import React from "react";

function Input({ label, setValue }) {
  return (
    <div style={{ margin: "1rem" }}>
      <h2>{label}</h2>
      <input
        style={{ fontSize: "2rem", padding: "1rem" }}
        type="number"
        min={0}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Input;
