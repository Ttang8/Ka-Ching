import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

import {removeAlert} from '../../actions';

var Alert = React.createClass({
  onRemoveAlert(){
    var {dispatch, alert} = this.props;
    dispatch(removeAlert(alert.id));
  },
  render() {
    return (
    <TouchableWithoutFeedback onPress={this.onRemoveAlert}>
        <View style={styles.container}>
          <Text style={styles.text}>
            {this.props.alert.text}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#f2dede',
    borderColor: '#ebccd1',
    borderWidth: 2
  },
  text: {
    color: '#a94442'
  }
});

module.exports = connect()(Alert);
