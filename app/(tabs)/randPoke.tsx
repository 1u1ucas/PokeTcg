import { Text, View, Image, FlatList, TouchableOpacity, ScrollView, StyleSheet, Button, TextInput, Alert } from "react-native";
import { useGetAllPokemon } from "@/hooks/useGetAllPokemon";
import { useGetRandPokemon } from "@/hooks/useGetRandPokemon";
import { useRouter } from "expo-router";
import { PokemonDto } from "@/dto/pokemonDto";
import { useEffect, useState } from "react";


export default function RandPoke() {

  const router = useRouter();
  const pokemons = useGetAllPokemon();

  const [randPokemon, setRandPokemon] = useState<PokemonDto | undefined>(undefined);

  useEffect(() => {
    setRandPokemon(pokemons[Math.floor(Math.random() * pokemons.length)]);
  }, [pokemons]);

  const handleRandPoke = () => {
    const id = Math.floor(Math.random() * pokemons.length) + 1;
    const newPokemon = pokemons.find((poke) => poke.id === id);
    setRandPokemon(newPokemon);

  };

    if (!randPokemon) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenue sur l'app Pokémon TCG</Text>
            <TouchableOpacity style={styles.button} onPress={() => handleRandPoke()}>
                <Text style={styles.buttonText}>Pour voir un pokémon aléatoire</Text>
            </TouchableOpacity>
                    <View>
                        <Text style={styles.text}>Pokémon</Text>
                        <Image
                            style={styles.image}
                            source={{
                                uri: randPokemon.image,
                            }}
                        />
                        <Text style={styles.text}>{randPokemon.name}</Text>
                        <Text style={styles.text}>{randPokemon.stats.HP} HP</Text>
                        <FlatList
                            data={randPokemon.apiTypes}
                            keyExtractor={(type) => type.name}
                            renderItem={({ item: type }) => (
                                <Text style={styles.text}>{type.name}</Text>
                            )}
                        />
                    </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        margin: 20,
    },
    button: {
        backgroundColor: "#f1f1f1",
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 16,
    },
    image: {
        width: 200,
        height: 200,
    },
    text: {
        fontSize: 16,
    },
    cardContainer: {
        alignItems: "center",
    },
});