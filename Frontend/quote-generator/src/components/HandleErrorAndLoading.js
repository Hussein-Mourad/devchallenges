function HandleErrorAndLoading({ error, isLoading }) {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 ">
      {error && (
        <div className="text-lg text-gray-900 text-center">{error}</div>
      )}
      {!error && isLoading && (
        <div className="text-2xl text-gray-800">Loading...</div>
      )}
    </div>
  );
}

export default HandleErrorAndLoading;
