import { Text, View, Image, FlatList, TouchableOpacity, ScrollView, StyleSheet, Button, TextInput, Alert } from "react-native";
import { useGetRandPokemon } from "@/hooks/useGetRandPokemon";
import { useGetRandTypes } from "@/hooks/useGetRandType"; 
import { useRouter } from "expo-router";

export default function Index() {

  const router = useRouter();


  const randPokemon = useGetRandPokemon(6);

  const randTypes = useGetRandTypes(3);

 if (!randPokemon || !randTypes) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }



  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenue sur l'app Pokémon TCG</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push(`/pokeList`)}>
          <Text style={styles.buttonText}>Pour voir tout les pokémons</Text>
        </TouchableOpacity>
        <FlatList 
        horizontal
          data={randPokemon}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => router.push(`/poke/id/${item.id}`)}>
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
        <TouchableOpacity style={styles.button} onPress={() => router.push(`/typeList`)}>
          <Text style={styles.buttonText}>Pour voir tout les types</Text>
        </TouchableOpacity>
        <FlatList
        horizontal
          data={randTypes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => router.push(`/poke/${item.name}`)}>
              <Text style={styles.text}>{item.name}</Text>
              <Image
                style={styles.image}
                source={{
                  uri: item.image,
                }}
              />
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.cardContainer}
        />
      </View>
    </ScrollView>
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
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#f00",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
  },
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: "#f00",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: "#fff",
    margin: 5,
  },
});