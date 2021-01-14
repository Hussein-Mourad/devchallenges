
function Button({ className, children, bgColor, onClick }) {
  return (
    <button
          className={`px-4 py-3 inline-flex items-center text-white text-sm font-semibold rounded-xl shadow hover:bg-opacity-90 focus:outline-none focus:bg-opacity-95 ${className} ${bgColor}`}
          onClick={onClick}
    >
      {children}
    </button>
  );
}


export default Button;
