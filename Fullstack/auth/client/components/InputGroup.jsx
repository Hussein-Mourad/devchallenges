import classNames from "classnames";

export default function InputGroup({
  className,
  leftIcon,
  rightIcon,
  ...props
}) {
  const mainStyle = classNames(
    className,
    "px-3 my-2 flex items-center border border-gray-300 rounded-md text-gray-500 focus-within:border-blue-500"
  );
  const inputStyle = classNames(
    "border-none w-full rounded-md focus:ring-0 bg-transparent",
    { "pl-3": leftIcon },
    { "pr-3": rightIcon }
  );
  return (
    <div className={mainStyle}>
      {leftIcon}
      <input className={inputStyle} {...props} />
      {rightIcon}
    </div>
  );
}
