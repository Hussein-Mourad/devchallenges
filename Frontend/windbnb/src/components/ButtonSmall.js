function ButtonSmall({ children, className, onClick }) {
  return (
    <button
      className={`${className} relative px-1 rounded-md text-gray-800 border border-gray-400 hover:text-gray-600 focus:border-blue-300 focus:outline-none`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonSmall;
