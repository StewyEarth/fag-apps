import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "linear-gradient(to left top, #32387f, #63488e, #8c599b, #b16da6, #d484b2)",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
