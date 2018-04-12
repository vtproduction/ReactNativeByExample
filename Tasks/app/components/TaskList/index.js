import React, { Component } from "react";
import { ListView, Text, TextInput, View, AsyncStorage } from "react-native";
import styles from './styles';
import TaskListCell from '../TaskListCell';


export default class TaskList extends Component{
    constructor (props){
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2
        })

        this.state = {
            dataSource: ds.cloneWithRows([
                'Buy milk','Walk the dog','Do laundry','Write the first chapter of my book'
            ]),
            listOfTasks: [],
            text: ''
        }
    }

    componentDidMount(){
        this._updateList();
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput
                    autoCorrect={false}
                    onChangeText={(text) => this._changeTextInputValue(text)}
                    onSubmitEditing={() => this._addTask()}
                    returnKeyType={'done'}
                    styles={styles.TextInput}
                    value={this.state.text}/>
                <ListView
                    dataSource={this.state.dataSource}
                    enableEmptySections={true}
                    renderRow={(rowData) => this._renderRowData(rowData)}/>
            </View>
        );
    }

    async _addTask (){
        
        const singleTask = {
            completed: false,
            text: this.state.text
        }
        const listOfTasks = [...this.state.listOfTasks, singleTask];
        
        await AsyncStorage.setItem('listOfTasks', JSON.stringify(listOfTasks));
        this._updateList();
    }

    async _updateList(){
        let response = await AsyncStorage.getItem('listOfTasks')
        let listOfTasks = await JSON.parse(response) || []
        this.setState({
            listOfTasks: listOfTasks
        })
        this._changeTextInputValue('');
    }

    _changeTextInputValue(text){
        this.setState({text:text})
    }

    _renderRowData(rowData, rowId){
        return(
            <TaskListCell
                completed={rowData.completed}
                id={rowId}
                onPress={(rowId) => this._completeTask(rowId)}
                text={rowData.text}
            />
        )
    }

    
}