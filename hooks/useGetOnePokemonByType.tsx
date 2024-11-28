import { useEffect, useState } from "react";
import { PokemonDto } from "@/dto/pokemonDto";

export const useGetOnePokemonByType = (type: string) => {
    const [pokemons, setPokemons] = useState<PokemonDto[] | []>([]);
  const [pokemon, setPokemon] = useState<PokemonDto | null>(null);

  useEffect(() => {
    console.log('type' + type);
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon`);
      const data = await response.json();
      console.log(data);
        setPokemons(data);
    };
    fetchPokemon();
    }, []);


    useEffect(() => {
        console.log('type' + type);
        const fetchPokemon = async () => {
            const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/type/${type}`);
            const data = await response.json();
            setPokemon(data);
            console.log(data);
        }
        fetchPokemon();
    }
    , [type]);

  return pokemon;
};