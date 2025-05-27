import { CurrentPokemonInfo } from "@/api/models/pokeApiModels";

type CacheEntry = {
  data: CurrentPokemonInfo;
  timestamp: number;
};

export const cachePokemon: Record<string, CacheEntry> = {};
