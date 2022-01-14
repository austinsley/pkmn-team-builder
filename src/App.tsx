import React, { useEffect, useState } from 'react';
import 'pokesprite-spritesheet/assets/pokesprite-pokemon-gen8.css';

import pokedex from './data/pokemon.json';
import { IPartyMember, IPokemonSpecies, ISpeciesFilters, PokemonType } from './models/models';
import { DexSprite } from './DexSprite';
import { FiltersContainer } from './FiltersContainer';
import { PartyMember } from './PartyMember';

import './App.css';

export const App = () => {
  const [team, setTeam] = useState([] as IPartyMember[]);
  const [filters, setFilters] = useState({
    allowedTypes: new Set(Object.values(PokemonType)),
    excludedTypes: new Set(),
    generation: new Set([... new Array(9).keys()].slice(1)),
    allowDuplicates: false,
  } as ISpeciesFilters);
  const [dexOptions, setDexOptions] = useState(pokedex as IPokemonSpecies[]);

  useEffect(() => {
    let newOptions = pokedex as IPokemonSpecies[];
    const speciesOnTeam = new Set(team.map(member => member.species));

    newOptions = newOptions.filter(species => {
      if (
        !filters.allowDuplicates &&
        team.length > 0 &&
        speciesOnTeam.has(species)
      ) {
        return false;
      }

      if (
        filters.allowedTypes.size > 0 &&
        species.types.every(type => !filters.allowedTypes.has(type))
      ) {
        return false;
      }

      if (
        filters.generation.size > 0 &&
        !filters.generation.has(species.generation)
      ) {
        return false;
      }

      if (
        filters.excludedTypes.size > 0 &&
        species.types.some(type => filters.excludedTypes.has(type))
      ) {
        return false;
      }

      return true;
    });

    setDexOptions(newOptions);
  }, [filters, team]);

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

    if (!team[index]) {
      return;
    }
    updatedTeam.splice(index, 1);
    setTeam(updatedTeam);
  }

  const toggleShiny = (index: number) => {
    const updatedTeam = [...team];

    if (!team[index]) {
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

      <FiltersContainer filters={{ ...filters }} setFilters={setFilters} />

      <div className="dex-container">
        {
          dexOptions.map((species: IPokemonSpecies) =>
            <DexSprite key={species.id} pokemon={species} handleClick={() => addToTeam(species)} />
          )
        }
      </div>
    </div>
  );
}

export default App;
