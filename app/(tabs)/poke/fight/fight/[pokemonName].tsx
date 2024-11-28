import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useGetAllPokemon } from '@/hooks/useGetAllPokemon';
import { PokemonDto } from '@/dto/pokemonDto';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState, useEffect } from 'react';

export default function FightPokemon() {
    const params = useLocalSearchParams();
    const router = useRouter();
    const pokemonName = Array.isArray(params.pokemonName) ? params.pokemonName[0] : params.pokemonName;
    const allPokemon = useGetAllPokemon(); // Données des Pokémon

    const [pokemon, setPokemon] = useState<PokemonDto | undefined>(undefined);
    const [enemy, setEnemy] = useState<PokemonDto | undefined>(undefined);
    const [playerHP, setPlayerHP] = useState(100);
    const [enemyHP, setEnemyHP] = useState(100);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (allPokemon.length > 0) {
            // Charger les données du Pokémon joueur et d'un adversaire aléatoire
            const playerPokemon = allPokemon.find(p => p.name === pokemonName);
            const randomEnemy = allPokemon[Math.floor(Math.random() * allPokemon.length)];

            if (playerPokemon && randomEnemy) {
                setPokemon(playerPokemon);
                setEnemy(randomEnemy);
                setIsLoading(false); // Les données sont prêtes
            }
        }
    }, [allPokemon, pokemonName]); // Dépendance sur les données des Pokémon et le nom du joueur

    const handleAttack = () => {
        if (!pokemon || !enemy) return;

        // Logique d'attaque ici
    };

    const handleDefend = () => {
        // Logique de défense ici
    };

    if (isLoading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* Combat ici */}
            <Text>Combat en cours entre {pokemon?.name} et {enemy?.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});
