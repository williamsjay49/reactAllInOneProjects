import "../../App.css";
import { useState } from "react";

const wrapper = {
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  borderRadius: "10px",
  display: "grid",
  gridTemplateRow: "200px 1fr",
  gap: "40px",
  padding: "2rem 0",
};

const buttonStyle = {
  backgroundColor: "#001524",
  border: "none",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "1rem",
  margin: "0 5px",
  borderRadius: "5px",
};
function Temp() {
  const [counter, setCounter] = useState(0);
  const dashBoard = {
    justifySelf: "center",
    width: "150px",
    height: "150px",
    backgroundColor: `${counter > 0 ? "#f77f00" : "#344e41"}`,
    borderRadius: "50%",
    border: "2px solid #000814",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };
  return (
    <div className="wrapper" style={wrapper}>
      <div style={dashBoard}>
        <h1
          className="h3"
          style={{
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
            margin: "0",
            padding: "0",
          }}
        >
          {counter}&#176; C
        </h1>
      </div>
      <div>
        <button style={buttonStyle} onClick={() => setCounter(counter - 1)}>
          -
        </button>
        <button style={buttonStyle} onClick={() => setCounter(counter + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

export default Temp;
