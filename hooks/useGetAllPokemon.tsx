import { useEffect, useState } from "react";
import { PokemonDto } from "@/dto/pokemonDto";

export const useGetAllPokemon = () => {
 const [pokemons, setPokemons] = useState<PokemonDto[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
        const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon`);
        const data = await response.json();
        setPokemons(data);
    }
    fetchPokemon();
  }, []);

  return pokemons;
};