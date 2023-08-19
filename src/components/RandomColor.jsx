import React, { useState } from "react";
import "./RandomColor.css";
function RandomColor() {
  const [hex, setHex] = useState("#ffffff");
  function randomHex() {
    const randomHex = "#" + Math.floor(Math.random() * 16777721).toString(16);
    setHex(randomHex);
  }
  return (
    <div className="App" style={{ backgroundColor: `${hex}` }}>
      <h1>{hex}</h1>

      <button onClick={randomHex}>click for new Background</button>

      <button onClick={() => navigator.clipboard.writeText(hex)}>
        Copy the hex Value
      </button>
    </div>
  );
}

export default RandomColor;
