import classNames from "classnames";

export default function InputGroup({
  className,
  inputClassName,
  leftIcon,
  rightIcon,
  label,
  error,
  multiline,
  margin,
  ...props
}) {
  const mainStyle = classNames(
    className,
    "flex items-center border border-gray-300 rounded-md text-gray-500 focus-within:border-blue-500",
    { "px-3": leftIcon || rightIcon }
  );
  const inputStyle = classNames(
    inputClassName,
    "border-none w-full rounded-md focus:ring-0 bg-transparent",
    { "pl-3": leftIcon },
    { "pr-3": rightIcon }
  );
  const textAreaStyle = classNames(
    inputClassName,
    "border border-gray-300 rounded-md text-gray-500 focus-within:border-blue-500 bg-transparent"
  );

  if (multiline) {
    return (
      <div className="flex flex-col">
        {label && (
          <label className="text-sm dark:text-gray-200" htmlFor={label}>
            {label}
          </label>
        )}
        <textarea
          id={label ?? ""}
          className={textAreaStyle}
          style={{ resize: "none" }}
          {...props}
        ></textarea>
      </div>
    );
  }
  return (
    <div>
      {label && (
        <label className="text-sm dark:text-gray-200" htmlFor={label}>
          {label}
        </label>
      )}
      <div className={mainStyle}>
        {leftIcon}

        <input id={label ?? ""} className={inputStyle} {...props} />

        {rightIcon}
      </div>
      {error && <small className="text-red-500">{error}</small>}
    </div>
  );
}
