import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import { Icon, Image } from 'react-native-elements'

//https://api.weatherbit.io/v2.0/forecast/hourly?city=Roskilde,DK&key=ceb2ce31cb7947e2b72f126847ddfcae&hours=48
export default class HourlyWeather extends Component {
    state = {
        loading: true,
        currentWeather: [],
    }
    async componentDidMount() {
        const currentWeatherApiCall = await fetch('https://api.weatherbit.io/v2.0/current?city=Roskilde,DK&key=ceb2ce31cb7947e2b72f126847ddfcae');
        const currentWeather = await currentWeatherApiCall.json();
        this.setState({ currentWeather: currentWeather.data[0], loading: false });
    }

    render() {
        if (!this.state.loading) {
            const { currentWeather } = this.state
            const country = currentWeather.country_code
            const city = currentWeather.city_name
            const conditions = `${currentWeather.weather.description}, ${Math.round(currentWeather.temp)}°C`
            return (
                <View style={styles.topSection}>
                    <View>
                        <Image
                            source={{ uri: `https://www.weatherbit.io/static/img/icons/${currentWeather.weather.icon}.png` }}
                            style={{ width: 100, height: 100 }}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                    </View>
                    <View style={styles.locationinfo}>

                        <Text style={{ color: "white", fontSize: 16, textAlign: "right" }}>{country}</Text>
                        <Text style={{ color: "white", fontSize: 32, textAlign: "right" }}>{city}</Text>
                        <Text style={{ color: "white", fontSize: 22, textAlign: "right" }}>{conditions}</Text>
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
        justifyContent: "center"
    }
})
