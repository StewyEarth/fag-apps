import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import Counter from "./components/Counter"

export default function App() {
  return (
    <View style={styles.container}>
      <Counter color={'steelblue'} size={100} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#111"
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
