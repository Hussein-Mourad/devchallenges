const NavButton = ({ children, onClick, view }) => {
  return (
    <button
      className={`relative text-sm text-gray-800 px-5 py-2 mx-8 border-b-2 border-transparent focus:outline-none`}
      onClick={(e) => onClick(e)}
    >
      {children}
      {view === children && (
        <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/5 h-1 bg-blue-500 rounded-lg -mb-1"></span>
      )}
    </button>
  );
};
function Navigation({ className, changeView, view }) {
  return (
    <nav
      className={`flex justify-between border-b border-gray-300 ${className}`}
    >
      <NavButton onClick={changeView} view={view}>All</NavButton>
      <NavButton onClick={changeView} view={view}>Active</NavButton>
      <NavButton onClick={changeView} view={view}>Completed</NavButton>
    </nav>
  );
}

export default Navigation;
