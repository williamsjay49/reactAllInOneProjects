import "../../App.css";
import { useEffect, useState } from "react";

export const SliderMain = () => {
  const [value, setValue] = useState(1);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "1fr 100px",
        gap: "2rem",
        border: "1px solid black",
      }}
    >
      <input
        type="range"
        min="1"
        max="100"
        value={value}
        className="slider"
        id="myRange"
        onChange={(e) => setValue(e.target.value)}
      />
      <div
        style={{
          order: "2",
          justifySelf: "center",
          width: `${value}px`,
          height: `${value}px`,
          backgroundColor: "#04aa6d",
          borderRadius: "50%",
          textAlign: "center",
        }}
      >
        <span>{value}</span>
      </div>
    </div>
  );
};
