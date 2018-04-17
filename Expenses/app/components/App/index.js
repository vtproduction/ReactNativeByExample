/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from "react-native";
import * as dateMethods from "../../utils/dateMethods";
import * as storageMethods from "../../utils/storageMethods";
import EnterBudget from "../../components/EnterBudget";
import styles from "./styles";
import { Actions } from "react-native-router-flux";

export default class App extends Component {
    constructor (props) {
        super ();
        this.state = {
            budget: undefined
        }
    }

    componentDidMount () {
        
        this.setState({
            month: dateMethods.getMonth(),
            year: dateMethods.getYear()
        });
        console.log("TOMO month: " + this.state.month);
        console.log("TOMO year: " + this.state.year);
        
        this._updateBudget();
    }

    render () {
        return (
            <View style={ styles.appContainer }>
                <Text>
                    Your budget is { this.state.budget || 'not set' }!
                </Text>
            </View>
        )
    }


    _renderEnterBudgetComponent () {

        /* this.props.navigation.navigate("EnterBudget", {
            monthString: dateMethods.getMonthString(this.state.month),
            saveAndUpdateBudget: budget => this._saveAndUpdateBudget(budget)
        }); */
        Actions.EnterBudget({
            monthString: dateMethods.getMonthString(this.state.month),
            saveAndUpdateBudget: budget =>
                this._saveAndUpdateBudget(budget)
        });
    }

    async _saveAndUpdateBudget (budget) {
        await storageMethods.saveMonthlyBudget(this.state.month, this.state.year, budget);
        this._updateBudget();
    }

    async _updateBudget () {
        let response = await storageMethods.checkCurrentMonthBudget();
        if (response !== false) {
            this.setState({
                budget: response
            });
            return;
        } 
        this._renderEnterBudgetComponent();
    }

}