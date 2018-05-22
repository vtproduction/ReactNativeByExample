import React, { Component } from "react";
import {
    Text,
    View
} from "react-native";
import styles from "./styles";
import Actions from 'react-native-router-flux';


export default class Home extends Component{
    constructor(props){
        super();
    }


    componentWillMount(){
        
    }


    render(){
        return <View>
                <Text onPress={this.onPressTitle}>HOME</Text>
            </View>;
    }

    onPressTitle(){
        Actions.AddExpense();
    }
}