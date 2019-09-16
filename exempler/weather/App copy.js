import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Header } from 'react-native-elements'

import CurrentWeather from "./components/CurrentWeather"
import HourlyWeather from "./components/HourlyWeather"

export default function App() {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#d484b2", "#b16da6", "#8c599b", "#63488e", "#32387f"]}
      start={[-.3, .75]}>

      <View >
        <Header
        containerStyle={{ width: "100%", backgroundColor: "transparent", borderBottomWidth: 0 }}
        placement="center"
        leftComponent={{ icon: 'settings', color: '#fff' }}
        centerComponent={{ text: 'Roskilde, DK', style: { color: '#fff', fontSize: 20 } }}
        rightComponent={{ icon: 'add', color: '#fff' }}
      />
        <CurrentWeather />
        <HourlyWeather />
      </View>
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
