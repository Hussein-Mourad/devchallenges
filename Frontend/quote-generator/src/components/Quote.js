function Quote({ children }) {
  return (
    <div className="grid grid-cols-12 mb-14 max-w-xl">
      <span className="w-2 bg-yellow-200"></span>
      <p className="text-lg text-justify ml-3 col-span-11">{children}</p>
    </div>
  );
}

export default Quote;
