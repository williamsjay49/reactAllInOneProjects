import { useState, createContext, useEffect } from "react";
import DarkMode from "./DarkMode";

const themes = {
  dark: "dark",
  light: "light",
};

export const ThemeContext = createContext({});

export default function ThemeController() {
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    document.body.style.background =
      theme === themes.light ? "white" : "#001524";
    document.body.style.color = theme === themes.light ? "#001524" : "white";
  }, [theme]);

  const changeTheme = () => {
    theme === themes.light ? setTheme(theme.dark) : setTheme(themes.light);
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <DarkMode />
    </ThemeContext.Provider>
  );
}
