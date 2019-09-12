import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList,ActivityIndicator } from 'react-native'
import { Icon, Image } from 'react-native-elements'

export default class HourlyWeather extends Component {
    state = {
        loading: true,
        HourlyWeather: [],
    }
    async componentDidMount() {
            const HourlyWeatherApiCall = await fetch('https://api.weatherbit.io/v2.0/forecast/hourly?city=Roskilde,DK&key=ceb2ce31cb7947e2b72f126847ddfcae&hours=6');
            const HourlyWeather = await HourlyWeatherApiCall.json();
            this.setState({ HourlyWeather: HourlyWeather.data, loading: false });
    }
    renderItem = ({ item }) => {
        return (
            <View style={{flex:1,flexDirection:"row"}}>
                <Image
                    source={{ uri: `https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png` }}
                    style={{ width: 50, height: 50 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <Text>{`${item.weather.description}, ${item.temp}`}</Text>
            </View>
        )
    }
    render() {
        return (
            <View>
                <FlatList
                    data={this.state.HourlyWeather}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})