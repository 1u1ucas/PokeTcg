import { Text, View, Image, FlatList, TouchableOpacity, ScrollView, StyleSheet, Button, TextInput, Alert } from "react-native";
import { useGetRandPokemon } from "@/hooks/useGetRandPokemon";
import { useGetRandTypes } from "@/hooks/useGetRandType";
import { PokemonDto } from "@/dto/pokemonDto";
import { GeneralTypeDto } from "@/dto/typeDto";
import { useEffect, useState } from "react";

export default function Index() {


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
        <Text style={styles.title}>Welcome to the Pokemon TCG</Text>
        <View style={styles.cardContainer}>
          {randPokemon.map((pokemon: PokemonDto) => (
            <View key={pokemon.id} style={styles.card}>
              <Image
                style={styles.image}
                source={{
                  uri: pokemon.image,
                }}
              />
              <Text style={styles.text}>{pokemon.name}</Text>
              <Text style={styles.text}>{pokemon.stats.HP} HP</Text>
              <View>
                {pokemon.apiTypes.map((type, index) => (
                  <Text key={index} style={styles.text}>{type.name}</Text>
                ))}
              </View>
            </View>
          ))}
        </View>
        <View style={styles.cardContainer}>
          {randTypes.map((type: GeneralTypeDto) => (
            <View key={type.id} style={styles.card}>
              <Text style={styles.text}>{type.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f00",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});