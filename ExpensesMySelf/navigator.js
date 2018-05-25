import {createStackNavigator, StackNavigator }from "react-navigation";
import Home from "./src/home";
import AddExpense from "./src/addExpense";

const Navigator = createStackNavigator(
    {
        Home: {screen: Home},
        AddExpense: {
            screen: AddExpense,
            navigationOptions: {
                title: 'Add new'
            }
        }
    },
    {
        initialRouteName: "Home"
    }
);

export default Navigator;