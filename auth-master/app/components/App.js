import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

// import {} from '../actions';
import LoginContainer from './LoginContainer';
import AlertContainer from './alerts/AlertContainer';
import { Root } from '../config/router';

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderMainView(){
    if (this.props.user_id){
      return (
          <Root />
      );
    } else {
    return (
      <LoginContainer />
    );
   }
  }

  render(){
    return (
       <View style={{flex: 1}}>
         <StatusBar barStyle="light-content"/>
         {this.renderMainView()}
         <AlertContainer/>
       </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: 20,
//     backgroundColor: '#ccc'
//   }
// });

export default App;
