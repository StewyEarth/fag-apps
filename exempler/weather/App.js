import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import CurrentWeather from "./components/CurrentWeather"
import HourlyWeather from "./components/HourlyWeather"

export default function App() {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#d484b2", "#b16da6", "#8c599b", "#63488e", "#32387f"]}
      start={[-.3, .75]}>
      <ScrollView style={{ width: "90%" }}>
        <CurrentWeather />
        <HourlyWeather />
      </ScrollView>
      <Text>Bottom Navigation</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: "center",
    justifyContent: "space-between"
  },
});
