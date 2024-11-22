import { useEffect, useState } from "react";
import { PokemonDto } from "@/dto/pokemonDto";


const getLastPokemonId = async (): Promise<number> => {
    const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon');
    const data = await response.json();
    return data[data.length - 1].id;
  };

export const useGetRandPokemon = (howMany: number) => {
 const [pokemons, setPokemons] = useState<PokemonDto[]>([]);
 const [lastPokemonId, setLastPokemonId] = useState<number | 1>(1);

 const fetchLastPokemonId = async () => {
    const id = await getLastPokemonId();
    setLastPokemonId(id);
  };
  
  const fetchRandPokemon = async () => {
    const usedIds = new Set<number>();

    for (let i = 0; i < howMany; i++) {
      let randomId;
      do {
        randomId = Math.floor(Math.random() * (lastPokemonId ?? 1)) + 1;
      } while (usedIds.has(randomId));
      usedIds.add(randomId);
        const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${randomId}`);
        const data = await response.json();
        setPokemons((prev) => [...prev, data]);
    }
};

  useEffect(() => {


    fetchLastPokemonId();
    fetchRandPokemon();
  }, []);

  return pokemons;
};