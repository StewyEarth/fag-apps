const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: "center",
        justifyContent: "space-between"
    },
});


import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Header, Button, Icon } from 'react-native-elements';
import WeatherSettings from "../components/WeatherSettings";

class Settings extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (

            <LinearGradient
                style={styles.container}
                colors={["#d484b2", "#b16da6", "#8c599b", "#63488e", "#32387f"]}
                start={[-.3, .75]}>
                <View style={{ width: "100%", alignItems: "center" }}>
                    <Button onPress={() => navigate('Home')}
                        title="Home"
                        containerStyle={{alignSelf: "flex-start",marginLeft: 16,marginTop: 16,marginBottom: 16}}
                        buttonStyle={{ backgroundColor: "transparent", padding: 0 }}
                        icon={
                            <Icon
                                name="chevron-left"
                                size={20}
                                containerStyle={{marginRight: 8}}
                                color="white"
                                type='font-awesome'
                            />
                        } />
                    <WeatherSettings />
                </View>
            </LinearGradient>
        )
    }
};

export default Settings;