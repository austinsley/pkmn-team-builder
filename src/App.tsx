import React, { useState } from 'react';
import 'pokesprite-spritesheet/assets/pokesprite-pokemon-gen8.css';

import pokedex from './data/pokemon.json';
import { IPartyMember, IPokemonSpecies } from './models/models';
import { DexSprite } from './DexSprite';
import { PartyMember } from './PartyMember';

import './App.css';

function App() {
  const [team, setTeam] = useState([] as IPartyMember[]);
  
  const addToTeam = (pokemon: IPokemonSpecies) => {
    const updatedTeam = [...team];

    if (team.length === 6) {
      updatedTeam.shift();
    }
    updatedTeam.push({
      species: pokemon,
      shiny: false,
    });
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

  const toggleShiny = (index: number) => {
    const updatedTeam = [...team];

    if(!team[index]) {
      return;
    }
    updatedTeam[index].shiny = !updatedTeam[index].shiny;

    setTeam(updatedTeam);
  }

  return (
    <div className="App">
      <div className="team-container">
        {
          [...Array(6).keys()].map((i: number) => (
            <PartyMember key={i} pokemon={team[i]} shinySwap={() => toggleShiny(i)} remove={() => removeFromTeam(i)}></PartyMember>
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
