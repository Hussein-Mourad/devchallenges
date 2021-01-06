import Icon from "@material-ui/core/Icon";

function Input() {
  return (
    <div>
      <div className="my-4 relative text-gray-500 max-w-min">
        <span className="absolute top-1/2 transform -translate-y-1/2  left-3 mt-1">
          <Icon>phone</Icon>
        </span>
        <div className="flex flex-col-reverse">
          <input
            type="text"
            placeholder="Placeholder"
            className="input"
          />
        <label className="input-label">Label</label>
        </div>
        <small className="block text-xs text-gray-400">Some text</small>
      </div>

      <div className="my-3">
        <label className="input-label">Label</label>
        <div className="input-wrapper">
          {/* <Icon className="mr-2">phone</Icon> */}
          <input type="text" className="input" placeholder="Placeholder" />
          {/* <Icon>lock</Icon> */}
        </div>
        <small className="block text-xs text-gray-400">Some text</small>
      </div>

      <div className="my-3">
        <label className="block text-sm text-gray-700 focus:text-blue-600">
          Label
        </label>
        <div className="inline-flex items-center my-1 px-2 text-gray-500 border border-red-600 rounded-lg hover:border-gray-900 focus:border-red-600">
          {/* <Icon className="mr-2">phone</Icon> */}
          <input
            type="text"
            className="mx-1 py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-blue-600 rounded-lg"
            placeholder="Placeholder"
          />
          {/* <Icon>lock</Icon> */}
        </div>
        <small className="block text-xs text-red-600">Some text</small>
      </div>

      <div className="my-3">
        <label className="block text-sm text-gray-700 focus:text-blue-600">
          Label
        </label>
        <div className="inline-flex items-center my-1 px-2 text-gray-500 border border-gray-200 bg-gray-100 rounded-lg cursor-not-allowed">
          {/* <Icon className="mr-2">phone</Icon> */}
          <input
            type="text"
            className="mx-1 py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-blue-600 rounded-lg cursor-not-allowed"
            placeholder="Placeholder"
            disabled
          />
          {/* <Icon>lock</Icon> */}
        </div>
        <small className="block text-xs text-gray-400">Some text</small>
      </div>

      <div className="my-3">
        <label className="block text-sm text-gray-700 focus:text-blue-600">
          Label
        </label>
        <div className="inline-flex items-center my-1 px-2 text-gray-500 border border-gray-500 rounded-lg hover:border-gray-900 focus:border-blue-600">
          {/* <Icon className="mr-2">phone</Icon> */}
          <input
            type="text"
            className="mx-1 py-4  text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-blue-600 rounded-lg w-full"
            placeholder="Placeholder"
          />
          {/* <Icon className="">lock</Icon> */}
        </div>
      </div>

      <div className="my-3">
        <label className="block text-sm text-gray-700 focus:text-blue-600">
          Label
        </label>
        <textarea
          type="text"
          className="my-1 pl-3 pr-6 pt-4 border border-gray-500 rounded-lg placeholder-gray-500 hover:border-gray-900 focus:outline-none focus:border-blue-600 focus:placeholder-blue-600 resize-none"
          placeholder="Placeholder"
          cols="22"
          rows="4"
        ></textarea>
        <small className="block text-xs text-gray-400">Some text</small>
      </div>

      {/* <div className="my-3 relative">

        <Icon className="absolute top-1/2 transform -translate-y-1/2">lock</Icon>
        <div className="flex flex-col-reverse">
          <input
            type="text"
            className="input border border-gray-500 px-3 max-w-min"
            placeholder="Placeholder"
          />
          <label className="input-label">Label</label>
        </div>
        <small className="block text-xs text-gray-400">Some text</small>
      </div> */}
    </div>
  );
}

export default Input;

export function Archive() {
  return (
    <div>
      <div className="my-3">
        <label className="block text-sm text-gray-700 focus:text-blue-600">
          Label
        </label>
        <input
          type="text"
          className="my-1 px-6 py-4 border border-gray-500 rounded-lg placeholder-gray-500 hover:border-gray-900 focus:outline-none focus:border-blue-600 focus:placeholder-blue-600"
          placeholder="Placeholder"
        />
        <small className="block text-xs text-gray-400">Some text</small>
      </div>
      <div className="my-3">
        <label className="text-sm text-red-600 block focus:text-red-600">
          Label
        </label>
        <input
          type="text"
          className="my-1 px-6 py-4 border border-red-600 rounded-lg placeholder-gray-500 hover:border-gray-900 focus:outline-none focus:border-red-600 focus:placeholder-red-600"
          placeholder="Placeholder"
        />
      </div>
      <div className="my-3">
        <label className="text-sm text-gray-700 block">Label</label>
        <input
          type="text"
          className="my-1 px-6 py-4 border border-gray-200 bg-gray-100 rounded-lg placeholder-gray-500 focus:outline-none cursor-not-allowed"
          placeholder="Placeholder"
          disabled
        />
      </div>

      <div className="my-3">
        <label className="block text-sm text-gray-700 focus:text-blue-600">
          Label
        </label>
        <div className="inline-flex items-center my-1 px-2  text-gray-500 border border-gray-500 rounded-lg hover:border-gray-900 focus:border-blue-600">
          {/* <Icon className="pr-2">phone</Icon> */}
          <input
            type="text"
            className="px-3 py-4 placeholder-gray-500 focus:outline-none focus:placeholder-blue-600"
            placeholder="Placeholder"
          />
          {/* <Icon>lock</Icon> */}
        </div>
        <small className="block text-xs text-gray-400">Some text</small>
      </div>
    </div>
  );
}
