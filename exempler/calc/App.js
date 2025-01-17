import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './components/Calculator';
import ComplexCalculator from './components/ComplexCalculator';

export default function App() {
  return (
    <View style={styles.container}>
      <Calculator/>
      {/* <ComplexCalculator/> */}
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
});
