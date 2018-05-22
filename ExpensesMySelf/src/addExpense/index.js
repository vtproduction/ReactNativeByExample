import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default class AddExpense extends Component {
    constructor(props) {
        super();
    }

    componentWillMount() {}

    render() {
        return (
            <View>
                <Text>ADD EXPENSE</Text>
            </View>
        );
    }
}
