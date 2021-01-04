import { useContext } from "react";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import { ThemeContext } from "../themeContext";

export const DarkModeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function isDark() {
    return theme === "dark";
  }
  const getIcon = () => {
    if (isDark()) {
      return <WbSunnyIcon className="text-yellow-400 z-0" fontSize="large" />;
    } else {
      return (
        <Brightness3Icon
          className="text-gray-900 transform rotate-45 relative z-0"
          fontSize="large"
        />
      );
    }
  };
  function checkBox(e) {
      console.log(e)
      setTheme(e.target.checked ? "dark" : "light")
  }
  return (
    <div className="float-right mb-5">
      <div className="relative min-w-30">
        <input
          className="w-full h-full object-cover absolute opacity-0 z-10"
          type="checkbox"
          checked={isDark()}
          onChange={(e) => checkBox(e) }
        />
        {getIcon()}
      </div>
    </div>
  );
};
