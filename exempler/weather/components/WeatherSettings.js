import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { ListItem } from 'react-native-elements'

export default class WeatherSettings extends Component {
    render() {
        const list = [
            {
                title: 'Locations',
                icon: {
                    type: "font-awesome",
                    name: "compass"
                },
            },
        ]
        return (
            <View style={{ width: "90%" }}>
                <ListItem
                    key={0}
                    title={"Unit of measurement"}
                    titleStyle={{ marginLeft: 8 }}
                    leftIcon={{ name: "thermometer-quarter", type: "font-awesome" }}
                    bottomDivider
                    buttonGroup={{ buttons: ["C", "F"], buttonStyle: {}, selectedButtonStyle: { backgroundColor: "green" }, selectedIndex: 0 }}
                />
                {list.map((item, i) => (
                    <ListItem
                        key={i + 1}
                        title={item.title}
                        titleStyle={{ marginLeft: 8 }}
                        leftIcon={{ name: item.icon.name, type: item.icon.type }}
                        bottomDivider
                        chevron
                    />))}
            </View>
        )
    }
}

const styles = StyleSheet.create({})
