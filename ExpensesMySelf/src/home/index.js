import React, { Component } from "react";
import {
    Text,
    View,
    Button
} from "react-native";
import styles from "./styles";


export default class Home extends Component{
    constructor(props){
        super();
    }


    componentWillMount(){
        
    }


    render(){
        return (
            <View>
                <Text onPress={this.onPressTitle}>HOME</Text>
                <Button title="Go to Add Expense" onPress={this.onPressTitle} />
            </View>
        );
    }

    onPressTitle = () =>{
        this.props.navigation.navigate("AddExpense",{
            id: 1,
            onCallback: this.onCallback
        });
    }

    onCallback = data =>{
        console.log('====================================');
        console.log(data);
        console.log('====================================');
    }
}