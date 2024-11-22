import { Text, View, StyleSheet, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Poké_Ball_icon.svg/768px-Poké_Ball_icon.svg.png?20161023215848' }} style={styles.logo} />
      <Text style={styles.title}>Pokemon TCG</Text>
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
});