import { useEffect, useState } from "react";
import { PokemonDto } from "@/dto/pokemonDto";

export const useGetPokemonType = () => {
 const [types, setTypes] = useState<PokemonDto[]>([]);

  useEffect(() => {
    const fetchPokemonType = async () => {
        const response = await fetch(`https://pokebuildapi.fr/api/v1/types`);
        const data = await response.json();
        setTypes(data);
    }
    fetchPokemonType();
  }, []);

  return types;
};