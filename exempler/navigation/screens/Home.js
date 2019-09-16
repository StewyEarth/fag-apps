
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Home extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>This is the home screen</Text>
                <Button onPress={() => navigate('Settings')} title="Settings" />
            </View>
        )
    }
}

export default Home