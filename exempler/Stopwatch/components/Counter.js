import React, { Component } from 'react'
import { Text, View, StyleSheet, Button,Icon } from 'react-native'

export default class Counter extends Component {

    state = {
        seconds: 0,
        minutes: 0,
        isOn: false,
        timer: null,
    };
    
    resetTimer() {
        this.setState({ minutes: 0, seconds: 0 });
        this.setState({ isOn: true })
        this.startstopTimer();
    };

    startstopTimer() {
        if (!this.state.isOn) {
            this.setState({ isOn: true })
            this.state.timer = setInterval(() => {
                if (this.state.seconds >= 59) {
                    this.setState({ minutes: this.state.minutes + 1 });
                    this.setState({ seconds: 0 });
                } else {
                    this.setState({ seconds: this.state.seconds + 1 });
                };
            }, 1000);
        } else {
            this.setState({ isOn: false })
            clearInterval(this.state.timer);
        };
    };

    render() {
        const { color, size } = this.props;
        let { minutes } = this.state;
        let { seconds } = this.state;

        const btnText = this.state.isOn ? "Pause" : "Start"
        const btnColor = this.state.isOn ? "orangered" : "green"

        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return (
            <View>
                <Text style={{ color, fontSize: size }}>
                    {minutes} : {seconds}
                </Text>
                <View style={styles.fixToText}>
                    <Button color={btnColor}
                        title={btnText}
                        onPress={() => this.startstopTimer()}
                    />

                    <Button color="red"
                        title="Reset"
                        onPress={() => this.resetTimer()}
                    />
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});
