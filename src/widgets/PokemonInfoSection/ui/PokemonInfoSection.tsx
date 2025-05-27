import React, { FC } from "react";

import { CurrentPokemonInfo } from "@/api/models/pokeApiModels";
import { Tags } from "@/components/Tags";
import { PokemonTypesConfig } from "@/helpers/constants";

import s from "./PokemonInfoSection.module.scss";

interface PokemonInfoSectionProps {
  pokemonInfo: CurrentPokemonInfo;
}

export const PokemonInfoSection: FC<PokemonInfoSectionProps> = ({
  pokemonInfo,
}) => {
  return (
    <section className={s.wrapper}>
      <div className={s.pokemonInfo}>
        <div className={s.pokemonInfo__header}>
          <div className={s.container}>
            <h3 className={s.title}>title</h3>
            <div className={s.card__tags}>
              {pokemonInfo.types.map((type) => (
                <Tags
                  key={type + "-" + pokemonInfo.id}
                  text={PokemonTypesConfig[type].text}
                  color={PokemonTypesConfig[type].color}
                />
              ))}
            </div>
          </div>
          <span className={s.currentId}>#{pokemonInfo.id}</span>
        </div>

        {pokemonInfo?.image && (
          <img
            className={s.card__image}
            src={pokemonInfo.image}
            alt={pokemonInfo.name}
          />
        )}

        <div className={s.pokemonInfo__params}>
          <div className={s.section}>
            <p className={s.section__values}>{pokemonInfo.weight} kg</p>
            <p className={s.section__title}>вес</p>
          </div>{" "}
          <div className={s.section}>
            <p className={s.section__values}>{pokemonInfo.height} m</p>
            <p className={s.section__title}>рост</p>
          </div>
          <div className={s.section}>
            <p className={s.abilities}>
              {pokemonInfo.abilities.map((ability) => (
                <span className={s.section__values}>{ability}</span>
              ))}
            </p>
            <p className={s.section__title}>способности</p>
          </div>
        </div>
      </div>
    </section>
  );
};
