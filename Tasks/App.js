import React, { Component } from "react";
import { AppRegistry } from "react-native";
import NavigationExperimental from "react-native-deprecated-custom-components";
import TasksList from "./app/components/TasksList";
import EditTask from "./app/components/EditTask";

export default class Tasks extends Component {
    render() {
        const routes = [
            { title: "Tasks", index: 0 },
            { title: "Edit Task", index: 1 }
        ];

        return (
            <NavigationExperimental.Navigator
                initialRoute={{ index: 0 }}
                renderScene={(routes, navigator) =>
                    this._renderScene(routes, navigator)
                }
            />
        );
    }

    _renderScene(route, navigator) {
        if (route.index === 0) {
            return <TasksList title={route.title} navigator={navigator} />;
        }

        if (route.index === 1) {
            return (
                <EditTask
                    navigator={navigator}
                    route={route}
                    details={route.passProps.details}
                    changeTaskDue={route.passProps.changeTaskDue}
                    changeTaskName={route.passProps.changeTaskName}
                    changeTaskStatus={route.passProps.changeTaskStatus}
                />
            );
        }
    }
}
