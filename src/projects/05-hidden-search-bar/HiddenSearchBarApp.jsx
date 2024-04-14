import React, { useState, useRef, useEffect } from "react";
import { BsSearch } from "react-icons/bs";

export default function HiddenSearchApp() {
  const [uiProps, setUiProps] = useState({
    bg: "#2a9d8f",
    showInput: false,
    showIcon: true,
  });
  let bsSearchStyle = {
    color: "#caf0f8",
    fontSize: 100,
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%)",
  };

  let inputStyle = {
    position: "absolute",
    transform: "translateX(-50%)",
    top: "50%",
    left: "50%",
    width: "30rem",
    height: "3rem",
    padding: "1rem 1rem",
    border: "none",
    outline: "none",
    fontSize: "1rem",
  };
  let body = document.body.style;

  let inputEl = useRef(null);
  useEffect(() => {
    body.background = uiProps.bg;
    uiProps.showInput && inputEl.current.focus();
  }, [uiProps.showInput]);

  return (
    <div className="wrapper">
      {uiProps.showInput ? (
        <input
          style={inputStyle}
          type="text"
          placeholder="search"
          ref={inputEl}
          onBlur={() => {
            setUiProps({ showIcon: true, showInput: false, bg: "#2a9d8f" });
          }}
        />
      ) : (
        <BsSearch
          style={bsSearchStyle}
          onClick={() => {
            setUiProps({ showIcon: false, showInput: true, bg: "#f4a261" });
          }}
        />
      )}
    </div>
  );
}
