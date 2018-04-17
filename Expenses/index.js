import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import {
    AppRegistry,
    NavigatorIOS,
    StyleSheet
} from 'react-native';
import Home from './app/Home';


export default class Expenses extends Component {
    render() {
        return <Home />;
    }
} 




AppRegistry.registerComponent('Expenses', () => Expenses);