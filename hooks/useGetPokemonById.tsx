import { useEffect, useState } from "react";
import { PokemonDto } from "@/dto/pokemonDto";

export const useGetPokemonById = (id: number) => {
  const [pokemon, setPokemon] = useState<PokemonDto | null>(null);
  const [pokemonEvolutions, setPokemonEvolutions] = useState<PokemonDto[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);

      if (data?.apiEvolutions) {
        const evolutionsId =  data.apiEvolutions.map((evolution: PokemonDto) => evolution.pokedexId);
        const evolutions = await Promise.all(
          evolutionsId.map(async (evolutionId: number) => {
            const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${evolutionId}`);
            return response.json();
          })
        );
        setPokemonEvolutions(evolutions);
      }
    };

    fetchPokemon();
  }, [id]);

  return { pokemon, pokemonEvolutions };
};