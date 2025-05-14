import React, { useState } from "react";

import cn from "classnames";

import { Tags } from "@/components/Tags";
import { EnumPokemonTypes, PokemonTypesConfig } from "@/helpers/constants";

import s from "./ListOfTags.module.scss";

export const ListOfTags = () => {
  const [activeTag, setActiveTag] = useState(EnumPokemonTypes.ALL);
  const tags = Object.entries(PokemonTypesConfig).map(([type, info]) => ({
    type: type as EnumPokemonTypes,
    color: info.color,
    text: info.text,
  }));

  const handleClickTag = (type: EnumPokemonTypes) => {
    setActiveTag(type);
  };

  return (
    <div className={s.container}>
      {tags.map((tag) => (
        <Tags
          key={tag.type + "-" + tag.color}
          text={tag.text}
          color={tag.color}
          onClick={() => handleClickTag(tag.type)}
          classes={cn(s.tag, {
            [s.active]: activeTag === tag.type,
          })}
        />
      ))}
    </div>
  );
};
