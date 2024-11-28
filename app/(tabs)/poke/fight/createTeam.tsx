import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, Alert, Vibration  } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useGetPokemonType } from "@/hooks/useGetPokemonType";
import { useGetAllPokemon } from "@/hooks/useGetAllPokemon";
import { PokemonDto } from "@/dto/pokemonDto";
import { useRouter } from 'expo-router';

export default function CreateTeam() {
  const types = useGetPokemonType();
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<null | string>(null);
  const [pokemon, setPokemon] = useState<PokemonDto | null>(null);
  const allPokemons = useGetAllPokemon();
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);


  if (pokemon) {
    
    Alert.alert("Pokémon Selected", `You have selected ${pokemon.name}`);
    Vibration.vibrate(400);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const id = setTimeout(() => {
      Alert.alert(
        "A wild Pokemon appeared!",
        "Go on, fight with your first Pokémon.",
        [
          {
            text: "go to fight",
            onPress: () => router.push(`poke/fight/fight/${pokemon?.name}`), 
          },
        ]
      );
    }, 10000);
    setTimeoutId(id);
  }


  useEffect(() => {
    if (selectedType) {
      const pokemonsOfType = allPokemons.filter((pokemon) => pokemon.apiTypes[0].name.includes(selectedType));
      const randomPokemon = pokemonsOfType[Math.floor(Math.random() * pokemonsOfType.length)];
      setPokemon(randomPokemon);

    }
  }, [selectedType]);

    const handleTypeChange = (type: string) => {
        setSelectedType(type);
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Pokémon Team</Text>
      <Text style={styles.description}>Select a type to get a random Pokémon of that type:</Text>
      <Picker
        selectedValue={selectedType}
        style={styles.picker}
        onValueChange={(itemValue: string) => handleTypeChange(itemValue)}
      >
        <Picker.Item label="Select a type" value="" />
        {types.map((type) => (
          <Picker.Item key={type.name} label={type.name} value={type.name} />
        ))}
      </Picker>
      {pokemon && (
        <View style={styles.pokemonContainer}>
          <Text style={styles.pokemonName}>Random Pokémon of type {selectedType}:</Text>
          <Text style={styles.pokemonName}>Name: {pokemon.name}</Text>
          <Image source={{ uri: pokemon.image }} style={styles.pokemonImage} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: "100%",
    marginBottom: 20,
  },
  pokemonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  pokemonName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  pokemonImage: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});