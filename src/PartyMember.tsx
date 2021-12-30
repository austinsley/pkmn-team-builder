import React from 'react';
import { IPokemonSpecies } from "./App";
import { DexSprite } from './DexSprite';

import './PartyMember.css';

export const PartyMember = ({pokemon, handleClick}: {
    pokemon?: IPokemonSpecies,
    handleClick?: () => void,
}) => (
    <div className="PartyMember">
        {
            pokemon ? (
                <>
                    <DexSprite pokemon={pokemon}></DexSprite>
                    <p>{pokemon.slug}</p>
                    <p>{pokemon.types[0]}{pokemon.types[1] ? ` - ${pokemon.types[1]}` : ''}</p>
                    <button className="remove-button" onClick={handleClick}>remove</button>
                </>
            ) : (
                <DexSprite></DexSprite>
            )
        }
    </div>
);