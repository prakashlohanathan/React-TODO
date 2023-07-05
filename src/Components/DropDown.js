import React from 'react';

const DropDown = ({ selectedOption, onSelect }) => {
  const handleSelect = (e) => {
    const selectedStatus = e.target.value;
    if (typeof onSelect === 'function') {
      onSelect(selectedStatus);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '10px' }}>
      <label htmlFor="status-filter">Filter by Status:</label>
      <select id="status-filter" value={selectedOption} onChange={handleSelect}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>
    </div>
  );
};

export default DropDown;
