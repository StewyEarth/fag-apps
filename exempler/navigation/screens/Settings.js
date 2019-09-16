import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Settings extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>This is the Settings screen</Text>
                <Button onPress={() => navigate('Home')} title="Home"/>
            </View>
        )
    }
};

export default Settings;