import { Text, View, StyleSheet, Image } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2021 Pokemon TCG</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f00',
  },
  text: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
});