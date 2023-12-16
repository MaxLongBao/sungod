import React, { useState } from 'react';

const Dropdown = ({ options, handleLensChange }) => {

  const [selectedOption, setSelectedOption] = useState('');
  const handleSelect = (e) => {
    handleLensChange(e.target.value);
    setSelectedOption(e.target.value);
  };

  return (
    <div className='dropdown'>
      <select value={selectedOption} onChange={handleSelect} className='text-black border-2 border-black'>
        <option value="" disabled hidden>Select a lens</option>
        {options.map(({id, name, sku}) => (
          <option key={id} value={sku}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
