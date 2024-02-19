import React from "react";

function Input({ label, setValue }) {
  const preventMinus = (e) => {
    if (e.code === 'Minus') {
      e.preventDefault();
    }
    // if (Number(e.target.value) === 0) {
    //   e.preventDefault();
    // }
  };

  return (
    <div style={{ margin: "1rem",  }}>
      <h2 className="text-white">{label}</h2>
      <input
        style={{ fontSize: "2rem", padding: "1rem",background: "#c1c1c1", color: '#000000' }}
        type="number"
        min={0}
        onChange={(e) => {
          const inputValue = Math.max(0, Number(e.target.value));
          setValue(inputValue);
        }}
        onKeyDown={preventMinus}
      />
    </div>
  );
}

export default Input;
