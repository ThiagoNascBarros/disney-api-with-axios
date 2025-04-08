import React, { useEffect, useState } from 'react';
import apiDisney from './service/api';
import CharacterCard from './components/character';
import SearchBar from './components/SearchCharacter';

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function getCharacter() {
      if (search.trim() !== '') {
        try {
          const response = await apiDisney.get('/character', {
            params: { name: search },
          });
          setCharacters(response.data.data);
        } catch (error) {
          console.error('Erro ao buscar personagens:', error);
        }
      }
    }
    getCharacter();
  }, [search]);

  return (
    <div className="container mt-auto mx-auto p-18">
      <h1 className='text-center text-5xl font-bold  animate-bounce'>Personagens da Disney</h1>
      <SearchBar search={search} onSearchChange={setSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {characters.length > 0 ? (
          characters.map((character) => (
            <CharacterCard key={character._id} character={character} />
          ))
        ) : (
          <p>Nenhum personagem encontrado.</p>
        )}
      </div>
    </div>
  );
}
