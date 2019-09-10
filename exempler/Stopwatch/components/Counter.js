import React, { Component } from 'react'
import { Text,} from 'react-native'

export default class Counter extends Component {
    state = { 
        seconds: 0,
        minutes: 0 
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.seconds >= 60) {
                this.setState({minutes: this.state.minutes + 1})
                this.setState({seconds: 0})
            } else {
                this.setState({seconds: this.state.seconds + 1})
            }
        }, 1000);
    }
    render() {
        const {minutes} = this.state
        const {seconds} = this.state
        console.log(this.state.seconds)
        return (
            <Text>
                {minutes} : {seconds}
            </Text>
        )
    }
}

