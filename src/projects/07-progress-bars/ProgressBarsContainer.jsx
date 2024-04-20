import React, { useRef, useEffect, useState } from "react";
import Text from "../components/Text";
import { Progressbar } from "../components/Progressbar";

const inputStyle = {
  width: 50,
  border: "none",
  outline: "none",
  borderBottom: "1px solid lightgray",
};

export default function ProgressBarsContainer() {
  const [completed, setCompleted] = useState(51);
  const [progress, setProgress] = useState({
    ui: 20,
    ux: 50,
    data: 70,
  });

  const projectData = [
    { bgColor: "#7633f9", status: progress.ui },
    { bgColor: "#28a745", status: progress.ux },
    { bgColor: "#dc3545", status: progress.data },
  ];
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    setInterval(() => {
      return setCompleted(Math.floor(Math.random() * 100) + 1);
    }, 2000);
  }, []);
  return (
    <div className="wrapper">
      <Text title={"Progress Bars"} />
      <h2 className="h4">Progress Status:</h2>
      <ul>
        <li>
          <label>UI Status:</label>
          <input
            value={progress.ui}
            ref={inputRef}
            onChange={(e) => {
              setProgress({ ...progress, ui: e.target.value });
            }}
            type="number"
            style={inputStyle}
          />
        </li>
        <li>
          <label>UX Status:</label>
          <input
            value={progress.ux}
            onChange={(e) => {
              setProgress({ ...progress, ux: e.target.value });
            }}
            type="number"
            style={inputStyle}
          />
        </li>
        <li>
          <label>DATA Status:</label>
          <input
            value={progress.data}
            onChange={(e) => {
              setProgress({ ...progress, data: e.target.value });
            }}
            type="number"
            style={inputStyle}
          />
        </li>
      </ul>
      {projectData.map((data, idx) => {
        return (
          <Progressbar
            key={idx}
            bgColor={data.bgColor}
            completed={data.status}
          />
        );
      })}
      <Progressbar
        bgColor={completed > 50 ? "#28a745" : "#7633f9"}
        completed={completed}
      />
    </div>
  );
}
