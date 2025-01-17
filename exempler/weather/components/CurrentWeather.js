import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import { Image, Header, Icon } from 'react-native-elements'

//https://api.weatherbit.io/v2.0/forecast/hourly?city=Roskilde,DK&key=ceb2ce31cb7947e2b72f126847ddfcae&hours=48
export default class HourlyWeather extends Component {
    state = {
        loading: true,
        currentWeather: [],
        timeAndDay: "",
    }
    componentDidMount() {
        this.fetchStuff()
    }
    async fetchStuff() {
        const currentWeatherApiCall = await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.props.location}&key=ceb2ce31cb7947e2b72f126847ddfcae`);
        const currentWeather = await currentWeatherApiCall.json();
        this.getCurrentTime()
        this.setState({ currentWeather: currentWeather.data[0], loading: false });
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location !== this.props.location) {
            this.setState({ currentWeather: null, loading: true });
            this.fetchStuff();
        }
    }
    
    getCurrentTime() {
        let date = new Date()
        let hour = date.getHours();
        let minutes = date.getMinutes();

        if (hour < 10) {
            hour = '0' + hour;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
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
            const cloudPercent = `${Math.round(currentWeather.clouds)}%`
            const windSpeed = `${Math.round(currentWeather.wind_spd)} m/s`
            const conditions = `${currentWeather.weather.description}`
            return (
                <View>
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


                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 16 }}>
                        <View>
                            <View style={{ marginBottom: 16 }}>
                                <Text style={{ color: "white", marginBottom: 4 }}>Sunrise</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Icon
                                        name='sunrise'
                                        type='feather'
                                        color='#fff'
                                    />
                                    <Text style={{ color: "white", fontSize: 20, marginLeft: 10 }}>{currentWeather.sunrise}</Text>
                                </View>
                            </View>
                            <View style={{ marginBottom: 16 }}>
                                <Text style={{ color: "white", marginBottom: 4 }}>Sunset</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Icon
                                        name='sunset'
                                        type='feather'
                                        color='#fff'
                                    />
                                    <Text style={{ color: "white", fontSize: 20, marginLeft: 10 }}>{currentWeather.sunset}</Text>
                                </View>
                            </View>
                            <View style={{ marginBottom: 16 }}>
                                <Text style={{ color: "white", marginBottom: 4 }}>Feels Like</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Icon
                                        name='thermometer'
                                        type='feather'
                                        color='#fff'
                                    />
                                    <Text style={{ color: "white", fontSize: 20, marginLeft: 10 }}>{`${Math.round(currentWeather.app_temp)}°`}</Text>
                                </View>
                            </View>

                        </View>
                        <View>
                            <View style={{ marginBottom: 16 }}>
                                <Text style={{ color: "white", marginBottom: 4 }}>Wind Speed</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Icon
                                        name='wind'
                                        type='feather'
                                        color='#fff'
                                    />
                                    <Text style={{ color: "white", fontSize: 20, marginLeft: 10 }}>{windSpeed}</Text>
                                </View>
                            </View>
                            <View style={{ marginBottom: 16 }}>
                                <Text style={{ color: "white", marginBottom: 4 }}>Humidity</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Icon
                                        name='tint'
                                        type='font-awesome'
                                        color='#fff'
                                    />
                                    <Text style={{ color: "white", fontSize: 20, marginLeft: 10 }}>{`${currentWeather.rh}%`}</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{ color: "white", marginBottom: 4 }}>Cloud Percent</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Icon
                                        name='cloud'
                                        type='feather'
                                        color='#fff'
                                    />
                                    <Text style={{ color: "white", fontSize: 20, marginLeft: 10 }}>{cloudPercent}</Text>
                                </View>
                            </View>
                        </View>
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
    smallInfoContainer: {

    }
})
