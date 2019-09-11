import React from 'react';
import { StyleSheet, Text, View, Grid, Row, ScrollView } from 'react-native';

import CurrentWeather from "./components/CurrentWeather"
import HourlyWeather from "./components/HourlyWeather"
import BottomMenu from "./components/BottomMenu"

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={{width: "90%"}}>
        <CurrentWeather/>
        <HourlyWeather />
      </ScrollView>
      <BottomMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundImage: "linear-gradient(to left top, #32387f, #63488e, #8c599b, #b16da6, #d484b2)",
    // backgroundColor: "black",
    alignItems: 'center',
    justifyContent: "space-between"
  },
});

