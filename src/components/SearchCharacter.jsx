import React from 'react';

function SearchBar({ search, onSearchChange }) {
  return (
    <input
      className="rounded-2xl border-1 w-full m-auto border-gray-900 p-2.5 mt-10"
      type="text"
      placeholder="Digite o nome do personagem"
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default SearchBar;
