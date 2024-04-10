import Text from "../../components/Text.js";
import { useContext } from "react";
import { ThemeContext } from "./ThemeController.js";

function DarkMode() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <div className="wrapper grid-class">
      <button
        onClick={changeTheme}
        className={`button buttonPos ${
          theme !== "light" ? "bg-light" : "bg-dark"
        }`}
      >
        {theme !== "light" ? "Light" : "Dark"}
      </button>
      <Text
        title={`My Blog with ${theme !== "light" ? "Dark" : "Light"} Theme`}
      />
      <p>
        ext ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including version
      </p>
    </div>
  );
}

export default DarkMode;
