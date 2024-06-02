import { useEffect, useState, useRef } from "react";

import { Random } from "react-animated-text";
import Button from "../components/Button";

export default function TextAnimationApp() {
  const [animatedText, setAnimatedText] = useState("");
  const [currentText, setCurrentText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());
  return (
    <div className="wrapper">
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Input your text here...</label>
        <input
          type="text"
          ref={inputRef}
          onChange={(e) => setCurrentText(e.target.value)}
          value={currentText}
        />

        <Button
          onClick={() => {
            setAnimatedText(currentText);
            setCurrentText("");
          }}
          title={"clear"}
        />
      </form>

      <Random text={animatedText} />
    </div>
  );
}
