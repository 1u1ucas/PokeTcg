import { useEffect, useState } from "react";
import { PokemonDto } from "@/dto/pokemonDto";



export const useGetRandPokemon = (howMany: number) => {
    const [randpokemon, setRandpokemon] = useState<PokemonDto[]>([]);

 const fetchLastPokemonId = async () => {
    const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon');
    const data = await response.json();
    return data;
  };
  
  const fetchRandPokemon = async (pokemons: PokemonDto[]) => {
    const lastPokemonId = pokemons.length; 
    const usedIds = new Set<number>();
  
      for (let i = 0; i < howMany; i++) {
        let randomId;
        do {
          randomId = Math.floor(Math.random() * (lastPokemonId)) + 1;
        } while (usedIds.has(randomId));
        usedIds.add(randomId);
         const data = pokemons.find((pokemon) => pokemon.id === randomId);
         if (data) {
          setRandpokemon((prev) => [...prev, data]);
        }
      }
  };
  

  useEffect(() => {




    (async () => {

        const pokemons = await fetchLastPokemonId();

        fetchRandPokemon(pokemons);

    })();


  }, []);

  return randpokemon;
};