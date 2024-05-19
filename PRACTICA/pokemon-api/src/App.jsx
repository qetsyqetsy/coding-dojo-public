import React, { useState } from 'react';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => response.json())
      .then(data => {
        setPokemonList(data.results);
      })
      .catch(err => {
        console.log('Error fetching Pokemon:', err);
      });
  };

  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
