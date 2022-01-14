export enum PokemonType {
  BUG = 'bug',
  DARK = 'dark',
  DRAGON = 'dragon',
  ELECTRIC = 'electric',
  FAIRY = 'fairy',
  FIGHTING = 'fighting',
  FIRE = 'fire',
  FLYING = 'flying',
  GHOST = 'ghost',
  GRASS = 'grass',
  GROUND = 'ground',
  ICE = 'ice',
  NORMAL = 'normal',
  POISON = 'poison',
  PSYCHIC = 'psychic',
  ROCK = 'rock',
  STEEL = 'steel',
  WATER = 'water',
}

export interface ISpeciesFilters {
  allowedTypes: Set<PokemonType>,
  excludedTypes: Set<PokemonType>,
  allowDuplicates: boolean,
}

export interface IPokemonSpecies {
  id: number,
  slug: string,
  types: PokemonType[],
  generation: number,
}

export interface IPartyMember {
  species: IPokemonSpecies,
  shiny: boolean,
}