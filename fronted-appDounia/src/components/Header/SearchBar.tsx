import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="d-flex w-100 bg-light p-2 rounded-4 align-items-center">
      <select className="form-select border-0 bg-transparent me-2 d-none d-md-block" style={{ maxWidth: '150px' }}>
        <option>All Categories</option>
        <option>Dried Fruits</option>
        <option>Dairy Products</option>
        <option>Edible Oils</option>
      </select>
      <input
        type="text"
        className="form-control border-0 bg-transparent"
        placeholder="Search "
      />
    </div>
  );
};

export default SearchBar;
