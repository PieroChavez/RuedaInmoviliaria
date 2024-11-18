import React, { useState } from 'react';
import './SearchBar.css';
import { assets } from '../../../assets/assets'; // Ajusta esta ruta según tu proyecto

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    alert(`Buscando: ${searchTerm}`);
    setSearchTerm(''); // Limpia el input después de la búsqueda
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        <img src={assets.search_icon} alt="Buscar" className="search-icon" />
      </button>
    </div>
  );
};

export default SearchBar;
