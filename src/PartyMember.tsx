import React, { useState } from 'react';
import { DexSprite } from './DexSprite';
import { IPartyMember } from './models/models';

import './PartyMember.css';

export const PartyMember = ({pokemon, remove, shinySwap}: {
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
        <p>{pokemon.species.slug}</p>
        <p>{pokemon.species.types[0]}{pokemon.species.types[1] ? ` - ${pokemon.species.types[1]}` : ''}</p>
      </div>
    );
};
