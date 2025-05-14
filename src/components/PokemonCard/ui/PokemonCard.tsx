import React, { FC, useEffect, useState } from "react";

import { useNavigate } from "react-router";

import { Pokemon, PokemonInfoCard } from "@/api/models/pokeApiModels";
import { getPokemonInfoCard } from "@/api/pokeApi";
import { LoadingCard } from "@/components/LoadingCard";
import { Tags } from "@/components/Tags";
import { EnumPokemonTypes, PokemonTypesConfig } from "@/helpers/constants";

import s from "./PokemonCard.module.scss";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const navigate = useNavigate();

  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfoCard | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCurrentInfo = async () => {
      try {
        setLoading(true);
        const info = await getPokemonInfoCard(pokemon.url);
        if (info) {
          setPokemonInfo(info);
        }
      } catch {
        console.log();
      } finally {
        setLoading(false);
      }
    };

    getCurrentInfo();
  }, [pokemon.url]);

  const handleClick = () => {
    navigate("information/" + pokemon.name);
  };

  if (loading) {
    return <LoadingCard />;
  }
  return (
    <div className={s.card} onClick={handleClick}>
      {pokemonInfo && (
        <>
          <div className={s.card__content}>
            <div>
              <p className={s.title}>{pokemonInfo.name}</p>
              <p className={s.subtitle}>#{pokemonInfo.id}</p>
            </div>
            <div className={s.card__tags}>
              {pokemonInfo.types.map((type: EnumPokemonTypes) => (
                <Tags
                  key={type + "-" + pokemonInfo.id}
                  text={PokemonTypesConfig[type].text}
                  color={PokemonTypesConfig[type].color}
                />
              ))}
            </div>
          </div>
          {pokemonInfo?.image && (
            <img
              className={s.card__image}
              src={pokemonInfo.image}
              alt={pokemonInfo.name}
            />
          )}
        </>
      )}
    </div>
  );
};
