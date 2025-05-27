import { EnumPokemonTypes } from "@/helpers/constants";

export type Pokemon = {
  name: string;
  url: string;
};

export interface PokemonInfoCard {
  name: string;
  id: number;
  image: string;
  types: EnumPokemonTypes[];
}

export interface ListOfPokemons {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface CurrentPokemonInfo extends PokemonInfoCard {
  weight: number;
  height: number;
  abilities: string[];
}
