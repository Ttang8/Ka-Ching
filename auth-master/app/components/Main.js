import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';

// import {unauthUser} from '../actions';
import TodoList from './TodoList';

// onLogout: function() {
//   this.props.dispatch(unauthUser);
// },
// <TouchableOpacity onPress={this.onLogout}>
//   <Text>
//     Logout
//   </Text>
// </TouchableOpacity>


var Main = React.createClass({

  render() {
    return (
      <NavigatorIOS
        initialRoute = {{
          component: TodoList,
          title: 'Todo List',
          navigationBarHidden: true
        }}
        style={{flex: 1}}/>
    );
  }
});

module.exports = Main;
