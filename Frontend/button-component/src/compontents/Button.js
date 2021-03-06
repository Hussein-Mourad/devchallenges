import PropTypes from "prop-types";
import Icon from "@material-ui/core/Icon";

function Button({
  variant,
  size,
  color,
  shadow,
  startIcon,
  endIcon,
  className,
  children,
  disabled,
}) {
  function setBtnStyle() {
    var style = "btn";
    // Sets the size of the btn
    if (size === "sm" || size === "lg") {
      style += ` btn-${size}`;
    }
    // Sets the color and variant of the btn
    if (variant !== "outline" && variant !== "text") {
      style += ` btn-${color}`;
    } else if (variant === "outline") {
      style += ` btn-${color}-outline`;
    } else if (variant === "text") {
      style += ` btn-${color}-link`;
    }
    if (shadow) {
      style += ` shadow-lg`;
    }
    // Adds user classnames if existed
    if (className) {
      style = `${style} ${className}`;
    }
    return style;
  }
  function setIconStyle(start, end) {
    // removes unecessary margins if there are no text
    var style = "inline-flex align-top";
    if (children) {
      if (start) {
        style += " mr-2";
      } else if (end) {
        style += " ml-2";
      }
    }
    return style;
  }
  return (
    <button className={setBtnStyle()} disabled={disabled}>
      {startIcon ? (
        <Icon className={setIconStyle(true, false)}>{startIcon}</Icon>
      ) : (
        ""
      )}
      {children ? children : ""}
      {endIcon ? (
        <Icon className={setIconStyle(false, true)}>{endIcon}</Icon>
      ) : (
        ""
      )}
    </button>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf("", "outline", "text"),
  size: PropTypes.oneOf("sm", "md", "lg", ""),
  color: PropTypes.oneOf('default',"primary", "secondary", "danger"),
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Button;