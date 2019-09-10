import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class Counter extends Component {
    constructor() {
        super()
        this.timer = {
            isOn: false,
            timer: null,
        };
    }

    state = {
        seconds: 0,
        minutes: 0
    }

    componentDidMount() {
        this.startTimer();
    }
    stopTimer() {
        clearInterval(this.timer.timer)
        this.timer.isOn = false
    }
    startTimer() {
        if (!this.timer.isOn) {
            this.timer.isOn = true;
            this.timer.timer = setInterval(() => {
                if (this.state.seconds >= 59) {
                    this.setState({ minutes: this.state.minutes + 1 })
                    this.setState({ seconds: 0 })
                } else {
                    this.setState({ seconds: this.state.seconds + 1 })
                }
            }, 1000);
        }
    }

    render() {
        const { color, size } = this.props
        const { minutes } = this.state
        const { seconds } = this.state
        return (
            <View>
                <Text style={{ color, fontSize: size }}>
                    {minutes} : {seconds}
                </Text>
                <View style={styles.fixToText}>
                    <Button
                        title="Start"
                        onPress={() => this.startTimer()}
                    />
                    <Button
                        title="Stop"
                        onPress={() => this.stopTimer()}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});
