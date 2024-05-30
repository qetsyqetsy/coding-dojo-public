
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        setPokemonList(response.data.results);
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
