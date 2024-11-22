import { useEffect, useState } from "react";
import { PokemonDto } from "@/dto/pokemonDto";

export const useGetPokemonById = (id : number) => {
 const [pokemons, setPokemons] = useState<PokemonDto[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
        const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`);
        const data = await response.json();
        setPokemons(data);
    }
    fetchPokemon();
  }, []);

  return pokemons;
};