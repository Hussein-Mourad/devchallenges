import { useState } from "react";
import Icon from "@material-ui/core/Icon";
import PropTypes from "prop-types";
import "../css/tailwind.css";

const InputBase = (props) => {
  return (
    <div
      className={`${props.className} my-4 relative text-gray-700 ${
        props.fullWidth ? "w-full" : "max-w-min"
      }`}
    >
      <span
        className={`absolute top-1/2 ${
          props.endIcon ? "right-3" : "left-3"
        } transform -translate-y-1/2 mt-3 focus:outline-none 
           `}
      >
        <Icon className={`text-${props.color}`}>{props.startIcon}</Icon>
        <Icon className={`text-${props.color}`}>{props.endIcon}</Icon>
      </span>

      <div className="flex flex-col-reverse">
        <input
          type="text"
          placeholder={props.placeholder}
          className={props.setInputStyle()}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          onChange={props.onChange}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
          disabled={props.disabled}
          value={props.inputValue}
        />
        <label className={props.setLabelStyle()}>{props.label}</label>
      </div>

      <small
        className={`block text-xs ${
          props.error ? "text-red-400" : "text-gray-400"
        }`}
      >
        {props.helperText}
      </small>
    </div>
  );
};
const InputMultiline = (props) => {
  return (
    <div
      className={`${props.className} my-3 flex flex-col-reverse ${
        props.fullWidth ? "w-full" : "max-w-min"
      }`}
    >
      <small className="block text-xs text-gray-400">{props.helperText}</small>
      <textarea
        type="text"
        className={`input my-1 pl-3 pt-4 border rounded-lg placeholder-gray-500 hover:border-gray-900 focus:outline-none  resize-none ${
          props.error
            ? "border-red-400 focus:border-red-400"
            : "border-gray-500 focus:border-blue-400"
        }`}
        placeholder={props.placeholder}
        value={props.inputValue}
        cols={props.cols}
        rows={props.rows}
        onChange={props.onChange}
      ></textarea>
      <label className={props.setLabelStyle()}>{props.label}</label>
    </div>
  );
};

function Input({
  startIcon,
  endIcon,
  helperText,
  value,
  label,
  placeholder,
  size,
  fullWidth,
  multiline,
  rows,
  cols,
  error,
  disabled,
  className,
}) {
  const [color, setColor] = useState(error ? "red-400" : "gray-700");
  const [inputValue, setInputvalue] = useState(value);
  function onFocus() {
    error ? setColor("red-400") : setColor("blue-400");
  }
  function onBlur() {
    error ? setColor("red-400") : setColor("gray-700");
  }
  function onMouseEnter() {
    setColor("gray-700");
  }
  function onMouseLeave() {
    error ? setColor("red-400") : setColor("gray-700");
  }
  function onChange(e) {
    setInputvalue(e.target.value)
  }
  function setInputStyle() {
    var sizeStyle = "py-4";
    var padding = `${sizeStyle} pl-3`;
    var border =
      "border border-gray-500 hover:border-gray-900 focus:border-blue-400";
    if (size === "sm") {
      sizeStyle = "py-2";
    }
    if (startIcon) {
      padding = `${sizeStyle} pl-10`;
    } else if (endIcon) {
      padding = `${sizeStyle} pr-10 pl-3`;
    }

    if (error) {
      border =
        "border border-red-400 hover:border-gray-900 focus:border-red-400";
    }

    if (disabled) {
      border = "border border-gray-200 cursor-not-allowed";
    }
    var inputStyle = `input my-1 ${padding} ${border} rounded-lg text-gray-900  focus:outline-none`;
    return inputStyle;
  }

  function setLabelStyle() {
    var type = "default";
    if (error) {
      type = "error";
    }
    var labelStyle = `input-label--${type} text-${color} block text-sm`;
    return labelStyle;
  }
  const props = {
    startIcon,
    endIcon,
    helperText,
    label,
    value,
    inputValue,
    placeholder,
    size,
    fullWidth,
    multiline,
    rows,
    cols,
    error,
    disabled,
    color,
    className,
    onFocus,
    onBlur,
    onChange,
    onMouseEnter,
    onMouseLeave,
    setInputStyle,
    setLabelStyle,
    
  };
  if (multiline) {
    return <InputMultiline {...props} />;
  } else {
    return <InputBase {...props} />;
  }
}

Input.propTypes = {
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  helperText: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cols: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Input.defaultProps = {
  size: "",
  placeholder: "Placeholder",
  label: "Label",
  fullWidth: false,
  multiline: false,
  cols: 30,
  rows: 4,
  error: false,
  disabled: false,
};

export default Input;
