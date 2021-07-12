import React, { useState } from 'react';

import pokedex from './data/pokemon.json';
import { DexSprite } from './DexSprite';

import './App.css';
import './assets/pokesprite-pokemon-gen8.css';

export interface IPokemonSpecies {
  id: number,
  slug: string,
  types: string[],
}

function App() {
  const [team, setTeam] = useState([] as IPokemonSpecies[]);
  
  const addToTeam = (pokemon: IPokemonSpecies) => {
    const updatedTeam = [...team];

    if (team.length === 6) {
      updatedTeam.shift();
    }
    updatedTeam.push(pokemon);
    setTeam(updatedTeam);
  }

  const removeFromTeam = (index: number) => {
    const updatedTeam = [...team];

    updatedTeam.splice(index, 1);
    setTeam(updatedTeam);
  }

  return (
    <div className="App">
      {
        team.map((mon: IPokemonSpecies, index: number) => 
          <DexSprite key={index} pokemon={mon} handleClick={() => removeFromTeam(index)} />
        )
      }
      <br />
      <ul>
      {
        pokedex.map((species: IPokemonSpecies) =>
          <DexSprite key={species.id} pokemon={species} handleClick={() => addToTeam(species)}/>
        )
      }
      </ul>
    </div>
  );
}

export default App;
