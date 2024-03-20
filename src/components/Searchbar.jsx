import React, { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className="searchbar">
      <form onSubmit={handleSubmit} className="form">
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
        <input
          type="text"
          className="input"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;