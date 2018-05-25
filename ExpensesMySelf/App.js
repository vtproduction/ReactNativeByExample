import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';
import Home from './src/home';
import AddExpense from './src/addExpense';
import Navigator from './navigator';
import { NavigationService } from "./src/services/Navigation";

export default class App extends React.Component {
	render() {
		return <Navigator />;
	}
} 




const styles = StyleSheet.create({
	container: {

		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

