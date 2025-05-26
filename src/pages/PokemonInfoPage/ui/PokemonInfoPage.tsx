import React from "react";

import { useParams } from "react-router";

export const PokemonInfoPage = () => {
  const params = useParams();
  console.log("params", params);
  return <div>PokemonInfoPage</div>;
};
