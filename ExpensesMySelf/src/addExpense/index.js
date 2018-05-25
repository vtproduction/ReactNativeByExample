import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import styles from "./styles";
import AddExpenseInput from '../addExpenseInput'
export default class AddExpense extends Component {

    constructor(props) {
        super();
    }

    
    

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam("id", -1);
        return (
            <View>
                <AddExpenseInput
                    month={1} 
                    year={2018}/>
                <Button title="Go back" onPress={() => this.onBack(itemId)} />
            </View>);
    }

    onBack = (itemId) => {
        //navigation.params.callback(-100);
        this.props.navigation.goBack();
        this.props.navigation.state.params.onCallback({hi : itemId})
    }
}
