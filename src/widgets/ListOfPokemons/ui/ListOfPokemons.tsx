import React, { useEffect, useRef, useState } from "react";

import { Pokemon } from "@/api/models/pokeApiModels";
import { fetchPokemonList } from "@/api/pokeApi";
import { PokemonCard } from "@/components/PokemonCard";
import { MAX_LIMIT } from "@/helpers/constants";

import s from "./ListOfPokemons.module.scss";

const limit = 50;

export const ListOfPokemons = () => {
  const loaderRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getListOfPokemon = async () => {
      try {
        setLoading(true);
        const data = await fetchPokemonList(limit, offset);
        setPokemons((prev) => [...prev, ...data]);
      } catch (error) {
        console.error("Ошибка при загрузке покемонов:", error);
      } finally {
        setLoading(false);
      }
    };

    getListOfPokemon();
  }, [offset]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("entry", entry);
        console.log("entry.inte", entry.isIntersecting);
        if (entry.isIntersecting && !loading && offset < MAX_LIMIT) {
          setOffset((prev) => prev + limit);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px 50px 0px",
        threshold: 1.0,
      },
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [loading]);

  return (
    <>
      <div className={s.wrapper}>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      {loading && (
        <div className={s.container}>
          <div className={s["lds-ellipsis"]}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <div ref={loaderRef} className={s.loading} />
    </>
  );
};
