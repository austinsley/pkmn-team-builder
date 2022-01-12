import React from 'react';
import { DexSprite } from './DexSprite';
import { IPartyMember } from './models/models';

import 'pokesprite-spritesheet/assets/pokesprite-inventory.css';
import 'pokesprite-spritesheet/assets/pokesprite-misc.css';

import './PartyMember.css';

export const PartyMember = ({ pokemon, remove, shinySwap }: {
  pokemon?: IPartyMember,
  remove?: () => void,
  shinySwap?: () => void,
}) => {
  if (!pokemon) {
    return <DexSprite></DexSprite>
  }

  return (
    <div className='PartyMember'>
      <div className='mod-button-container'>
        <span className={`mod-button shiny-toggle ${pokemon.shiny ? 'active' : 'inactive'}`} onClick={shinySwap}>★</span>
        <span className='mod-button remove-button' onClick={remove}>×</span>
      </div>
      <DexSprite pokemon={pokemon.species} shiny={pokemon.shiny}></DexSprite>

      <span>{pokemon.species.slug}</span>
      <span>{pokemon.species.types[0]}{pokemon.species.types[1] ? `/${pokemon.species.types[1]}` : ''}</span>
    </div>
  );
};
