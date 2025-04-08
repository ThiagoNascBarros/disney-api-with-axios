import React from 'react';

function CharacterCard({ character }) {
  return (
    <div className="mt-18 bg-gray-300 p-4 rounded-2xl hover:rotate-2 hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg">
      <div>
      {character.imageUrl && (
        <img
          className="character-image w-full h-48 object-cover rounded-2xl "
          src={
            character.imageUrl ||
            "https://static.wikia.nocookie.net/disney/images/7/7c/Noimage.png"
          }
          alt={character.name}
        />
      )}
      </div>
      <div className=''>
        <div>
          <h4 className='font-semibold text-3xl'>{character.name}</h4>
          {character.sourceUrl && (
            <a href={character.sourceUrl} className='underline text-2xl'>Link de FanClube</a>
          )}
        </div>
        <div>
          <h4 className='text-2xl font-medium'>Filmes</h4>
          {character.films &&
            character.films.map(
              (
                film // Verifica se character.films existe e é um array
              ) => <li key={film}>{film}</li>
            )}
          {!character.films && (
            <p>Este personagem não participou de filmes.</p>
          )}{" "}
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
