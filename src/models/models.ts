export interface IPokemonSpecies {
  id: number,
  slug: string,
  types: string[],
}

export interface IPartyMember {
  species: IPokemonSpecies,
  shiny: boolean,
}