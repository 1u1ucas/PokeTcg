import { Text, View, Image, FlatList, TouchableOpacity, ScrollView, StyleSheet, Button, TextInput, Alert } from "react-native";
import { useGetPokemonType } from "@/hooks/useGetPokemonType";
import { useRouter } from "expo-router";

export default function PokeList () {

    const router = useRouter();
    const types = useGetPokemonType();

    return (
            <View style={styles.container}>
                <Text style={styles.title}>Bienvenue sur l'app Pokémon TCG</Text>
                <FlatList
                    data={types}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.card} onPress={() => router.push(`type/${item.name}`)}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: item.image,
                                }}
                            />
                            <Text style={styles.text}>{item.name}</Text>
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
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200,
    },
});

