import { Pokemon, PokemonInfoCard } from "../models/pokeApiModels";

export const fetchPokemonList = async (
  limit = 10,
  offset = 0,
): Promise<Pokemon[]> => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data?.results || [];
  } catch (err) {
    console.error("Error fetching Pokémon data:", err);
    throw err;
  }
};

export const getPokemonInfoCard = async (
  url: string,
): Promise<PokemonInfoCard | null> => {
  const res = await fetch(url);
  const details = await res.json();

  return {
    name: details?.name,
    id: details?.id,
    image: `https://img.pokemondb.net/artwork/${details?.name}.jpg`,
    types: details?.types.map(
      (pokemon: { type: { name: string } }) => pokemon.type.name,
    ),
  };
};
