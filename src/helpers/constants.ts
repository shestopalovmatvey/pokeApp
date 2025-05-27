export const MAX_LIMIT = 1350;

export const TIME_LIMIT = 2 * 60 * 1000;

export const enum EnumPokemonTypes {
  ALL = "all",
  NORMAL = "normal",
  FIGHTING = "fighting",
  FLYING = "flying",
  POISON = "poison",
  GROUND = "ground",
  ROCK = "rock",
  BUG = "bug",
  GHOST = "ghost",
  STEEL = "steel",
  FIRE = "fire",
  WATER = "water",
  GRASS = "grass",
  ELECTRIC = "electric",
  PSYCHIC = "psychic",
  ICE = "ice",
  DRAGON = "dragon",
  DARK = "dark",
  FAIRY = "fairy",
}

export const PokemonTypesConfig = {
  [EnumPokemonTypes.ALL]: {
    text: "Все",
    color: "#1D1E1D",
  },
  [EnumPokemonTypes.NORMAL]: {
    text: "Нормальный",
    color: "#AAA67F",
  },
  [EnumPokemonTypes.FIGHTING]: {
    text: "Боевой",
    color: "#C12239",
  },
  [EnumPokemonTypes.FLYING]: {
    text: "Летающий",
    color: "#A891EC",
  },
  [EnumPokemonTypes.GROUND]: {
    text: "Земляной",
    color: "#B29D5E",
  },
  [EnumPokemonTypes.POISON]: {
    text: "Ядовитый",
    color: "#A43E9E",
  },
  [EnumPokemonTypes.ROCK]: {
    text: "Каменный",
    color: "#655B2F",
  },
  [EnumPokemonTypes.BUG]: {
    text: "Насекомое",
    color: "#A7B723",
  },
  [EnumPokemonTypes.GHOST]: {
    text: "Призрак",
    color: "#70559B",
  },
  [EnumPokemonTypes.STEEL]: {
    text: "Стальной",
    color: "#C0C6C7",
  },
  [EnumPokemonTypes.FIRE]: {
    text: "Огненный",
    color: "#F57D31",
  },
  [EnumPokemonTypes.WATER]: {
    text: "Водяной",
    color: "#6493EB",
  },
  [EnumPokemonTypes.GRASS]: {
    text: "Травяной",
    color: "#74CB48",
  },
  [EnumPokemonTypes.ELECTRIC]: {
    text: "Электрический",
    color: "#EFC31E",
  },
  [EnumPokemonTypes.PSYCHIC]: {
    text: "Психический",
    color: "#FB5584",
  },
  [EnumPokemonTypes.ICE]: {
    text: "Ледяной",
    color: "#55E7FD",
  },
  [EnumPokemonTypes.DRAGON]: {
    text: "Дракон",
    color: "#7037FF",
  },
  [EnumPokemonTypes.DARK]: {
    text: "Тёмный",
    color: "#2F1911",
  },
  [EnumPokemonTypes.FAIRY]: {
    text: "Волшебный",
    color: "#FF62DC",
  },
};
