import React, { useState } from 'react';

const Dropdown = ({ onChange, darkMode }) => {
  const [device, setDevice] = useState('desktop');

  const handleDeviceChange = (event) => {
    setDevice(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="mt-4 flex items-center justify-center space-x-4">
      <label className={`text-base md:text-lg font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        Choose a Device
      </label>
      <select
        value={device}
        onChange={handleDeviceChange}
        className={`border border-gray-300 p-2 rounded-lg w-full sm:w-40 ${darkMode ? 'bg-gray-700 text-white' : ''}`}
      >
        <option value="desktop">Desktop</option>
        <option value="mobile">Mobile</option>
      </select>
    </div>
  );
};

export default Dropdown;
