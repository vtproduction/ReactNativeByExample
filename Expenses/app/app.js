import React, { Component } from "react";
import Home from './components/Home';
import {
    Scene,
    Router,
    Stack
} from "react-native-router-flux";
export default class App extends Component {
    constructor(props) {
        super();
    }


    render(){
        return <Router>
                <Stack key="root">
                    <Scene key="home" component={Home} />
                </Stack>
            </Router>;
    }
}