import { Text, View, Image, FlatList, TouchableOpacity, ScrollView, StyleSheet, Button, TextInput, Alert } from "react-native";
import { useGetSearchPokemonByName } from "@/hooks/useGetSearchPokemonByName";
import { useGetAllPokemon } from "@/hooks/useGetAllPokemon";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { PokemonDto } from "@/dto/pokemonDto";

export default function PokeList () {
    const router = useRouter();
    const allPokemon = useGetAllPokemon();
    const [search, setSearch] = useState("");
    const [filteredPokemon, setFilteredPokemon] = useState<PokemonDto[]>([]);


        useEffect(() => {
            setFilteredPokemon(allPokemon);
          }, [allPokemon]);
        
          useEffect(() => {
            if (search === "") {
              setFilteredPokemon(allPokemon);
            } else {
              const result = allPokemon.filter((pokemon) =>
                pokemon.name.toLowerCase().includes(search.toLowerCase())
              );
              setFilteredPokemon(result);
            }
          }, [search, allPokemon]);



    return (
            <View style={styles.container}>
                <Text style={styles.title}>Bienvenue sur l'app Pokémon TCG</Text>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search for a Pokémon"
                        onChangeText={(text) => setSearch(text)}
                    />
                </View>
                <FlatList
                    data={filteredPokemon}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.card} onPress={() => router.push(`poke/id/${item.id}`)}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: item.image,
                                }}
                            />
                            <Text style={styles.text}>{item.name}</Text>
                            <Text style={styles.text}>{item.stats.HP} HP</Text>
                            <FlatList
                                data={item.apiTypes}
                                keyExtractor={(type) => type.name}
                                renderItem={({ item: type }) => (
                                    <Text style={styles.text}>{type.name}</Text>
                                )}
                            />
                        </TouchableOpacity>
                    )}
                    contentContainerStyle={styles.cardContainer}

                />
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
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    card: {
        backgroundColor: "#f1f1f1",
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
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
    button: {
        backgroundColor: "blue",
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
    },
    input: {
        backgroundColor: "#f1f1f1",
        padding: 10,
        margin: 10,
        borderRadius: 10,
    }
});