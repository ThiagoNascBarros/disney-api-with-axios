import React from "react";
import './character.css'; 

export default function Character({characters}) {

  return (

    <div className="w-4xs rounded-2xl bg-linear-to-b to-cyan-500 from-blue-500 p-4 text-white">
      <div>
        <img 
          className="character-image w-full h-32 object-cover rounded-2xl"
          src={characters.imageUrl || 'https://static.wikia.nocookie.net/disney/images/7/7c/Noimage.png'} 
          alt={characters.name}
          />
        <h1 className="text-3xl font-bold mt-4">{ characters.name }</h1>
        
        <div>
          <h2 className="font-bold text-2xl">Filmes</h2>
          {characters.films && characters.films.map((film) => ( // Verifica se character.films existe e é um array
            <li key={film}>{film}</li>
          ))}
          {!characters.films && <p>Este personagem não participou de filmes.</p>} {/* Mensagem caso não haja filmes */}
        </div>

        <div>
            <h2 className="font-bold text-2xl">TV Shows</h2>
            { characters.tvShows && characters.tvShows.map((tvShow) => (
                <li key={ tvShow }>{ tvShow  }</li>
            ))}
        </div>
        </div>
    </div>
    
  );
}