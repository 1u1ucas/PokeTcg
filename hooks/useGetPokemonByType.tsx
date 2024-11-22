import { useEffect, useState } from "react";
import { PokemonDto } from "@/dto/pokemonDto";

export const useGetPokemonByType = (type : string) => {
 const [pokemons, setPokemons] = useState<PokemonDto[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
        const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/type/${type}`);
        const data = await response.json();
        setPokemons(data);
    }
    fetchPokemon();
  }, []);

  return pokemons;
};