import React from 'react';
import './DexSprite.css';

export const DexSprite = ({pokemon}: any) => (
  <div
    className={`sprite-container ${pokemon.types[0]}-primary ${pokemon.types[pokemon.types.length-1]}-secondary`}
  >
      <span className={`pokesprite pokemon ${pokemon.slug}`}></span>
  </div>
)