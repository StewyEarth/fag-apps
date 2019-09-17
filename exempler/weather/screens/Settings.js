const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: "center",
        justifyContent: "space-between"
    },
});


import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import WeatherSettings from "../components/WeatherSettings"

class Settings extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (

            <LinearGradient
                style={styles.container}
                colors={["#d484b2", "#b16da6", "#8c599b", "#63488e", "#32387f"]}
                start={[-.3, .75]}>
                <View style={{width:"100%", alignItems:"center"}}>
                    <Button onPress={() => navigate('Home')} title="Home" />
                    <WeatherSettings />
                </View>
            </LinearGradient>
        )
    }
};

export default Settings;