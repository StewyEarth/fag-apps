import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import { Icon } from 'react-native-elements'

//https://api.weatherbit.io/v2.0/forecast/hourly?city=Roskilde,DK&key=ceb2ce31cb7947e2b72f126847ddfcae&hours=48
export default class HourlyWeather extends Component {
    state = {
        loading: true,
        weather: []
    }
    async componentDidMount() {
        const WeatherApiCall = await fetch('https://api.weatherbit.io/v2.0/forecast/hourly?city=Roskilde,DK&key=ceb2ce31cb7947e2b72f126847ddfcae&hours=1');
        const Weather = await WeatherApiCall.json();
        this.setState({ weather: Weather, loading: false });
    }
    render() {
        if (!this.state.loading) {
            const { weather } = this.state
            const country = weather.country_code
            const city = weather.city_name
            const conditions = `${weather.data[0].weather.description}, ${weather.data[0].temp}°C`
            return (
                <View style={styles.topSection}>
                    <Icon
                        name='sun'
                        type='feather'
                        color='#fff'
                        size="100px"
                    />
                    <View style={styles.locationinfo}>

                        <Text style={{ color: "white", fontSize: 16 }}>{country}</Text>
                        <Text style={{ color: "white", fontSize: 32 }}>{city}</Text>
                        <Text style={{ color: "white", fontSize: 22 }}>{conditions}</Text>
                    </View>
                </View>
            )
        } else {
            return <ActivityIndicator size="large" color="#fff" style={{ marginTop: 50 }} />
        }

    }
}

const styles = StyleSheet.create({
    topSection: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 50,
    },
    locationinfo: {
        textAlign: "right",
    }
})
