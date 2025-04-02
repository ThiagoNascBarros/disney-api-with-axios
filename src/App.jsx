import React, { useState, useEffect } from "react";
import apiDisney from "./service/api";

export default function App() {
  const [ character, setCharacter ] = useState([]);

  useEffect(() => {

    async function getCharacter() {
      try {
        const res = await apiDisney.get("6160");
        console.log(res.data);
        setCharacter(res.data);
      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
      }
    }

    getCharacter();    
  }, []);

  return (

    <div className="app-container">
      <h1 className="title">DisneyAPI - Vite + React</h1>

      <div className="character-container">
        { character.map(item => (
          <div key={ item._id } className="character-card">
            { item.image_url && (
              <img 
                src={ item.imageUrl }
                alt={ item.name }
                className="character-image"
              />  
            )}
            <div className="character-info">
              <h1>{ item.name }</h1>
              <p>Fan-Clube de { item.name }: { item.sourceUrl }</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );

};