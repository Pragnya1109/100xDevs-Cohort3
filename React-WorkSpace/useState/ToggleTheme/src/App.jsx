import React, { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: toggle ? "black" : "white",
      }}
    >
      <button
        onClick={() => setToggle(!toggle)}
        style={{
          backgroundColor: toggle ? "black" : "white",
          color: toggle ? "white" : "black",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {toggle ? "Turn Light" : "Turn Dark"}
      </button>
    </div>
  );
}

export default App;
