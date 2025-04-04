import React, { useState, useEffect } from "react";
import apiDisney from "./service/api";
import Character from "./components/character.jsx";

export default function App() {

  const [ characters, setCharacters ] = useState([]);

  useEffect(() => {

    async function getCharacter() {
      try {
        const response = await apiDisney.get("/character");
        console.log(response.data);
        setCharacters(response.data.data);
      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
      }
    }

    getCharacter();    
  }, []);
  
  return (
    <div className="bg-gradient-to-b from-blue-500 to-cyan-500 ">
      <h1 className="text-center font-bold text-6xl mt-12">Personagens da Disney</h1>
      <div  className="grid grid-cols-3 gap-28 max-w-5xl m-auto mt-10 p-5">
      { characters.map((character) => (
        <Character key={character.id} characters={character} />
      )) }

      { characters.length === 0 && (
        <p className="text-center">Carregando...</p>
      )}
      </div>
    </div>
  )

};