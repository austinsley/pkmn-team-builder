import React from 'react';

import './App.css';
import './assets/pokesprite-pokemon-gen8.css';

import pokedex from './data/pokemon.json';
import { DexSprite } from './DexSprite';

function App() {
  return (
    <div className="App">
      {
        pokedex.map(pokemon =>
          <DexSprite key={pokemon.id} pokemon={pokemon} />
        )
      }
    </div>
  );
}

export default App;
