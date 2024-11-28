import { Text, View, Image, FlatList, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useGetPokemonById } from "@/hooks/useGetPokemonById";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";

export default function Poke() {
    const router = useRouter();
  const params = useLocalSearchParams();
  const id = parseInt(Array.isArray(params.id) ? params.id[0] : params.id);
  const { pokemon, pokemonEvolutions } = useGetPokemonById(id);

  if (!pokemon) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{pokemon.name}</Text>
      <Image
        style={styles.image}
        source={{
          uri: pokemon.image,
        }}
      />
      <Text style={styles.subtitle}>Stats</Text>
      <View style={styles.statsContainer}>
        <Text style={styles.text}>HP: {pokemon.stats.HP}</Text>
        <Text style={styles.text}>Attack: {pokemon.stats.attack}</Text>
        <Text style={styles.text}>Defense: {pokemon.stats.defense}</Text>
        <Text style={styles.text}>Special Attack: {pokemon.stats.special_attack}</Text>
        <Text style={styles.text}>Special Defense: {pokemon.stats.special_defense}</Text>
        <Text style={styles.text}>Speed: {pokemon.stats.speed}</Text>
      </View>
      <Text style={styles.subtitle}>Types</Text>
      <FlatList
        data={pokemon.apiTypes}
        keyExtractor={(type) => type.name}
        renderItem={({ item }) => (
          <View style={styles.typeContainer}>
            <Image
              style={styles.typeImage}
              source={{
                uri: item.image,
              }}
            />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
        horizontal
      />
      <Text style={styles.subtitle}>Evolutions</Text>
      <FlatList
        data={pokemonEvolutions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.evolutionContainer} onPress={() => router.push(`/poke/id/${item.id}`)}>
            <Text style={styles.text}>{item.name}</Text>
            <Image
              style={styles.image}
              source={{
                uri: item.image,
              }}
            />
            </TouchableOpacity>
        )}
        horizontal
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  statsContainer: {
    alignItems: "flex-start",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  typeContainer: {
    alignItems: "center",
    marginRight: 10,
  },
  typeImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  resistanceContainer: {
    alignItems: "flex-start",
    marginBottom: 10,
  },
  evolutionContainer: {
    alignItems: "center",
    marginRight: 8,
  },
});