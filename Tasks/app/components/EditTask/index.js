import React, { Component } from "react";
import PropTypes from "prop-types";
import {Text, View, DatePickerIOS, Button, Switch } from 'react-native';
import moment from 'moment';
import { styles } from "./styles";
import { ExpandableCell } from "../ExpandableCell";
export default class EditTask extends Component{

    static propTypes={
        completed: PropTypes.bool.isRequired,
        due: PropTypes.string,
        formattedDate: PropTypes.string,
        text: PropTypes.string.isRequired
    }

    constructor (props){
        super (props);
        this.state = {
            date: new Date(),
            expanded: false,
            completed: this.props.completed,
            text: this.props.text
        }
    }

    render(){

        const noDueDateTitle = 'Set Reminder';
        const dueDateSetTitle = 'Due On ' + this.state.formattedDate;

        return <View style={styles.editTaskContainer}>
                <View style={[styles.expandableCellContainer, { maxHeight: this.state.expanded ? this.state.datePickerHeight : 40 }]}>
                    <ExpandableCell title={this.state.dateSelected ? dueDateSetTitle : noDueDateTitle} expanded={this.state.expanded} onPress={() => this._onExpanded()}>
                        <DatePickerIOS date={this.state.date} onDateChange={date => this._onDateChange(date)} style={styles.datePicker} onLayout={event => this._getDatePickerHeight(event)} />
                    </ExpandableCell>
                </View>
                <View style={styles.clearDateButtonContainer}>
                    <Button
                        color={'#44743'}
                        disabled={this.state.dateSelected ? false : true}
                        onPress={()=> this._clearDate()}
                        title={'Clear Date'}/>
                </View>
            </View>;
    }

    _clearDate(){
        this.setState({
            dateSelected: false
        })
    }

    _getDatePickerHeight(event){
        this.setState({
            datePickerHeight: event.nativeEvent.layout.width
        })
    }

    _onExpanded(){
        this.setState({
            expanded: !this.state.expanded
        })
    }

    _formatDate(date){
        return moment(date).format('111')
    }

    _onDateChange (date){
        this.setState({
            dateSelected: true,
            formattedDate: this._formatDate(date)
        })
    }
}