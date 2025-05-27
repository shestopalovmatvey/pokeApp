import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router";

import { CurrentPokemonInfo } from "@/api/models/pokeApiModels";
import { getCurrentPokemonInfo } from "@/api/pokeApi";
import { MainHeader } from "@/components/MainHeader";
import { Page } from "@/components/Page";
import { TIME_LIMIT } from "@/helpers/constants";
import { cachePokemon } from "@/helpers/pokemonCache";
import { PokemonInfoSection } from "@/widgets/PokemonInfoSection";

import s from "./PokemonInfoPage.module.scss";

export const PokemonInfoPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [currentPokemonInfo, setCurrentPokemonInfo] =
    useState<CurrentPokemonInfo | null>(null);

  useEffect(() => {
    const getCurrentPokemon = async () => {
      try {
        const dateNow = Date.now();
        const cacheData = params.name ? cachePokemon[params.name] : undefined;
        const isCacheValid =
          cacheData && dateNow - cacheData.timestamp < TIME_LIMIT;

        if (params.name && (!cacheData || !isCacheValid)) {
          const info = await getCurrentPokemonInfo(params?.name);
          if (info) {
            cachePokemon[params.name] = {
              data: info,
              timestamp: dateNow,
            };
            setCurrentPokemonInfo(info);
          }
        } else {
          setCurrentPokemonInfo(cacheData?.data ?? null);
        }
      } catch {
        console.log("Ошибка загрузки");
      }
    };

    getCurrentPokemon();
  }, [params.name]);

  return (
    <Page>
      <MainHeader />
      <div className={s.container}>
        <button onClick={() => navigate(-1)}>На главную</button>
      </div>
      {currentPokemonInfo && (
        <PokemonInfoSection pokemonInfo={currentPokemonInfo} />
      )}
    </Page>
  );
};
