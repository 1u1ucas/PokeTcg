import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
export default function Header() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    console.log('search');
    router.push('poke/name/' + search);
  }

  return (
    <View>
    <View style={styles.header}>
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Poké_Ball_icon.svg/768px-Poké_Ball_icon.svg.png?20161023215848' }} style={styles.logo} />
      <Text style={styles.title}>Pokemon TCG</Text>
    </View>
    <View style={styles.header}>
      <TextInput style={styles.textInput} placeholder="Rechercher un pokémon" onChangeText={(text) => setSearch(text)} />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text>Rechercher</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f00',
  },
  logo: {
    width: 50,
    height: 50,
  },
  
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
});