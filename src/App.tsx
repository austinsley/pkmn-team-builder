import React, { useState } from 'react';
import 'pokesprite-spritesheet/assets/pokesprite-pokemon-gen8.css';

import pokedex from './data/pokemon.json';
import { PartyMember } from './PartyMember';
import { DexSprite } from './DexSprite';

import './App.css';

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
      <div className="team-container">
        {
          [...Array(6).keys()].map((i: number) => (
            <PartyMember key={i} pokemon={team[i]} handleClick={() => removeFromTeam(i)}></PartyMember>
          ))
        }
      </div>
      
      <div className="dex-container">
      {
        pokedex.map((species: IPokemonSpecies) =>
          <DexSprite key={species.id} pokemon={species} handleClick={() => addToTeam(species)}/>
        )
      }
      </div>
    </div>
  );
}

export default App;
