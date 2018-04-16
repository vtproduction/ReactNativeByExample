import React, { Component } from "react";
import { AppRegistry, View, NavigatorIOS, StyleSheet } from "react-native";

import TasksList from "./app/components/TasksList";

export default class Tasks extends Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: TasksList,
                    title: 'Task'
                }}
                style={styles.container}/>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})

