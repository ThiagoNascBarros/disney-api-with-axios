import React, { useState, useEffect } from "react";
import apiDisney from "./service/api";
import Character from "./components/character";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [loading, setLoading] = useState(false);

  async function getCharacter(name = "") {
    try {
      setLoading(true);
      const response = await apiDisney.get("/character", {
        params: { name }, // Adiciona o parâmetro de busca
      });

      // Verifica se a resposta contém um array

      if (Array.isArray(response.data.data)) {
        setCharacters(response.data.data);
      } else {
        // Define como vazio se não for um array
        setCharacters([]); 
      }
    } catch (error) {
      console.error("Erro ao buscar dados: ", error);
      // Limpa os personagens em caso de erro
      setCharacters([]); 
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCharacter(); // Busca inicial sem filtro
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    getCharacter(searchName); // Busca com o nome fornecido
  };

  return (
    <div className="text-black max-w-7xl m-auto">
      <h1 className="text-center font-bold text-6xl mt-18">Personagens da Disney</h1>
      
      {/* Campo de busca */}
      <form onSubmit={handleSearch} className="text-center mt-12">
        <input
          type="text"
          placeholder="Digite o nome do personagem"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border p-2 w-225 rounded-lg"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Buscar
        </button>
      </form>

      <div className="grid grid-cols-4 gap-10 max-w-7xl m-auto mt-10">
        {loading && <p className="text-center">Carregando...</p>}
        {characters.map((character) => (
          <Character key={character._id} characters={character} /> // Adiciona key única
        ))}
        {!loading && characters.length === 0 && (
          <p className="text-center">Nenhum personagem encontrado.</p>
        )}
      </div>
    </div>
  );
}