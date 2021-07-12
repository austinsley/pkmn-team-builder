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

  return (
    <div className="App">
      <h3>
        Team: { team.map(mon => mon.slug).join(', ') }
      </h3>
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
