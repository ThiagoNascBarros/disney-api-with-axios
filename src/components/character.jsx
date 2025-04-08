import React from "react";

export default function Character({ characters }) {
  return (
    <div className="w-4xs h-min rounded-2xl p-3 hover:scale-105 hover:rotate-6 in-hover:rotate-1 text-black shadow-lg/50 hovrer:shadow-lg/50 transition duration-300 ease-in-out bg-white hover:bg-gray-200 ">
      <div>
        <img
          className="character-image w-full h-32 object-cover rounded-2xl"
          src={
            characters.imageUrl ||
            "https://static.wikia.nocookie.net/disney/images/7/7c/Noimage.png"
          }
          alt={characters.name}
        />
        <div>
          <h1 className="text-3xl font-bold mt-4">{characters.name}</h1>

          <div className="text-gray-950 font-bold text-sm">
            <a
              className="cursor-pointer underline hover:font-bold"
              href={characters.sourceUrl}
              target="_blank"
            >
              Fanclube de {characters.name}
            </a>
          </div>
        </div>

        <div className="">
          <h2 className="font-bold text-2xl">Filmes</h2>
          {characters.films &&
            characters.films.map(
              (
                film // Verifica se character.films existe e é um array
              ) => <li key={film}>{film}</li>
            )}
          {!characters.films && (
            <p>Este personagem não participou de filmes.</p>
          )}{" "}
          {/* Mensagem caso não haja filmes */}
        </div>
      </div>
    </div>
  );
}
