import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Text,
    View,
    Button,
    TextInput
} from "react-native";
import styles from "./styles";
export default class AddExpenseInput extends Component {
    static propTypes = {
        month: PropTypes.number.isRequired,
        year: PropTypes.number.isRequired
    }

    constructor(props) {
        super();

        this.state = {
            value: 0,
            month: 1,
            year: 1,
            description: ""
        }
    }

    componentWillMount() {
        this.setState({
            month: this.props.month,
            year: this.props.year
        });

    }

    render() {
        return (
            <View>
                <Text>ADD NEW EXPENSE</Text>
                <Text>{this.state.month}</Text>
                <Text>{this.state.year}</Text>
                <TextInput keyboardType={"numeric"} onChangeText={value => this._changeAmount(value)} placeholder={"0"} value={this.state.value} />
                <TextInput onChangeText={value => this._changeDescription(value)} placeholder={"Book on React Native development"} value={this.state.description} />
                <Button color={"#86B2CA"} disabled={!(this.state.value && this.state.description)} onPress={() => this._saveValue()} title={"Save Expense"} />
            </View>
        );
    }

    _saveValue(){

    }

    _changeAmount(newValue) {
        this.setState({
            value: newValue
        })
    }

    _changeDescription(newValue) {
        this.setState({
            description: newValue
        })
    }
}
