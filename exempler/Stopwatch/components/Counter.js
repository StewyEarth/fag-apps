import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class Counter extends Component {
    constructor() {
        super();
        this.timer = {
            isOn: false,
            timer: null,
            text: "Start"
        };
    };

    state = {
        seconds: 0,
        minutes: 0
    };

    componentDidMount() {

    };
    resetTimer() {
        this.setState({ minutes: 0, seconds: 0 });
        this.timer.isOn = "true";
        this.startstopTimer();
    };
    startstopTimer() {
        if (!this.timer.isOn) {
            this.timer.isOn = true;
            this.timer.text = "Stop";
            this.timer.timer = setInterval(() => {
                if (this.state.seconds >= 59) {
                    this.setState({ minutes: this.state.minutes + 1 });
                    this.setState({ seconds: 0 });
                } else {
                    this.setState({ seconds: this.state.seconds + 1 });
                };
            }, 1000);
        } else {
            this.timer.isOn = false;
            this.timer.text = "Start";
            clearInterval(this.timer.timer);
        };
    };

    render() {
        const { color, size } = this.props;
        let { minutes } = this.state;
        let { seconds } = this.state;

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
                    <Button
                        title={this.timer.text}
                        onPress={() => this.startstopTimer()}
                    />
                    <Button
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
