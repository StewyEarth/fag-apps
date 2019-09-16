const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: "center",
        justifyContent: "space-between"
    },
});

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Header, Button, Icon } from 'react-native-elements'
import CurrentWeather from "../components/CurrentWeather"
import HourlyWeather from "../components/HourlyWeather"

class Home extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <LinearGradient
                style={styles.container}
                colors={["#d484b2", "#b16da6", "#8c599b", "#63488e", "#32387f"]}
                start={[-.3, .75]}>
                <View >
                    <Header
                        containerStyle={{ width: "100%", backgroundColor: "transparent", borderBottomWidth: 0 }}
                        placement="center"
                        leftComponent={<Button
                            buttonStyle={{ backgroundColor: "transparent", padding: 0 }}
                            icon={
                                <Icon
                                    name="cogs"
                                    size={20}
                                    color="white"
                                    type='font-awesome'
                                />
                            }
                            onPress={() => navigate('Settings')}
                        />}
                        centerComponent={{ text: 'Roskilde, DK', style: { color: '#fff', fontSize: 20 } }}
                        rightComponent={<Button
                            buttonStyle={{ backgroundColor: "transparent", padding: 0 }}
                            icon={
                                <Icon
                                    name="plus"
                                    size={20}
                                    color="white"
                                    type='font-awesome'
                                />
                            }
                        />}
                    />
                    <CurrentWeather />
                    <HourlyWeather />
                </View>
            </LinearGradient>
        )
    }
}

export default Home