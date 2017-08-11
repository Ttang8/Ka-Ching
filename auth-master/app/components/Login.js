import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {loginUser, signupUser , addAlert} from '../actions';
import Swiper from 'react-native-swiper';
import Greeting from './greeting/Greeting';
import Greeting2 from './greeting/Greeting2';
import Greeting3 from './greeting/Greeting3';


var Login = React.createClass({
  getInitialState: function() {
    return {
      loading: false
    };
  },
  onSignIn: function(){
    var {dispatch, fields: {email, password}} = this.props;
    this.setState({
      loading: true
    });
    dispatch(loginUser(email.value, password.value)).then(()=>{
      this.setState({
        loading: false
      });
    });
  },
  onSignUp: function(){
    var {dispatch, fields: {email, password}} = this.props;
    this.setState({
      loading: true
    });
    dispatch(signupUser(email.value, password.value)).then(()=>{
      this.setState({
        loading: false
      });
    });
  },
  render() {
    var {fields: {email, password}} = this.props;
    var renderError = (field) => {
      if (field.touched && field.error){
        return (
          <Text style={styles.formError}>{field.error}</Text>
        );
      }
    };

    if (this.state.loading){
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>
          Loading...
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Ka-Ching!
          </Text>
        </View>

        <View style={styles.swiped}>
          <Swiper style={styles.wrapper} index={1} loop={false} activeDotColor={'white'} showsButtons={false}>
            <View style={styles.slide1}>
              <Greeting/>
            </View>
            <View style={styles.slide2}>
              <Greeting2/>
            </View>
            <View style={styles.slide3}>
              <Greeting3/>
            </View>
          </Swiper>
        </View>

        <View style={styles.field}>
          <TextInput
            {...email}
            placeholder="Email"
            style={styles.textInput}/>
          <View>
            {renderError(email)}
          </View>
        </View>
        <View style={styles.field}>
          <TextInput
            secureTextEntry
            {...password}
            placeholder="Password"
            style={styles.textInput}/>
            <View>
              {renderError(password)}
            </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity  onPress={this.onSignIn}>
            <Text style={styles.button}>
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onSignUp}>
            <Text style={styles.button}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      );
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop: 15,
    backgroundColor: '#2ecc71',
    flexDirection: 'column'
  },
  titleContainer: {
    padding: 10
  },
  title: {
    color: 'white',
    fontSize: 35,
    marginTop: 20,
    marginBottom: 15,
    alignSelf: 'center'
  },
  field: {
    borderRadius: 5,
    padding: 5,
    paddingLeft: 8,
    margin: 7,
    marginTop: 0,
    backgroundColor: 'white'
  },
  textInput: {
    height: 26
  },
  buttonContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    fontSize: 30,
    color: 'white'
  },
  formError: {
    color: 'red'
  },
  swiped: {
    flex: 4
  }
});

var validate = (formProps) => {
  var errors = {};
  if (!formProps.email){
    errors.email = "Please enter an email.";
  }
  if (!formProps.password){
    errors.password = "Please enter a password.";
  }
  return errors;
};

module.exports = reduxForm({
  form: 'login',
  fields: ['email','password'],
  validate: validate
}, null, null)(Login);
