import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';
import Home from './src/home';
import AddExpense from './src/addExpense';
/* export default class App extends React.Component {
	render() {
		return <Router>
		<Stack key="root">
		<Scene key="Home" component={Home} title="Home" />
		<Scene key="AddExpense" component={AddExpense} title="Add Expense" />
		</Stack>
		</Router>;
	}
} */

const App = () => (
    <Router>
        <Stack key="root">
            <Scene key="Home" component={Home} title="Home" initial />
            <Scene key="AddExpense" component={AddExpense} title="Add Expense"/>
        </Stack>
    </Router>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default App;
