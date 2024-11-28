import { useState, useEffect } from "react";
import { useGetPokemonById } from "@/hooks/useGetPokemonById";
import { PokemonDto } from "@/dto/pokemonDto";

export const usePokemonWithEvolutions = (id: number) => {
  const [pokemonEvolutions, setPokemonEvolutions] = useState<PokemonDto[]>([]);
  const [pokemon, setPokemon] = useState<PokemonDto>();

  useEffect(() => {
    const fetchPokemon = async () => {
      const fetchedPokemon = await useGetPokemonById(id);
      console.log(fetchedPokemon);
      setPokemon(fetchedPokemon);
      console.log(fetchedPokemon?.apiEvolutions);

      if (fetchedPokemon?.apiEvolutions) {
        const evolutionsId = fetchedPokemon.apiEvolutions.map((evolution) => evolution.pokedexId);
        console.log(evolutionsId);
        const evolutions = await Promise.all(evolutionsId.map((evolutionId) => useGetPokemonById(evolutionId)));
        console.log(evolutions);
        setPokemonEvolutions(evolutions.filter((evolution) => evolution !== undefined) as PokemonDto[]);
        console.log(pokemonEvolutions);
      }
    };

    fetchPokemon();
  }, [id]);

  return { pokemon, pokemonEvolutions };
};