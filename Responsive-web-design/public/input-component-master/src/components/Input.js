import React, { useState } from 'react'
import Icon from "@material-ui/core/Icon";


function Input({ error }) {
  const [color, setColor] = useState('blue')
  if (error) {
    setColor('red')
  }
  return (
    <div>
      <div className="my-4 relative text-gray-700 max-w-min">
        <span
          className="absolute top-1/2 transform -translate-y-1/2  left-3 mt-1 focus:outline-none"
          tabIndex="0"
        >
          <Icon className="input-icon">phone</Icon>
        </span>
        <div className="flex flex-col-reverse">
          <input
            type="text"
            placeholder="Placeholder"
            className={`input my-1 py-4 pl-10 text-gray-900 border border-gray-500 rounded-lg hover:border-gray-900 focus:border-${color}-400 focus:outline-none`}
            
          />
          <label className="input-label">Label</label>
        </div>
        <small className="block text-xs text-gray-400">Some text</small>
      </div>
      

      <div className="my-3">
        <label className="block text-sm text-gray-700 focus:text-blue-400">
          Label
        </label>
        <textarea
          type="text"
          className="my-1 pl-3 pr-6 pt-4 border border-gray-500 rounded-lg placeholder-gray-500 hover:border-gray-900 focus:outline-none focus:border-blue-400 resize-none"
          placeholder="Placeholder"
          cols="22"
          rows="4"
        ></textarea>
        <small className="block text-xs text-gray-400">Some text</small>
      </div>
    </div>
  );
}

export default Input;

