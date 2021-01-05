import React from "react";

const Button = (props) => {
  return (
    <div className="container  p-10 ">
      <button className="btn btn-md shadow-lg">Default</button>
      <button className="outlin">Default</button>
      <button className="m-3 btn-md btn-primary btn-primary-outline">Default</button>
      <button className="m-3 btn-md btn-primary btn-primary-outline">Default</button>
      <button className="m-3 btn-md btn-primary btn-primary-outline">Default</button>
      <button className=" m-3 px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-opacity-90 focus:bg-opacity-90 focus:outline-none">
        Default
      </button>
      <button className=" m-3 px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-opacity-90 focus:bg-opacity-90 focus:outline-none">
        Default
      </button>
      <button className=" m-3 px-5 py-2 rounded-lg bg-gray-200 text-gray-400 focus:outline-none cursor-not-allowed">
        Disabled
      </button>
      <button className=" m-3 px-3 py-1 rounded-lg bg-blue-600 text-white hover:bg-opacity-90 focus:bg-opacity-90 focus:outline-none">
        Default
      </button>
      <button className=" m-3 px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-opacity-90 focus:bg-opacity-90 focus:outline-none">
        Default
      </button>
      <button className=" m-3 px-7 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-800 hover:bg-opacity-90  focus:outline-none">
        Default
      </button>
      <button className="btn-lg btn-primary">Default</button>

      <button className="btn-lg btn-secondary">Primary</button>
    </div>
  );
};

export default Button;
