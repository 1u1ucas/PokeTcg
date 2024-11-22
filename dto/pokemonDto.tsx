export interface StatsDto {
    HP: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  }
  
  export interface TypeDto {
    name: string;
    image: string;
  }
  
  export interface ResistanceDto {
    name: string;
    damage_multiplier: number;
    damage_relation: string;
  }
  
  export interface EvolutionDto {
    name: string;
    pokedexId: number;
  }
  
  export interface PokemonDto {
    id: number;
    pokedexId: number;
    name: string;
    image: string;
    sprite: string;
    slug: string;
    stats: StatsDto;
    apiTypes: TypeDto[];
    apiGeneration: number;
    apiResistances: ResistanceDto[];
    resistanceModifyingAbilitiesForApi: any[];
    apiEvolutions: EvolutionDto[];
    apiPreEvolution: string;
    apiResistancesWithAbilities: any[];
  }