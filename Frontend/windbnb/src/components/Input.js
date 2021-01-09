import { useState } from "react";
function Input({ className, placeholder }) {
  const [value, setValue] = useState("");
  const onChange = () => {
    setValue(value);
  };
  return (
    <input
      type="text"
      className={`search-wrapper-item relative inline-flex items-center px-3 py-4 border border-gray-200 bg-white leading-5  transition ease-in-out duration-150 rounded-xl focus:outline-none ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
