import React from 'react';
import './DexSprite.css';
import { IPokemonSpecies } from './models/models';

export const DexSprite = ({ pokemon, handleClick, shiny }: {
  pokemon: IPokemonSpecies,
  handleClick?: () => void,
  shiny?: boolean,
}) => (
  <li
    className={`sprite-container ${pokemon.types[0]}-primary ${pokemon.types[pokemon.types.length - 1]}-secondary`}
  >
    <span className={`pokesprite pokemon ${pokemon.slug}${shiny ? ' shiny' : ''}`} onClick={handleClick} title={pokemon.slug}></span>
  </li>
);