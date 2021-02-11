import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import Icon from "@material-ui/core/Icon";

function DarkModeSwitch() {
  const { theme, setTheme } = useContext(ThemeContext);

  function isDark() {
    return theme === "dark";
  }
  const getIcon = (size) => {
    if (isDark()) {
      return (
        <Icon className="text-yellow-400" style={{ fontSize: 30 }}>
          light_mode
        </Icon>
      );
    } else {
      return (
        <Icon className="text-dark-900" style={{ fontSize: 30 }}>
          dark_mode
        </Icon>
      );
    }
  };
  function checkBox(e) {
    setTheme(e.target.checked ? "dark" : "light");
  }

  return (
    <div
      className="relative min-w-min flex"
    >
      <input
        className="w-full h-full absolute inset-0 opacity-0 z-10"
        type="checkbox"
        checked={isDark()}
        onChange={(e) => checkBox(e)}
      />
      {getIcon()}
    </div>
  );
}

export default DarkModeSwitch;
