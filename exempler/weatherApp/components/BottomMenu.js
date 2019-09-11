import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Icon, ButtonGroup } from 'react-native-elements'

export default class BottomMenu extends Component {
    render() {
        const buttons = [
            <View><Icon name='home' type='material-community' size="30px" color='#fff' /><Text style={styles.buttonText}>Home</Text></View>,
            <View><Icon name='newspaper' type='material-community' size="30px" color='#fff' /><Text style={styles.buttonText}>News</Text></View>,
            <View><Icon name='settings' type='material-community' size="30px" color='#fff' /><Text style={styles.buttonText}>Settings</Text></View>,
        ]
        return (
            <ButtonGroup
                innerBorderStyle={0, "transparent"}
                containerStyle={{ marginBottom: 0, width: "100%", backgroundColor: "transparent", border: "none", height: "60px" }}
                selectedButtonStyle={{ backgroundColor: "#fff" }}
                buttonStyle={{ backgroundColor: "rgba(255,255,255,.1)", border: "none", }}
                buttons={buttons}
            />
        )
    }
}

const styles = StyleSheet.create({
    bottom: {
        justifyContent: 'flex-end',
        backgroundColor: "rgba(255,255,255,.1)",
        width: "100%",
    },
    buttonText:{
        color: "white",
        fontSize: 16
    }
})
