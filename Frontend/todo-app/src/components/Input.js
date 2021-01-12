
function Input({ className, value, onChange }) {
  return (
    <input type="text"
          className={`p-3 border border-gray-200 rounded-lg focus:outline-none placeholder-gray-600  ${className}`}
          placeholder="Add details"
          value={value}
          onChange={onChange}
    />
  );
}


export default Input;
