import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import { Image, Header } from 'react-native-elements'

//https://api.weatherbit.io/v2.0/forecast/hourly?city=Roskilde,DK&key=ceb2ce31cb7947e2b72f126847ddfcae&hours=48
export default class HourlyWeather extends Component {
    state = {
        loading: true,
        currentWeather: [],
        timeAndDay: "",
    }
    async componentDidMount() {
        const currentWeatherApiCall = await fetch('https://api.weatherbit.io/v2.0/current?city=Roskilde,DK&key=ceb2ce31cb7947e2b72f126847ddfcae');
        const currentWeather = await currentWeatherApiCall.json();
        this.getCurrentTime()
        this.setState({ currentWeather: currentWeather.data[0], loading: false });
    }
    getCurrentTime(){
        let date = new Date()
        let hour = date.getHours();
        let minutes = date.getMinutes();

        if (hour < 10) {
            hour = '0' + hour;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        this.setState({ currentTime: hour + ':' + minutes });
        let days = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        days.map((item, key) => {
            if (key == date.getDay()) {
                this.setState({ dateAndTime: `${item}, ${hour}:${minutes}` });
            }
        })

    }

    render() {
        if (!this.state.loading) {

            const { currentWeather } = this.state
            const { dateAndTime } = this.state
            const temp = `${Math.round(currentWeather.temp)}°`
            const conditions = `${currentWeather.weather.description}`
            return (
                <View>
                    <Header
                        containerStyle={{ width: "100%", backgroundColor: "transparent", borderBottomWidth: 0 }}
                        placement="center"
                        leftComponent={{ icon: 'menu', color: '#fff' }}
                        centerComponent={{ text: 'Roskilde, DK', style: { color: '#fff', fontSize: 20 } }}
                        rightComponent={{ icon: 'add', color: '#fff' }}
                    />
                    <Text style={{ textAlign: "center", color: "white" }}>{dateAndTime}</Text>

                    <View style={styles.topSection}>
                        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                            <Image
                                source={{ uri: `https://www.weatherbit.io/static/img/icons/${currentWeather.weather.icon}.png` }}
                                style={{ width: 40, height: 40 }}
                                PlaceholderContent={<ActivityIndicator />}
                            />
                            <Text style={{ marginLeft: 10, color: "white", fontSize: 22 }}>{conditions}</Text>
                        </View>
                        <Text style={{ color: "white", fontSize: 100, fontWeight: "100" }}>{temp}</Text>
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
        marginTop: 50,
    },
})
