import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, ActivityIndicator, SafeAreaView } from 'react-native'
import { Icon, Image } from 'react-native-elements'

export default class HourlyWeather extends Component {
    state = {
        loading: true,
        HourlyWeather: [],
    }
    async componentDidMount() {
        const HourlyWeatherApiCall = await fetch('https://api.weatherbit.io/v2.0/forecast/hourly?city=Roskilde,DK&key=ceb2ce31cb7947e2b72f126847ddfcae&hours=24');
        const HourlyWeather = await HourlyWeatherApiCall.json();
        this.setState({ HourlyWeather: HourlyWeather.data, loading: false });
    }
    renderItem = ({ item }) => {
        return (
            <View style={{ alignItems: "center", width: 50 }}>
                <Text style={{ marginLeft: 20, color: "white" }}>{`${Math.round(item.temp)}°`}</Text>
                <Image
                    source={{ uri: `https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png` }}
                    style={{ width: 30, height: 30 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <Text style={{ marginRight: 10, color: "white" }}>{`${item.timestamp_local.substring(11, 16)}`}</Text>
            </View>
        )
    }
    render() {
        return (
            <View>
                <FlatList
                    style={{ width: 300 }}
                    horizontal
                    data={this.state.HourlyWeather}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})