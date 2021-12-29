import React from 'react';
import { IPokemonSpecies } from './App';
import './DexSprite.css';

export const DexSprite = ({pokemon, handleClick}: {
  pokemon?: IPokemonSpecies,
  handleClick?: () => void,
}) => pokemon ? (
    <li
      className={`sprite-container ${pokemon.types[0]}-primary ${pokemon.types[pokemon.types.length-1]}-secondary`}
    >
      <span className={`pokesprite pokemon ${pokemon.slug}`} onClick={handleClick}></span>
    </li>
  ) : (
    <li
      className='sprite-container mystery-primary mystery-secondary'
    >
      <span className='pokesprite pokemon ditto shiny'></span>
    </li>
  )