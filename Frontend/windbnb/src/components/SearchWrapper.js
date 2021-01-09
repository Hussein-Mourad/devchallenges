function SearchWrapper({ children, className }) {
  return (
    <div
      className={`search-wrapper relative z-0 inline-flex shadow-lg rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
}

export default SearchWrapper;
