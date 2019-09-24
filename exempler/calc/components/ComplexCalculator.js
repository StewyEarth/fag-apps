import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements';

export default class ComplexCalculator extends Component {
    state = {
        equation: "0",
    }
    numberpress(number) {
        let { num1 } = this.state;
        if (num1 == "0") {
            this.setState({ num1: number })
        } else {
            this.setState({ num1: String(num1) + String(number) })
        }
    }

    operatorBtn(operator) {
        let { num1 } = this.state;
        let { num2 } = this.state;
        this.setState({ mode: operator })
        if (num1 !== "0") {
            this.setState({ num2: num1, num1: 0 })
        }
        if (num1 !== "0" && num2 !== "0") {
            this.getResult();
        }
    }
    getResult() {
        let { num1 } = this.state;
        let { num2 } = this.state;
        let { mode } = this.state;

        if (mode == "plus") {
            let result = Number(num1) + Number(num2)
            this.setState({ num1: result, num2: "0", mode: "" })
        }
        if (mode == "subtract") {
            let result = Number(num2) - Number(num1)
            this.setState({ num1: result, num2: "0", mode: "" })
        }
        if (mode == "division") {
            let result = Number(num2) / Number(num1)
            this.setState({ num1: result, num2: "0", mode: "" })
        }
        if (mode == "addition") {
            let result = Number(num2) * Number(num1)
            this.setState({ num1: result, num2: "0", mode: "" })
        }
    }
    clear(){
        this.setState({ num1: "0", num2: "0", mode: "" })
    }

    render() {
        let { num1 } = this.state
        return (
            <View>
                <Text style={{ fontSize: 32 }}> {num1} </Text>

                <View style={{ flexDirection: "row" }}>
                    <Button style={styles.number} title="7" onPress={() => { this.numberpress(7) }} />
                    <Button style={styles.number} title="8" onPress={() => { this.numberpress(8) }} />
                    <Button style={styles.number} title="9" onPress={() => { this.numberpress(9) }} />
                    <Button style={styles.number} title="+" onPress={() => { this.operatorBtn("plus") }} />
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Button style={styles.number} title="4" onPress={() => { this.numberpress(4) }} />
                    <Button style={styles.number} title="5" onPress={() => { this.numberpress(5) }} />
                    <Button style={styles.number} title="6" onPress={() => { this.numberpress(6) }} />
                    <Button style={styles.number} title="-" onPress={() => { this.operatorBtn("subtract") }} />
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Button style={styles.number} title="1" onPress={() => { this.numberpress(1) }} />
                    <Button style={styles.number} title="2" onPress={() => { this.numberpress(2) }} />
                    <Button style={styles.number} title="3" onPress={() => { this.numberpress(3) }} />
                    <Button style={styles.number} title="*" onPress={() => { this.operatorBtn("addition") }} />
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Button style={styles.number} title="," />
                    <Button style={styles.number} title="0" onPress={() => { this.numberpress(0) }} />
                    <Button style={styles.number} title="=" onPress={() => { this.getResult() }} />
                    <Button style={styles.number} title="/" onPress={() => { this.operatorBtn("division") }} />
                </View>
                <Button title="Clear" onPress={() => { this.clear() }}  />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    number: {
        fontSize: 32,
        margin: 8,
        width: 40
    }
})
