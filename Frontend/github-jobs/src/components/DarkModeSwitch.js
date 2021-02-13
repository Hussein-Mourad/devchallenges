import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import Icon from "@material-ui/core/Icon";

function DarkModeSwitch({ toggle }) {
  const { theme, setTheme } = useContext(ThemeContext);

  function changeTheme(e) {
    setTheme(e.target.checked ? "dark" : "light");
  }

  return (
    <label className="relative cursor-pointer">
      <input
        className="hidden"
        type="checkbox"
        onChange={(e) => changeTheme(e)}
      />

      {toggle && (
        <>
          <div className="bg-gray-700 rounded-xl w-12 h-6 pl-1 flex justify-between shadow-md">
            <span>🌜</span> <span>🌞</span>
          </div>
          <div
            className={`absolute inset-0 bg-gray-100 w-6 h-6 rounded-full shadow-lg transition-all duration-300 ease-in-out ${
              theme === "light" ? "transform translate-x-6" : ""
            }`}
          ></div>
        </>
      )}

      {!toggle && (
        <>
          {" "}
          {theme === "dark" && (
            <Icon className="text-yellow-400" style={{ fontSize: 30 }}>
              light_mode
            </Icon>
          )}
          {theme === "light" && (
            <Icon className="text-dark-900" style={{ fontSize: 30 }}>
              dark_mode
            </Icon>
          )}
        </>
      )}
      
    </label>
  );
}

export default DarkModeSwitch;
