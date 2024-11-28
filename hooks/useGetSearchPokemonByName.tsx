import { useEffect, useState } from "react";
import { PokemonDto } from "@/dto/pokemonDto";


export const useGetSearchPokemonByName = (search: string) => {
    const [pokemons, setPokemons] = useState<PokemonDto[]>([]);
    const [filteredPokemon, setFilteredPokemon] = useState<PokemonDto[]>([]);

    console.log('1er ' + search);
    
    useEffect(() => {

        const fetchPokemon = async () => {
        const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon`);
        const data = await response.json();
        setPokemons(data);
        console.log('2eme ' + data);
        };
        fetchPokemon();
    }, []);

    useEffect(() => {
       console.log('3eme ' + search);
        const filterPokemon = async () => {
        const filtered = pokemons.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(search.toLowerCase())
          );
            setFilteredPokemon(filtered);  
            console.log('4eme ' + filtered); 
    };
    filterPokemon();
    }, [search]);
    
    return filteredPokemon;
    };