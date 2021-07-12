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

    if(!team[index]) {
      return;
    }
    updatedTeam.splice(index, 1);
    setTeam(updatedTeam);
  }

  return (
    <div className="App">
      {
          [...Array(6).keys()].map((i: number) => 
            <DexSprite key={i} pokemon={team[i]} handleClick={() => removeFromTeam(i)} />
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
