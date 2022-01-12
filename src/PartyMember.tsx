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
}) =>
  <div className='PartyMember'>
    {
      pokemon ? (
        <>
          <div className='mod-button-container'>
            <span className={`mod-button shiny-toggle ${pokemon.shiny ? 'active' : 'inactive'}`} onClick={shinySwap}>★</span>
            <span className='mod-button remove-button' onClick={remove}>×</span>
          </div>

          <img src={`https://img.pokemondb.net/sprites/home/${pokemon.shiny ? 'shiny' : 'normal'}/${pokemon.species.slug}.png`} alt={pokemon.species.slug} />

          <span>{pokemon.species.slug}</span>
          <span>{pokemon.species.types.join('/')}</span>
        </>
      ) : (
        <img className='placeholder-sprite' src='https://img.pokemondb.net/sprites/home/shiny/ditto.png' alt='Placeholder' />
      )
    }
  </div>;
