import { useEffect, useState } from "react";
import { PokemonDto } from "@/dto/pokemonDto";

export const useGetPokemonByType = (type : string) => {
 const [pokemons, setPokemons] = useState<PokemonDto[]>([]);

  useEffect(() => {
    console.log('type' + type);
    const fetchPokemon = async () => {
        const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/type/${type}`);
        const data = await response.json();
        setPokemons(data);
        console.log(data);
    }
    fetchPokemon();
  }, [type]);

  return pokemons;
};