import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bro du skal huske at klappe! 👏</Text>
      <Image style={styles.logo} source={require('./assets/clap.gif')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 256,
    width: 256,
  },
});
