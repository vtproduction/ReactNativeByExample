import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";

import App from "../components/App";
import EnterBudget from "../components/EnterBudget";

export default class Home extends Component {
    render() {
        return <Router>
                <Scene key="root">
                    <Scene key="App" component={App} title="Home" initial={true} />
                    <Scene key="EnterBudget" component={EnterBudget} title="EnterBudget" />
                </Scene>
            </Router>;
    }
}
