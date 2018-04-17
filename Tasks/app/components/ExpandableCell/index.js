import React, { Component } from 'react';
import PropTypes from "prop-types";
import {
  LayoutAnimation,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import styles from './styles';

import DatePickerDialogue from '../DatePickerDialogue';

class ExpandableCell extends Component {
  static propTypes = {
    title: PropTypes.object.isRequired
  }

  constructor (props) {
    super (props);

    this.state = {
      expanded: false
    }
  }

  componentWillUpdate () {
    LayoutAnimation.linear();
  }

  render () {
    return (
      <View
        style={ styles.container }>
        <View>
          <TouchableHighlight
            onPress={ () => this._onPress() }
            underlayColor={ '#D3D3D3' }>
            <DatePickerDialogue
              textConditionals={ this.props.textConditionals } />
          </TouchableHighlight>
        </View>
        <View
          style={ [styles.collapsibleContent, { maxHeight: 100 }] } >
          { this.props.children }
        </View>
      </View>
    )
  }

  _onPress () {

    this.props.onPress();

    this.setState({
      expanded: !this.state.expanded
    });
  }

}

export default ExpandableCell;
