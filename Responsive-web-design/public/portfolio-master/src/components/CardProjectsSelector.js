export const CardProjectsSelector = (props) => {
  return (
    <div className="my-10 p-5 shadow-lg max-w-full rounded-xl bg-white text-gray-600">
      <h1 className="text-2xl mb-5">Projects(3)</h1>
      <div className="flex">
        <button className="px-9 py-2 mr-5 bg-blue-500 text-white rounded-xl border border-blue-500">
          React
        </button>
        <button className=" px-9 py-2 text-gray-600 hover:text-blue-500 border border-gray-600 hover:border-blue-500 rounded-xl">
          Responsive
        </button>
      </div>
    </div>
  );
};
